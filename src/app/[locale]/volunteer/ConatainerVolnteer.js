"use client";
import BannerForBage from "@/components/Layout/BannerForBage";
import FirstHeader from "@/components/Layout/FirstHeader";
import SecondHeader from "@/components/Layout/SecondHeader";
import useScrollDirection from "@/i18n/useScrollDirection";
import Footer from "@/components/Layout/Footer";
import { volunteer } from "../../../../public/images";
import React from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

const inputStyle =
  "w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0095ff] text-base";

const labelStyle = "block mb-1 text-[#0095ff] font-medium";

const sectionStyle =
  " p-4 mb-6 shadow-sm bg-white";

const sectionTitleStyle =
  "text-xl font-bold mb-4 text-[#0095ff] border-b border-[#0095ff]/30 pb-2";

const ConatainerVolnteer = () => {
  const atTop = useScrollDirection();
  const t = useTranslations("volunteer");

  return (
    <div className="w-full h-full">
      <FirstHeader />
      <SecondHeader scrollDirection={atTop} />
      <div className="w-full overflow-x-hidden z-[50] relative">
        <BannerForBage
          img={volunteer}
          isPhone={false}
          titleHead={"volunteer.title"}
          classNameGr="!from-black/80"
          classNameTitle="text-8xl mt-[16rem]"
        />
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-12">
          <h1 className="text-2xl sm:text-4xl text-center font-bold mb-10 text-[#0095ff]">
            {t("form.fillForm")}
          </h1>

          {/* Personal Info */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}> {t("form.personalInfo")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.fullName")} *</label>
                <input
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.gender")} *</label>
                <select className={inputStyle} required>
                  <option disabled>{t("form.choose")}</option>
                  <option>{t("form.genderMale")}</option>
                  <option>{t("form.genderFemale")}</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>{t("form.birthDate")} *</label>
                <input type="date" className={inputStyle} required />
              </div>
              <div>
                <label className={labelStyle}>{t("form.nationality")} *</label>
                <input
                   placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.phone")} *</label>
                <input
                 placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.email")} *</label>
                <input
                  type="email"
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>{t("form.address")}</label>
                <textarea
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {t("form.Academic_qualifications")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.studyLevel")} *</label>
                <select className={inputStyle} required>
                  <option disabled>{t("form.choose")}</option>
                  <option>{t("form.levelHighSchool")}</option>
                  <option>{t("form.levelInstitute")}</option>
                  <option>{t("form.levelUniversity")}</option>
                  <option>{t("form.levelMasters")}</option>
                  <option>{t("form.levelDoctorate")}</option>
                </select>
              </div>
              <div>
                <label className={labelStyle}>{t("form.specialization")}</label>
                <input
                 placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  {t("form.currentlyStudying")}
                </label>
                <div className="flex gap-6 px-1">
                  <label className="text-base">
                    <input type="radio" name="isStudying" className="ml-2" />{" "}
                    {t("form.yes")}
                  </label>
                  <label className="text-base">
                    <input type="radio" name="isStudying" className="ml-2" />{" "}
                    {t("form.no")}
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Volunteer Experience */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {" "}
              {t("form.Volunteer_experiences")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.orgName")}</label>
                <input  placeholder={t("form.Enter_answer")} className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>{t("form.activityType")}</label>
                <input
                placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.period")}</label>
                <input  placeholder={t("form.Enter_answer")} className={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  {t("form.experienceGained")}
                </label>
                <textarea
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {" "}
              {t("form.Qualifications_experience")}
            </h2>
            <label className={`${labelStyle} text-lg`}>
              {t("form.skills")} *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-right px-1 mb-4">
              {[
                "computer",
                "design",
                "photography",
                "contentWriting",
                "translation",
                "socialMedia",
                "workingWithChildren",
                "awarenessSessions",
                "accounting",
              ].map((key) => (
                <label key={key} className="text-base">
                  <input type="checkbox" className="ml-2" />{" "}
                  {t(`form.skillsList.${key}`)}
                </label>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.otherSkills")} *</label>
                <textarea
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.languages")} *</label>
                <textarea
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
            </div>
          </div>

          {/* Volunteering Preferences */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {" "}
              {t("form.Volunteer_preferences")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>
                  {t("form.preferredTasks")} *
                </label>
                <textarea
                   placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>
                  {t("form.unpreferredTasks")}
                </label>
                <textarea
                  placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Health Section */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {" "}
              {t("form.condition_healthy")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.earliestTime")}</label>
                <input type="time" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>{t("form.latestTime")}</label>
                <input type="time" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>{t("form.availableFrom")}</label>
                <input type="date" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>
                  {t("form.healthCondition")}
                </label>
                <div className="flex gap-6 px-1">
                  <label className="text-base">
                    <input type="radio" name="health" className="ml-2" />{" "}
                    {t("form.yes")}
                  </label>
                  <label className="text-base">
                    <input type="radio" name="health" className="ml-2" />{" "}
                    {t("form.no")}
                  </label>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>
                  {t("form.healthExplanation")}
                </label>
                <textarea
                 placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                />
              </div>
            </div>
          </div>

          {/* Values and Expectations */}
          <div className={sectionStyle}>
            <h2 className={sectionTitleStyle}>
              {" "}
              {t("form.Values_expectations")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className={labelStyle}>{t("form.values")} *</label>
                <textarea
                   placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  rows={3}
                  required
                />
              </div>
              <div>
                <label className={labelStyle}>{t("form.expectations")} *</label>
                <textarea
               placeholder={t("form.Enter_answer")}
                  className={inputStyle}
                  rows={3}
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            <Button className="!px-14 !text-2xl">{t("form.save")}</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConatainerVolnteer;
