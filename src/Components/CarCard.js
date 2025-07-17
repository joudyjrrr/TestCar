// Components/CarCard.tsx
import {
  FaGasPump,
  FaMapMarkerAlt,
  FaRoad,
  FaCar,
  FaCogs,
} from "react-icons/fa";
import { MdDateRange, MdOutlineWhatsapp } from "react-icons/md";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CarCard({ car }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/used-cars/${car.id}`);
      }}
      className="border cursor-pointer rounded-2xl shadow-md overflow-hidden"
    >
      {/* صورة السيارة */}
      <div className="relative">
        <Image
          src={car.thumb_picture}
          alt={car.title}
          width={400}
          height={300}
          className="object-cover group-hover:scale-105 h-52 transition-transform duration-300"
          priority
        />
        <div className="absolute top-2 left-2 bg-purple-700 text-white text-xs font-semibold px-2 py-1 rounded">
          FEATURED
        </div>
        <div className="absolute bottom-2 left-2 bg-white text-gray-700 text-sm px-2 py-1 rounded flex items-center gap-1">
          <BsImages />
          {car.photosCount || 10}
        </div>
      </div>

      {/* تفاصيل السيارة */}
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm line-through">
              AED {car.originalPrice || 139000}
            </p>
            <p className="text-2xl font-bold text-green-600">AED {car.price}</p>
            <p className="text-sm text-orange-500 font-medium">
              AED {car.monthly || "1,998"}{" "}
              <span className="text-gray-600">Per month</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <button className="bg-blue-700 text-white text-sm px-3 py-1 rounded">
              Show Number
            </button>
            <button className="bg-green-500 text-white text-sm px-3 py-1 rounded flex items-center gap-1">
              <MdOutlineWhatsapp className="text-lg" /> WhatsApp
            </button>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-base">{car.title}</h2>
        </div>

        <div className="flex flex-wrap gap-3 text-gray-600 text-sm">
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt /> {car.location || "Dubai"}
          </span>
          <span className="flex items-center gap-1">
            <FaRoad /> {car.km || "179,000"}
          </span>
          <span className="flex items-center gap-1">
            <MdDateRange /> {car.year || "2021"}
          </span>
          <span className="flex items-center gap-1">
            <FaCogs /> {car.transmission || "Automatic"}
          </span>
          <span className="flex items-center gap-1">
            <FaGasPump /> {car.fuel || "Petrol"}
          </span>
          <span className="flex items-center gap-1">
            <FaCar /> {car.specs || "GCC Specs"}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between mt-3">
          <div className="flex gap-2 text-xs">
            {car.exportable && (
              <span className="bg-gray-200 px-2 py-1 rounded">
                Can be exported
              </span>
            )}
            {car.urgent && (
              <span className="bg-blue-500 text-white px-2 py-1 rounded">
                Urgent
              </span>
            )}
          </div>
          <button className="text-xs border px-3 py-1 rounded">Compare</button>
        </div>

        <p className="text-xs text-blue-600 mt-2 cursor-pointer">
          Do you have a similar {car.make || "BMW X6"} to sell in Dubai? Sell it
          yourself!
        </p>
      </div>
    </div>
  );
}
