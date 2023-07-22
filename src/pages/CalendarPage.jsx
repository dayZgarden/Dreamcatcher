import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Label from "../components/Label";

const CalendarPage = () => {
  const navigate = useNavigate();

  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const daysFromPrevMonth = firstDayOfMonth.getDay();
  const daysFromNextMonth = 6 - lastDayOfMonth.getDay();
  const totalDays = daysFromPrevMonth + daysInMonth + daysFromNextMonth;

  const dates = Array.from({ length: totalDays }, (_, i) => {
    const date = new Date(firstDayOfMonth);
    date.setDate(firstDayOfMonth.getDate() - daysFromPrevMonth + i);
    return date;
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthName = monthNames[today.getMonth()];
  const month = today.getMonth();
  const year = today.getFullYear();



  return (
    <div className="min-h-screen bg-black">
      <div className="p-8 h-full">
        <div className="mx-auto  w-full max-w-[76rem] h-full">
          <div className="w-full flex  border-black border-4   border-b-0  rounded-lg  rounded-b-none text-[24px] font-semibold   h-[9vh]">
            <div className="flex bg-green-200 text-[46px] rounded-tl-lg w-[14.2857142857%] justify-center items-center"> 
              <button onClick={() => navigate("/calendar")}>{monthName}</button>
            </div>
            <div className="flex bg-green-200 rounded-tr-lg w-[14.2857142857%] justify-center items-center"> 
              <button onClick={() => navigate("/calendar")}>\</button>
            </div>
          </div>
          <Label />
          <div className="flex border-4 bg-green-200 border-black border-t-0 rounded-lg rounded-t-none cursor-pointer flex-wrap w-full ">
            {dates.map((date, index) => (
              <Card key={index} date={date} month={month} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
