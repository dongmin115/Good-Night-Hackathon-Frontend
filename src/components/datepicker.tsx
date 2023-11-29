import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DatePicker(props:any) {

    
  return (
    <div className="w-full h-fit text-center text-lg mb-10">
      <p className="text-orange-400 my-3">개봉일 입력</p>
      <div className="">
      <ReactDatePicker selected={props.releasedAt} onChange={(date) => props.setReleasedAt(date)} />
      </div>
      <p className="text-orange-400 my-3">상영종료일 입력</p>
      <div className="">
      <ReactDatePicker selected={props.endAt} onChange={(date) => props.setEndAt(date)} />
      </div>
    </div>
  );
  };