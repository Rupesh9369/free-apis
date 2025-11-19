// src/app/api/netflix-random/route.ts
import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";
import { parse } from "csv-parse/sync";

const CSV_FILE = path.join(
  process.cwd(),
  "src/app/api/data/netflix_titles.csv"
);

// Cache the data (fast & efficient on Vercel)
let netflixData: any[] = [];

async function loadNetflixData() {
  try {
    const fileContent = await fs.readFile(CSV_FILE, "utf-8");
    netflixData = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      bom: true, // handles BOM if present
    });
    console.log(`Loaded ${netflixData.length} Netflix titles`);
  } catch (error) {
    console.error("Failed to load netflix_titles.csv", error);
    netflixData = [];
  }
}

// Load data on first request
if (netflixData.length === 0) {
  await loadNetflixData();
}

export async function GET() {
  if (netflixData.length === 0) {
    return NextResponse.json(
      { error: "Netflix data not available. Check CSV file." },
      { status: 500 }
    );
  }

  // Return 1 random Netflix title
  const randomTitle =
    netflixData[Math.floor(Math.random() * netflixData.length)];

  return NextResponse.json({
    success: true,
    total_titles: netflixData.length,
    random: {
      show_id: randomTitle.show_id,
      type: randomTitle.type,
      title: randomTitle.title,
      director: randomTitle.director || "Unknown",
      cast: randomTitle.cast || "Unknown",
      country: randomTitle.country || "Unknown",
      date_added: randomTitle.date_added || null,
      release_year: parseInt(randomTitle.release_year),
      rating: randomTitle.rating,
      duration: randomTitle.duration,
      listed_in: randomTitle.listed_in,
      description: randomTitle.description,
    },
  });
}

// Always fresh data
export const dynamic = "force-dynamic";
export const revalidate = 0;
