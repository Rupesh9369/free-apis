// src/app/api/random-data/route.ts

import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

// Load MOCK_DATA.json once at startup (super fast on Vercel)
const filePath = path.join(process.cwd(), "src/app/api/random-data/MOCK_DATA.json");
let mockData: any[] = [];

async function loadData() {
    try {
        const jsonData = await fs.readFile(filePath, "utf-8");
        mockData = JSON.parse(jsonData);
    } catch (error) {
        console.error("Failed to load MOCK_DATA.json", error);
        mockData = [];
    }
}

// Load data on first request (Vercel cold start)
if (mockData.length === 0) {
    loadData();
}

export async function GET() {
    // If data failed to load, return error
    if (mockData.length === 0) {
        return NextResponse.json(
            { error: "No data available" },
            { status: 500 }
        );
    }

    // Pick one random user
    const randomUser = mockData[Math.floor(Math.random() * mockData.length)];

    return NextResponse.json(randomUser);
}

// Optional: revalidate every 0 seconds (always fresh)
export const dynamic = "force-dynamic";