"use client";
import BannerForBage from "@/components/Layout/BannerForBage";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import { useLocale, useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { doctor, emp2 } from "../../../../public/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Vacancies from "@/components/Layout/Vacancies";
import Footer from "@/components/Layout/Footer";

const EmployeeContainer = () => {
  const t = useTranslations("employee");
  const locale = useLocale();
  const isEnglish = locale === "en";
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollDirection(scrollTop > lastScrollY.current ? "down" : "up");
    lastScrollY.current = scrollTop;
  };

  return (
    <>
      <FirstHeader />
      <SecondHeader scrollDirection={scrollDirection} />
      <div
        className="w-full overflow-x-hidden z-[50] relative h-screen"
        onScroll={handleScroll}
      >
        <BannerForBage
          img={emp2}
          isPhone={false}
          titleHead={"employee.title2"}
          classNameGr="!from-black/80"
          classNameTitle="text-7xl max-sm:text-5xl"
        />

        <div className="w-fit mt-[100px] p-4 pt-2 pb-0 mx-auto flex max-sm:flex-col rounded-3xl gap-10 items-start bg-primary">
          <div className="flex flex-col gap-4 mt-10 text-white">
            <h1 className="font-bold text-4xl">{t("title")}</h1>
            <div className="flex flex-col text-white gap-1">
              <p>{t("line1")}</p>
              <p>{t("line2")}</p>
            </div>
            <Button className="w-fit text-2xl ms-10">{t("volunteerNow")}</Button>
          </div>

          <Image
            src={doctor}
            alt="doctor illustration"
            className="w-[200px] h-[200px] mt-[10px] max-sm:mx-auto"
          />
        </div>

        <Vacancies />
        <Footer />
      </div>
    </>
  );
};

export default EmployeeContainer;
