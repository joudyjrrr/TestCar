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
import useScrollDirection from "@/i18n/useScrollDirection";
import { useRouter } from "next/navigation";

const EmployeeContainer = () => {
  const t = useTranslations("employee");
  const atTop = useScrollDirection();
  const router = useRouter();
  return (
    <div className="w-full h-full ">
      <FirstHeader />
      <SecondHeader scrollDirection={atTop} />
      <div className={`w-full overflow-x-hidden z-[50] relative `}>
        <BannerForBage
          img={emp2}
          isPhone={false}
          titleHead={"employee.title2"}
          classNameGr="!from-black/80"
          classNameTitle="text-6xl max-sm:text-5xl mt-28"
        />

        <div className="w-fit mt-[100px] p-4 px-12 py-2 pb-0 mx-auto flex max-sm:flex-col rounded-[50px] gap-14 items-start bg-primary">
          <div className="flex flex-col gap-4 mt-10 text-white">
            <h1 className="font-bold text-4xl">{t("title")}</h1>
            <div className="flex flex-col text-xl font-medium text-white gap-1">
              <p>{t("line1")}</p>
              <p>{t("line2")}</p>
            </div>
            <Button
              onClick={() => {
                router.push("/volunteer");
              }}
              className="w-fit text-2xl ms-10 mb-4"
            >
              {t("volunteerNow")}
            </Button>
          </div>

          <Image
            src={doctor}
            alt="doctor illustration"
            className="w-[200px] h-[200px] mt-[30px] max-sm:mx-auto"
          />
        </div>

        <Vacancies />
        <Footer />
      </div>
    </div>
  );
};

export default EmployeeContainer;
