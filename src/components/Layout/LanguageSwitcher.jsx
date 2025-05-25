"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const currentLang = pathSegments[0];

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    pathSegments[0] = newLang;

    router.replace(`/${pathSegments.join("/")}`);
    switch (currentLang) {
      case "ar":
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.setAttribute("lang", currentLang);

        break;
      default:
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.setAttribute("lang", currentLang);
    }
  };
  return (
    <div
      className="w-[70px] h-[32px] rounded-full  bg-transparent border border-white  flex items-center cursor-pointer relative"
      onClick={toggleLanguage}
    >
      <div
        className={`w-1/2  h-full flex items-center   rounded-s-full justify-center font-bold text-base z-10 ${
          currentLang === "ar" ? " text-primary bg-white" : "text-white"
        }`}
      >
        Ar
      </div>
      <div
        className={`w-1/2 h-full flex items-center   rounded-e-full border-e border-white justify-center font-bold text-base z-10 ${
          currentLang === "en" ? "text-primary bg-white " : "text-white"
        }`}
      >
        En
      </div>

      <div
        className={`absolute top-0 h-full w-1/2  rounded-2XL transition-all duration-300 ${
          currentLang === "en" ? "left-0" : "left-1/2"
        }`}
      />
    </div>
  );
};

export default LanguageSwitcher;
