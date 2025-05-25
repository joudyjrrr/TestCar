import Image from "next/image";
import React from "react";

const Title = ({ title, img, className1, className2 }) => {
  return (
    <div className="w-full flex justify-center mb-[50px] ">
      <div
        className={`relative w-fit bg-primary rounded-[40px] px-6 ps-10 py-2 ${className1}`}
      >
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <Image
          src={img}
          alt=""
          className={`absolute start-[-30px] top-0 w-[55px] h-[55px]  ${className2}`}
        />
      </div>
    </div>
  );
};

export default Title;
