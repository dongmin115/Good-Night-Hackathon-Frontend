import { useState, useEffect } from "react"
import React from "react";
import CategoryMenu from "../components/category-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import axios from "axios";
import DatePicker from "../components/datepicker";

type MouseEventHandler<T extends HTMLElement> = React.MouseEventHandler<T>;

export default function RegisterMovie() {
    const [categoryBtn,setCategoryBtn] = useState(false);
    const [movies,setMoives] = useState("");

    const getMovies = async () => {
        var response = await axios.get("/movies");
        setMoives(response.data);

        console.log(movies);
    };

    const onClick: MouseEventHandler<HTMLDivElement> = () => {
        setCategoryBtn(!categoryBtn);
    }

    useEffect(()=>{
        getMovies();
    },[])

    return (
    <div className="w-full h-full px-4 py-4 bg-gray-900 flex-col">
    <h1 className="text-orange-400 w-full text-center text-3xl my-4">영화 등록</h1>
    <input className="w-1/2 h-[8%] mx-[25%] my-4 px-4 border-orange-400 border-2 bg-gray-900 rounded-md focus:outline-none focus:border-2 focus:border-orange-600 text-gray-300" 
    type="text" 
    placeholder="영화 제목을 입력하세요"/>
    <div id="category-menu" className="bg-gray-900 w-full h-fit flex my-2 items-center cursor-pointer" onClick={onClick}>
        <p className="flex-1 text-center text-2xl h-1/5 text-orange-400">장르 선택
        <div className="inline absolute right-[40%]">{(categoryBtn ? <FontAwesomeIcon icon={faArrowUp} color="#ff9500" size="lg"/> : <FontAwesomeIcon icon={faArrowDown} color="#ff9500" size="lg" />)}</div>
        </p>
    </div>
    {(categoryBtn ? <CategoryMenu/> : <></>)}
    <DatePicker/>
    </div>

    )
}