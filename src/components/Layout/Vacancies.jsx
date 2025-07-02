import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import { clock2, pin2, right } from "../../../public/images";

const Vacancies = () => {
  const t = useTranslations("vacancies");
  const vacanciesData = Array(6).fill({
    title: t("jobTitle"),
    location: t("location"),
    announceDate: t("announceDate"),
    deadline: t("deadline"),
  });

  return (
    <div className="w-full mt-[75px] px-12">
      <h1 className="text-primary text-center text-4xl font-semibold max-sm:text-3xl">
        {t("sectionTitle")}
      </h1>
      <div className="grid grid-cols-3 max-xsLg:grid-cols-2 gap-8 mt-8 max-sm:grid-cols-1">
        {vacanciesData.map((vacancy, index) => (
          <div key={index} className="shadow-lg rounded-3xl p-4 bg-[#fffaf5]">
            <h1 className="text-primary font-semibold text-2xl">
              {vacancy.title}
            </h1>
            <div className="flex flex-col gap-2 mt-3">
              <div className="flex gap-1 items-center font-medium text-[#575757]">
                <Image src={pin2} alt="location" className="w-4 h-4" />
                <p>{vacancy.location}</p>
              </div>
              <div className="flex gap-1 items-center font-medium text-[#575757]">
                <Image src={clock2} alt="announce" className="w-4 h-4" />
                <p>
                  {t("announceDateLabel")}: {vacancy.announceDate}
                </p>
              </div>
              <div className="flex gap-1 items-center font-medium text-[#575757]">
                <Image src={clock2} alt="deadline" className="w-4 h-4" />
                <p>
                  {t("deadlineLabel")}: {vacancy.deadline}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 text-sm mt-4 w-full justify-end items-center text-[#575757]">
                <p>{t("applyNow")}</p>
                <Image src={right} alt="arrow" className="w-4 h-4 mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center gap-4 text-secondary my-8 text-2xl font-medium justify-center">
        <p>{t("page1")}</p>
        <p>|</p>
        <p>{t("page2")}</p>
        <p>{t("next")}</p>
      </div>
    </div>
  );
};

export default Vacancies;
