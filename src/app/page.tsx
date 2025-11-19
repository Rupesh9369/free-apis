"use client";

import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomUser = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/random-data");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Random User Generator
        </h1>

        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : user ? (
          <div className="space-y-4 text-white">
            <div className="bg-white/20 rounded-xl p-5">
              <p className="text-sm opacity-80">Full Name</p>
              <p className="text-2xl font-bold">
                {user.first_name} {user.last_name}
              </p>
            </div>

            <div className="bg-white/20 rounded-xl p-5">
              <p className="text-sm opacity-80">Email</p>
              <p className="text-lg">{user.email}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-xl p-5">
                <p className="text-sm opacity-80">Gender</p>
                <p className="font-semibold">{user.gender}</p>
              </div>

              <div className="bg-white/20 rounded-xl p-5">
                <p className="text-sm opacity-80">Car</p>
                <p className="font-semibold">{user.car}</p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-300 text-center">Failed to load user</p>
        )}

        <button
          onClick={fetchRandomUser}
          className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold rounded-full flex items-center justify-center gap-3 transition transform hover:scale-105"
        >
          <RefreshCw className={`w-6 h-6 ${loading ? "animate-spin" : ""}`} />
          Generate New User
        </button>
      </div>
    </main>
  );
}
