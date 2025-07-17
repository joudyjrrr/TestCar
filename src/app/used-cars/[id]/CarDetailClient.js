// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCar,
} from "react-icons/fa";

function SkeletonLoader() {
  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="md:col-span-3 space-y-2">
          <div className="w-full h-96 bg-gray-200 rounded-xl"></div>
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-24 h-16 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
      <div className="h-6 bg-gray-200 w-32 rounded"></div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-200 rounded"></div>
        ))}
      </div>
      <div className="h-6 bg-gray-200 w-32 rounded"></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-6 bg-gray-200 rounded"></div>
        ))}
      </div>
      <div className="h-6 bg-gray-200 w-32 rounded"></div>
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded"></div>
        ))}
      </div>
    </main>
  );
}

export default function CarDetailClient({ id }) {
  const [car, setCar] = useState(null);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data")
      .then((res) => {
        const found = res.data?.used_cars?.find((c) => c.id.toString() === id);
        setCar(found);
      })
      .catch((err) => console.error("Failed to fetch car:", err));
  }, [id]);

  if (!car) return <SkeletonLoader />;

  const descriptionLines = car.description
    ?.split("<p>")
    .slice(0, 2)
    .join("<p>");

  return (
    <main className="p-6 max-w-6xl mx-auto space-y-6 bg-gray-50">
      {/* Car Title */}
      <h1 className="text-3xl max-sm:text-xl font-bold text-center text-gray-800">
        {car.title}
      </h1>

      {/* Image Gallery Section */}
      <section className="w-full">
        <div className="md:col-span-3">
          <div className="relative w-full h-96 mb-4 rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            <Image
              src={car.pictures[activeImage]}
              alt={`Main image`}
              fill
              className="object-contain"
            />
            <div className="absolute top-2 right-2 bg-black/60 text-white text-sm px-2 py-1 rounded">
              {activeImage + 1} / {car.pictures.length}
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 max-sm:grid max-sm:grid-cols-10">
            {car.pictures.map((pic, idx) => (
              <div
                key={idx}
                className={`relative w-24 h-16 rounded border cursor-pointer overflow-hidden transition-all duration-200 hover:scale-105 ${
                  activeImage === idx ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setActiveImage(idx)}
              >
                <Image
                  src={pic}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Price & Contact */}
      </section>
      <aside className="bg-white p-4 rounded-xl shadow-md space-y-4 flex flex-col justify-between border border-gray-100 text-[17px]">
        <div className="space-y-2">
          <p className="text-green-600 text-2xl font-semibold">
            AED {car.price.toLocaleString()}
          </p>
          <div className="flex gap-4 items-center max-sm:text-sm">
            <p className="text-gray-600 flex items-center gap-2">
              <FaMapMarkerAlt className="text-gray-500" /> {car.city_name}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaCalendarAlt className="text-gray-500" /> {car.year}
            </p>
            <p className="text-gray-600 flex items-center gap-2">
              <FaCar className="text-gray-500" /> {car.make_title} /{" "}
              {car.model_title}
            </p>
          </div>
        </div>
      </aside>
      {/* Highlights */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Vehicle Highlights</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            { label: "Model Year", value: car.year },
            {
              label: "Kilometers",
              value: `${car.km_driven.toLocaleString()} KM`,
            },
            { label: "Location", value: car.city_name },
            { label: "Transmission", value: car.transmission_type },
            { label: "Fuel Type", value: car.fuel_type },
            { label: "Exterior Color", value: car.exterior_color },
            { label: "Regional Specs", value: "GCC Specs" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border p-3 rounded bg-white shadow-sm text-center"
            >
              <p className="text-xs text-gray-400">{item.label}</p>
              <p className="font-medium text-sm text-gray-700">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="shadow-md rounded bg-white p-4 border border-gray-100">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-700">
          {(car.description.match(/<li>(.*?)<\/li>/g) || []).map(
            (item, idx) => (
              <div key={idx} className="flex items-start">
                <span className="mr-2 text-green-600">✔</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </div>
            )
          )}
        </div>
      </section>

      {/* Car Description */}
      <section className="shadow-md rounded bg-white p-4 border border-gray-100">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <div
          className="prose max-w-none text-sm text-gray-700"
          dangerouslySetInnerHTML={{
            __html: showFullDesc ? car.description : descriptionLines,
          }}
        />
        {!showFullDesc && (
          <button
            className="text-blue-600 text-sm mt-2 underline hover:text-blue-800"
            onClick={() => setShowFullDesc(true)}
          >
            Read More
          </button>
        )}
      </section>
    </main>
  );
}
