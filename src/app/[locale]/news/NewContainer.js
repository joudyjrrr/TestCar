"use client";
import BannerForBage from "@/components/Layout/BannerForBage";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import { useLocale, useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { news, s1, s2, s3 } from "../../../../public/images";
import { CiClock1 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Layout/Footer";
const dataKeys = [
  {
    id: 1,
    img: s1,
    titleKey: "news.card3.title",
    dateKey: "news.card1.date",
  },
  {
    id: 2,
    img: s2,
    titleKey: "news.card1.title",
    dateKey: "news.card2.date",
  },
  {
    id: 3,
    img: s3,
    titleKey: "news.card2.title",
    dateKey: "news.card3.date",
  },

  {
    id: 4,
    img: s1,
    titleKey: "news.card1.title",
    dateKey: "news.card1.date",
  },
  {
    id: 5,
    img: s2,
    titleKey: "news.card2.title",
    dateKey: "news.card2.date",
  },
  {
    id: 6,
    img: s2,
    titleKey: "news.card2.title",
    dateKey: "news.card2.date",
  },
];
const NewContainer = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isEnglish = locale === "en";
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);
  const pathName = usePathname();
  const router = useRouter();
  const handleScroll = (e) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollDirection(scrollTop > lastScrollY.current ? "down" : "up");
    lastScrollY.current = scrollTop;
  };

  return (
    <div>
      <FirstHeader />
      <SecondHeader scrollDirection={scrollDirection} />
      <div
            className={`w-full overflow-x-hidden  z-[50] relative h-screen overflow-y-scroll`}
        onScroll={handleScroll}
      >
        <BannerForBage
          img={news}
          isPhone={false}
          titleHead={`header2.news`}
          classNameGr="!from-black/80"
          classNameTitle="text-6xl max-sm:text-4xl mt-28"
        />

        <div className="grid mt-24 grid-cols-3 gap-10 max-sLg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center w-fit  px-24 max-sLg:px-4 max-sm:px-4 transition-all duration-500">
          {dataKeys.map((d, i) => (
            <div
              onClick={() => {
                router.push(`/${d.id}`);
              }}
              key={i}
              className="flex flex-col cursor-pointer rounded-[40px] bg-white shadow-md h-[445px]"
            >
              <Image
                alt=""
                src={d.img}
                className="rounded-t-[40px] h-[280px]"
              />
              <div className="flex flex-col py-2 px-4">
                <h1 className="text-primary text-xl font-semibold">
                  {t(d.titleKey)}
                </h1>
                <div className="flex gap-2 items-center mt-4">
                  <CiClock1 className="text-2xl text-secondary" />
                  <p className="text-[#575757] text-lg font-medium">
                    {t(d.dateKey)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center gap-4 text-secondary my-8 text-2xl font-medium justify-center">
          <p>{t("vacancies.page1")}</p>
          <p>|</p>
          <p>{t("vacancies.page2")}</p>
          <p>{t("vacancies.next")}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewContainer;
