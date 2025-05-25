"use client";
import React, { useEffect, useState } from "react";
import {
  bar,
  group,
  handshake,
  industry,
  project,
} from "../../../public/images";
import Image from "next/image";
import Title from "./Title";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

const Statistics = () => {
  const [startCount, setStartCount] = useState(false);
  const t = useTranslations("statistics");

  const data = [
    { img: group, title: t("beneficiaries_served"), num: 756.5 },
    { img: industry, title: t("humanitarian_sector"), num: 12 },
    { img: project, title: t("projects_implemented"), num: 50 },
    { img: handshake, title: t("international_partnership"), num: 20 },
  ];

  useEffect(() => {
    function handleScroll() {
      const { top } = document
        .getElementById("Statistics")
        .getBoundingClientRect();
      if (top <= window.innerHeight && !startCount) {
        setStartCount(true);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startCount]);

  return (
    <div className="my-[50px] bg-[#f2faff] py-8" id="Statistics">
      <Title
        title={t("title")}
        img={bar}
        className1="!ps-24"
        className2={`start-[15px] top-[-9px]`}
      />
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center w-fit mx-auto gap-32 mt-[25px] px-16">
        {data.map((da, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 items-center justify-center "
          >
            <Image alt="" src={da.img} className="w-[135px]" />
            <span className="font-semibold text-[#575757] text-4xl">
              <CountUp start={0} end={startCount ? da.num : 0} duration={5} />
            </span>
            <h2 className="text-[#fe830c] text-2xl text-nowrap font-semibold">
              {da.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
