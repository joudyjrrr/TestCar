// app/used-cars/[id]/page.tsx
import CarDetailClient from "./CarDetailClient";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch("http://localhost:3000/data", { cache: "no-store" });
    const data = await res.json();

    const car = data?.used_cars?.find((c) => c.id.toString() === params.id);
    if (!car) return {};

    const url = `http://localhost:3000/used-cars/${car.id}`;
    return {
      title: `${car.title} - AED ${car.price}`,
      description: `${car.year} ${car.make_title} ${car.model_title} in ${car.city_name}`,
      openGraph: {
        title: `${car.title} - AED ${car.price}`,
        description: `${car.year} ${car.make_title} ${car.model_title} in ${car.city_name}`,
        url,
        images: [car.thumb_picture],
      },
      alternates: {
        canonical: url,
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {};
  }
}

export default function CarDetailPage({ params }) {
  return <CarDetailClient id={params.id} />;
}
