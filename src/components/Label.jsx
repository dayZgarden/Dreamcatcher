import React from "react";

const Label = () => {
  const dayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  return (
    <div className="w-full flex border-black border-4  border-y-0 rounded-tr-lg  rounded-b-none text-[20px] font-semibold bg-green-200  h-[6vh]">
      {dayNames.map((day, index) => (
        <h1
          key={index}
          className="w-[14.2857142857%]  flex items-center justify-center"
        >
          {day}
        </h1>
      ))}
    </div>
  );
};

export default Label;
