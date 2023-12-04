import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
//날짜 형식 어떻게 해야하는지 모르겠음
export default function DatePicker(props:any) {

    
  return (
    <div className="w-full h-fit text-center text-lg mb-10">
      <p className="text-orange-400 my-3">개봉일 입력</p>
      <div className="">
      <ReactDatePicker 
      className="bg-gray-900 rounded-md border border-orange-400 text-center text-orange-400 py-2 focus:outline-none"
      dateFormat='yyyy-MM-dd'
      locale={ko}
      shouldCloseOnSelect
      selected={props.releasedAt} 
      onChange={(date:any) => {
        if (date) {
          const isoDateString = date.toISOString();
          console.log(isoDateString); // ISO 8601 형식으로 변환된 날짜 출력
        }
        props.setReleasedAt(date);
        }} />
      </div>
      <p className="text-orange-400 my-3">상영종료일 입력</p>
      <div className="">
      <ReactDatePicker
      className="bg-gray-900 rounded-md border border-orange-400 text-center text-orange-400 py-2 focus:outline-none"
      dateFormat='yyyy-MM-dd'
      locale={ko}
      selected={props.endAt} 
      onChange={(date:any) => {
        props.setEndAt(date)}} />
      </div>
    </div>
  );
  };