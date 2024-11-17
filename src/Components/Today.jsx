import React from "react";
import { FaCartPlus } from "react-icons/fa";

const Today = () => {
  return (
    <div className=" ">
   

      <div className="flex justify-between items-center">
        <div className="mt-7 flex gap-3">
          <div className="w-12 h-12 bg-[#32A7E2] flex flex-col items-center justify-center rounded-full ">
            <FaCartPlus className="text-white" />
          </div>

          <div>
            <h4 className="text-base font-semibold text-[#273240]">Grocery</h4>
            <p className="text-black/50 text-sm">5:12 pm • Belanja di pasar</p>
          </div>
        </div>

        <div>
          <p className="font-semibold">-326.800</p>
        </div>
      </div>
    </div>
  );
};

export default Today;
