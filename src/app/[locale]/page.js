"use client";

import About from "@/components/Layout/About";
import Banner from "@/components/Layout/Banner";
import FirstHeader from "@/components/Layout/FirstHeader";
import Footer from "@/components/Layout/Footer";
import LatestNew from "@/components/Layout/LatestNew";
import Partners from "@/components/Layout/Partners";
import PartnersOpinions from "@/components/Layout/PartnersOpinions";
import SecondHeader from "@/components/Layout/SecondHeader";
import Statistics from "@/components/Layout/Statistics";
import SuperiorProjects from "@/components/Layout/SuperiorProjects";
import Title from "@/components/Layout/Title";
import useLanguageDirection from "@/i18n/useLanguageDirection";
import { useAppContext } from "@/lib/AppContext";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { megaphone } from "../../../public/images";

export default function Home() {
  useLanguageDirection();
  const t = useTranslations();
  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);
  const handleScroll = (e) => {
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
        className={`w-full overflow-x-hidden  z-[50] relative h-screen overflow-y-scroll`}
        onScroll={handleScroll}
      >
        <div className="w-full">
          <Banner />
          <About
            content={
              <>
                <p>{t("about.paragraph_1")}</p>
                <p>{t("about.paragraph_2")}</p>
                <p>{t("about.paragraph_3")}</p>
              </>
            }
            noReadMore={true}
          />
          <Statistics />
          <div className="mt-[50px]">
            <Title
              title={t("news.title")}
              img={megaphone}
              className1="!ps-24"
              className2={`start-[15px] top-[-9px]`}
            />

            <LatestNew />
          </div>
          <SuperiorProjects />
          <Partners />
          <PartnersOpinions />
          <Footer />
        </div>
      </div>
    </>
  );
}
