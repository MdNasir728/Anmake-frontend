import React from "react";
import Button from "../lib/shared/Button";
import coronaimg from "../assets/corona.png";
import { MdOutlineLocationOn, MdOutlineDateRange } from "react-icons/md";
import { AiOutlineSecurityScan } from "react-icons/ai";
import Box from "../lib/shared/Box";

const Hero = () => {
  return (
    <div className="overlay w-full min-h-full relative -z-20 overflow-hidden mx-auto">
      <div className="w-full h-full bg-black opacity-30 absolute -z-10" />

      <div className="w-full py-24 lg:px-16 px-4 mx-auto">
        <div className="w-full flex lg:flex-row flex-col mx-auto">
          <div className="flex flex-col justify-center lg:w-1/2 w-full p-8">
            <h2 className="lg:text-[48px] text-[24px]  font-extrabold">
              COVID-19 Vaccination <br />
              Got Easier With,
              <br />
              <span className="text-[#17C2EC]">Vaccination.ng</span>
              <p className="lg:text-[24px] text-[14px] font-bold py-8 text-gray-400">
                Vaccination.ng will help you find the nearest centre for
                vaccination, in all 36 states in Nigeria.
              </p>
              <div className="flex gap-4">
                <Button contained={true} text="Get Vaccine" />
                <Button contained={false} text="Help Centre" />
              </div>
            </h2>
          </div>
          <div className="bg-[#17C2EC] lg:rounded-[4rem] rounded-2xl lg:w-[40%] w-[70%] lg:h-[90vh] h-[65vw] overflow-hidden lg:ml-16 relative mx-auto">
            <img className="absolute bottom-0 w-full h-full" src={coronaimg} alt="" />
          </div>
        </div>
        <div className="w-full bg-[rgba(179,173,173,0.19)] p-10 rounded-t-3xl flex lg:flex-row flex-col  lg:justify-evenly justify-center lg:items-center items-start mt-20 gap-4">
          <Box text="Ikeja Lagos, Nigeria" label="Location">
            <MdOutlineLocationOn size={25} />
          </Box>
          <Box text="29 February, 2022" label="Date">
            <MdOutlineDateRange size={25} />
          </Box>
          <Box text="Mordena" label="Vaccine Type">
            <AiOutlineSecurityScan size={25} />
          </Box>
          <Button contained={true} text="Submit" />

        </div>
      </div>
    </div>
  );
};

export default Hero;
