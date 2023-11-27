import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker() {

  const [startDate, setStartDate] = useState<Date|null>(new Date());
  const [endDate,setEndDate] = useState<Date|null>(new Date());
    
  return (
    <div className="w-full text-center text-lg my-10">
      <p className="text-orange-400 my-3">개봉일 입력</p>
      <div className="mb-10">
      <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div>
      <p className="text-orange-400 my-3">상영종료일 입력</p>
      <div className="">
      <ReactDatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
    </div>
  );
  };