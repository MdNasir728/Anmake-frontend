import React from "react";
import Input from "../lib/shared/Input";
import Button from "../lib/shared/Button";

const CheckResult = () => {
  return (
    <div className="overlay w-full relative -z-20 overflow-hidden">
      <div className="w-full h-full bg-black opacity-50 absolute -z-10" />
      <div className="w-full lg:p-16 p-8">
        <div className="flex flex-col rounded-2xl overflow-hidden bg-[rgba(98,100,104,0.14)]">
          <p className="font-bold lg:text-[24px] text-[14px] lg:py-8 lg:px-16 py-6 px-8 opacity-90 text-white">
            Check your COVID-19 result on our Database
          </p>
          <div className="flex lg:flex-row flex-col gap-6 lg:p-16 p-6 lg:items-center lg:justify-between items-start bg-[rgba(104,103,104,0.21)]">
            <Input placeholder="Name" />
            <Input placeholder="NIK Number" />
            <Button contained={true} text="Check"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckResult;
