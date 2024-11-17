import React from "react";
import Chart from "./Chart";
import Today from "./Today";
import { CiCirclePlus } from "react-icons/ci";

export const Expense = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr]">
      <div className="left  py-16 px-24">
        <div className="flex justify-between">
          <div>
            <h1 className="font-semibold text-[40px]">Expenses</h1>
            <p className=" text-black/50">01 - 25 March, 2020</p>
          </div>

          <div className=" flex ">
            <img className="size-8" src="/Group1.png" alt="1" />
            <img className="size-8" src="/Group2.png" alt="2" />
            <img className="size-8" src="/Group3.png" alt="3" />

            <CiCirclePlus className="text-4xl text-[#D2DCE8]" />
          </div>
        </div>
        <div className="w-96 h-72 py-12">
          <Chart />
        </div>
        <div className="border-b  flex justify-between items-center pb-2">
          <h3 className="font-semibold text-[18px]">Today</h3>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
          </div>
        </div>
        <Today />
        <Today />
        <Today />

        <div className="border-b mt-14 flex justify-between items-center pb-2">
          <h3 className="font-semibold text-[18px]">Today</h3>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-[#D8D8D8] rounded-full"></div>
          </div>
        </div>
        <Today />
        <Today />
      </div>

      <div className="rigt w-full bg-[#F9FAFC] py-20 px-12">
        <div className="w-full">
          <h4 className="text-[#262A41] text-xl font-semibold text-center mb-8">
            Where your money go?
          </h4>

          <div className="flex flex-col gap-12">
            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">Food and Drinks</h5>
                <p className="text-=[#273240 text-sm]">872.400</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[25%]"
                  // style={{width: "45%"}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">Food and Drinks</h5>
                <p className="text-=[#273240 text-sm]">872.400</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[25%]"
                  // style={{width: "45%"}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">Food and Drinks</h5>
                <p className="text-=[#273240 text-sm]">872.400</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[25%]"
                  // style={{width: "45%"}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">Food and Drinks</h5>
                <p className="text-=[#273240 text-sm]">872.400</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[25%]"
                  // style={{width: "45%"}}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-sm font-semibold">Food and Drinks</h5>
                <p className="text-=[#273240 text-sm]">872.400</p>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
                <div
                  className="bg-blue-600 h-2.5 rounded-full w-[25%]"
                  // style={{width: "45%"}}
                ></div>
              </div>
            </div>
          </div>

          <div className="relative w-[250px] h-[258px] bg-[#EDF0F6] flex flex-col items-center justify-center mt-24 mx-auto rounded-2xl ">
            <div className="flex absolute top-0 -translate-y-[30%] items-center justify-center  gap-x-16">
              <img src="/public/Illustration1.png" alt="" />
              <img src="/public/Illustration2.png" alt="" />
            </div>

          <div className="py-6 px-5">
          <h5 className="text-[#273240] font-semibold mt-6">Save more money</h5>
          <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          </div>
          <button className="px-16 py-4 bg-black rounded-lg text-white font-semibold">VIEW TIPS</button>
          </div>
        </div>
      </div>
    </div>
  );
};
