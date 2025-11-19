"use client";

import { ExternalLink, Zap, Globe, Code2 } from "lucide-react";

export default function FreeAPIsPage() {
  const apis = [
    { name: "Random User Data", link: "/api/random-data" },
    { name: "Random Bank Account", link: "/api/bank/random" },
    { name: "Random Waifu Image", link: "/api/random-waifu" },
    { name: "Jokes API", link: "/api/jokes/random" },
    { name: "Motivational Quotes", link: "/api/quotes/motivation" },
    { name: "Cat Facts", link: "/api/cats/facts" },
    { name: "Dog Breeds", link: "/api/dogs/breeds" },
    { name: "Meme Generator", link: "/api/memes/dank" },
    { name: "Fake Products", link: "/api/products" },
    { name: "Weather Mock", link: "/api/weather/delhi" },
    { name: "Lorem Ipsum Text", link: "/api/lorem" },
    { name: "Fake Company Data", link: "/api/company" },
    { name: "Random Password", link: "/api/password" },
    { name: "UUID Generator", link: "/api/uuid" },
    { name: "Indian Names", link: "/api/names/india" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <section className="py-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          100+ Free APIs
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
          Completely free • No auth • No rate limit • Instant response
          <br />
          Made for developers, testers, students & n8n automation
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <div className="flex items-center gap-2 bg-green-500/20 px-6 py-3 rounded-full">
            <Zap className="w-6 h-6 text-green-400" />
            <span>Always Online</span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/20 px-6 py-3 rounded-full">
            <Globe className="w-6 h-6 text-blue-400" />
            <span>Global CDN</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apis.map((api, index) => (
            <a
              key={index}
              href={api.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block">
              <div className="h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 transform hover:-translate-y-3 hover:shadow-2xl">
                <div className="flex items-start justify-between mb-4">
                  <Code2 className="w-8 h-8 text-pink-400" />
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pink-400 transition" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {api.name}
                </h3>
                <p className="text-sm text-gray-400 font-mono break-all">
                  {api.link}
                </p>
                <div className="mt-4 text-xs text-pink-400 opacity-0 group-hover:opacity-100 transition">
                  Click to test →
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-gray-800/50 border-2 border-dashed border-gray-600 rounded-2xl px-10 py-8">
            <span className="text-3xl">Plus</span>
            <span className="text-gray-400 text-xl">
              Add your API here — just edit page.tsx
            </span>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <p>
          All APIs are 100% free • Hosted on Vercel • Made with ❤️ by Rupesh
        </p>
      </footer>
    </main>
  );
}
