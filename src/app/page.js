// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "@/Components/CarCard";

export default function Home() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data`)
      .then((res) => {
        setCars(res.data?.used_cars || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch used cars:", err);
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-6 max-w-7xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-black max-sm:text-2xl">
          Used Cars Marketplace
        </h1>
        <p className="text-gray-500 mt-2 text-lg max-sm:text-base text-nowrap">
          Find your perfect car today — across all UAE cities
        </p>
      </header>

      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-white rounded-xl shadow p-4 space-y-3"
              >
                <div className="bg-gray-300 h-40 w-full rounded" />
                <div className="bg-gray-300 h-4 w-3/4 rounded" />
                <div className="bg-gray-300 h-4 w-1/2 rounded" />
                <div className="bg-gray-200 h-3 w-full rounded" />
              </div>
            ))
          : cars.map((car) => <CarCard key={car.id} car={car} />)}
      </section>
    </main>
  );
}