"use client"
import React from "react";
import Title from "./Title";
import { request } from "../../../public/images";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const About = ({ content, noReadMore }) => {
  const t = useTranslations("about");
  const router = useRouter()
  return (
    <div className="my-[50px] bg-white">
      <Title title={t("title")} img={request} />
      <div className="text-center px-16 text-2xl max-sLg:text-xl max-sm:text-base max-sm:px-4 flex flex-col gap-1 font-medium text-[#575757]">
        {content}
      </div>
      {noReadMore && (
        <Button onClick={()=>router.push("/about")} className="bg-white border-2 mt-8 hover:bg-primary border-primary text-secondary mx-auto w-fit">
          {t("read_more")}
        </Button>
      )}
    </div>
  );
};

export default About;
