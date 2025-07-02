"use client";
import React, { useRef, useState } from "react";
import About from "@/components/Layout/About";
import { useLocale, useTranslations } from "next-intl";
import CardAbout from "./CardAbout";
import {
  aboutBanner,
  chat,
  customer,
  organization,
  target,
  vision,
} from "../../../../public/images";

import Title from "@/components/Layout/Title";
import Image from "next/image";
import Partners from "@/components/Layout/Partners";
import Footer from "@/components/Layout/Footer";
import { useAppContext } from "@/lib/AppContext";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import BannerForBage from "@/components/Layout/BannerForBage";

const AboutContainer = () => {
  const t = useTranslations("about");
  const locale = useLocale();
  const isEnglish = locale === "en";
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);
  const handleScroll = (e) => {
    console.log("first");
    const scrollTop = e.currentTarget.scrollTop;
    if (scrollTop > lastScrollY.current) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }
    lastScrollY.current = scrollTop;
  };

  return (
    <>
      <FirstHeader />
      <SecondHeader scrollDirection={scrollDirection} />
      <div
        className={`w-full overflow-x-hidden  z-[50] relative h-screen `}
        onScroll={handleScroll}
      >
        <BannerForBage
          isPhone={false}
          img={aboutBanner}
          classNameTitle="text-8xl"
          titleHead={"about.title2"}
        />
        <About
          content={
            <>
              <p>{t("paragraph_4")}</p>
              <p>{t("paragraph_5")}</p>
              <p>{t("paragraph_6")}</p>
              <p>{t("paragraph_7")}</p>
            </>
          }
          noReadMore={false}
        />
        <div className="flex px-16 gap-8 max-sm:flex-col max-sLg:px-4 ">
          <div className="flex flex-col gap-8 w-full">
            <CardAbout
              img={vision}
              title={t("visionTitle")}
              content={
                <>
                  <p>{t("vision")}</p>
                </>
              }
            />
            <CardAbout
              img={target}
              title={t("goalsTitle")}
              classNameImg={`!w-14 !h-14`}
              content={
                <>
                  <p>- {t("goals.g1")}</p>
                  <p>- {t("goals.g2")}</p>
                  <p>- {t("goals.g3")}</p>
                  <p>- {t("goals.g4")}</p>
                </>
              }
            />
          </div>
          <div className="flex flex-col gap-8 pt-16 w-full">
            <CardAbout
              img={chat}
              classNameImg={`!w-14 !h-14`}
              title={t("missionTitle")}
              content={<p>{t("mission")}</p>}
            />
            <CardAbout
              img={customer}
              classNameImg={`!w-14 !h-14`}
              title={t("missionTitle")}
              content={
                <>
                  <p>- {t("values.v1")}</p>
                  <p>- {t("values.v2")}</p>
                  <p>- {t("values.v3")}</p>
                  <p>- {t("values.v4")}</p>
                  <p>- {t("values.v5")}</p>
                </>
              }
            />
          </div>
        </div>
        <div className="mt-20 w-full flex flex-col justify-center items-center">
          <Title
            title={t("structure")}
            className2={`start-[12px] top-[-9px] ps-`}
            img={organization}
            className1="ps-20"
          />
          <div className="relative w-full h-[146vh] max-sLg:h-[50vh] max-sm:h-[35vh]">
            {isEnglish ? (
              <Image
                src={`/images/draw_en.svg`}
                alt="Draw icon"
                fill
                className=""
              />
            ) : (
              <Image
                src={`/images/draw.svg`}
                alt="Draw icon"
                fill
                className=""
              />
            )}
          </div>
          <Partners />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutContainer;
