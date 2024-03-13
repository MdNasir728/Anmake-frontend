import React from "react";

const Button = ({ contained, text }) => {
  return (
    <button
      className={`${
        contained ? "bg-[#17C2EC]" : "bg-transparent border-2 border-[#17C2EC]"
      } lg:rounded-3xl rounded-xl font-bold lg:px-6 lg:py-4 px-4 py-2 lg:text-2xl text-lg text-[#ffffff] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default Button;
