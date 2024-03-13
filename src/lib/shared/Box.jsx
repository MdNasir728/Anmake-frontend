import React from "react";

const Box = ({ label, text, children }) => {
  return (
    <div className="flex lg:justify-center lg:items-center gap-4 max-lg:w-full">
        <div className="bg-slate-700 rounded-xl p-4  text-[#17C2EC]">
        {children}

        </div>
      <div className="flex flex-col">
        <p className="font-semibold text-gray-500 lg:text-[24px]text-[14px]">{label}</p>
        <h5 className="font-bold text-white lg:text-[24px] text-[14px]">{text} </h5>
      </div>
    </div>
  );
};

export default Box;
