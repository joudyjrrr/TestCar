"use client";
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import { phone, phone2 } from "../../../public/images";

const BannerForBage = ({
  titleHead,
  img,
  classNameGr,
  isPhone,
  classNameTitle,
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const isEnglish = locale === "en";
  useLanguageDirection();

  return (
    <div className="w-full h-screen relative overflow-hidden pt-20 mt-[80px]">
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src={img}
          alt={""}
          fill
          className={`object-cover transition-opacity duration-1000 ease-in-out  ${
            isEnglish ? "scale-x-[-1]" : ""
          }`}
        />
        {isPhone && (
          <div className="bg-white absolute  cursor-pointer bottom-0 end-[200px] rounded-t-[30px] p-2">
            <div className="bg-primary text-white flex gap-2 items-center p-2 rounded-[30px] ">
              <p dir="ltr" className="text-3xl">
                +963 930 099 034{" "}
              </p>
              <div className="bg-white rounded-full p-2">
                <Image alt="" src={phone2} className="w-8 h-8" />
              </div>
            </div>
          </div>
        )}
        <div
          className={`absolute top-0 z-[10] left-0 w-full h-full bg-gradient-to-b from-black/50 to-transparent ${classNameGr}`}
        />
      </div>
      <div className="relative z-20 flex flex-col justify-center items-center h-full">
        <div
          className={`flex items-start text-9xl max-sm:text-5xl max-md:text-6xl  font-semibold max-w-full  justify-center  h-full  px-6 max-md:px-16 text-white ${classNameTitle}`}
        >
          {t(titleHead)}
        </div>
      </div>
    </div>
  );
};

export default BannerForBage;
