import React from "react";
import bgImage from "../assets/cyber-bg.png";
import { IoIosCloudUpload } from "react-icons/io";
import { DiDatabase } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import { HiPaperAirplane } from "react-icons/hi";
const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex flex-col justify-between bg-zinc-200"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-4xl md:text-6xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div className="w-full">
          <img src={bgImage} alt="/" />
        </div>
        <div
          className="flex flex-col absolute bottom-[5%] bg-zinc-200 mx-1 md:left-1/2 transform md:-translate-x-1/2
        border border-slate-300 text-center shadow-xl py-8 rounded-xl md:min-w-[768px]
        "
        >
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4 ">
            <p className="flex px-4 py-2 text-slate-500">
              {" "}
              <IoIosCloudUpload className="h-6 text-indigo-600" />
              App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              {" "}
              <DiDatabase className="h-6 text-indigo-600" />
              Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <FiServer className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <HiPaperAirplane className="h-6 text-indigo-600" />
              API
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
