import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ date, month }) => {
  const formattedDate = date.toLocaleDateString();
  const day = date.getDate();
  const currMonth = date.getMonth();
  const today = new Date();
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/calendar/day`, { state: { date: date.toLocaleDateString() } });
  };
  

  return (
    <>
      { currMonth == month ? 
        <div onClick={handleCardClick} className={`hover:border-black border-2 border-transparent transition-all duration-150  flex  w-[14.2857142857%] text-[20px] font-semibold  h-[12vh] items-center justify-center ${isToday ? "bg-green-300  transition-all hover:rounded-none hover:text-black duration-150 rounded-xl  " : ""}`}>
          {day}
        </div> : 
        <div onClick={handleCardClick} className="flex bg-green-100 hover:border-black border-2 border-transparent transition-all duration-150 w-[14.2857142857%]  text-[20px] font-semibold  h-[12vh] items-center justify-center ">
            {day}
        </div>
      }
    </>
  );
};

export default Card;
