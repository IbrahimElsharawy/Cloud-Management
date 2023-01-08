import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
const Pricing = () => {
  return (
    <div name="pricing" className="my-24 w-full text-white">
      <div className="w-full h-[700px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8 capitalize ">
            the right price for your research
          </h3>
          <p className="text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            autem quis id quo aspernatur, unde facilis debitis rerum distinctio
            reprehenderit consequatur eum ratione commodi quos delectus optio,
            architecto reiciendis in.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white text-slate-900 p-8 rounded shadow-2xl relative">
            <span className="uppercase bg-indigo-200 text-indigo-900 rounded-3xl px-3 py-1 text-sm">
              standard
            </span>
            <div>
              <p className="text-6xl py-4 font-bold flex">
                $49{" "}
                <span className="text-xl flex justify-end text-slate-500 flex-col">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-xl">
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                {" "}
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">get started</button>
            </div>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded shadow-2xl relative">
            <span className="uppercase bg-indigo-200 text-indigo-900 rounded-3xl px-3 py-1 text-sm">
              premium
            </span>
            <div>
              <p className="text-6xl py-4 font-bold flex">
                $99{" "}
                <span className="text-xl flex justify-end text-slate-500 flex-col">
                  /mo
                </span>
              </p>
            </div>
            <p className="text-2xl py-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className="text-xl">
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <p className="flex py-4">
                {" "}
                <AiOutlineCheck className="mr-5 text-green-600" />
                Lorem, ipsum dolor.
              </p>
              <button className="w-full py-4 my-4">get started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
