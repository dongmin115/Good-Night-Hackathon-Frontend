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
    const [movies,setMoives] = useState<any>([]);
    const [title,setTitle] = useState<any>("");
    const [genre,setGenre] = useState("");
    const [releaedAt,setReleasedAt] = useState("");
    const [endAt,setEndAt] = useState("");


    const getMovies = async () => {
        var response = await axios.get("/movies");
        setMoives(response.data);

        console.log(movies);
    };

    const registerMovie = async () => {

        const formData = new FormData();

        formData.append("endAt",endAt);
        formData.append("genre",genre);
        formData.append("releasedAt",releaedAt);
        formData.append("title",title);

        const response = await axios.post("/movies",formData,{
            headers: {
                "Content-Type": "application/json",
            }
        });

        setMoives((prev: any) => [...prev,response.data]);

    }
    

    const onClick: MouseEventHandler<HTMLDivElement> = () => {
        setCategoryBtn(!categoryBtn);
    }

    const handleInputChange = (event:any) => {
        setTitle(event.target.value);
    };

    useEffect(()=>{
        getMovies();
    },[])

    return (
    <div className="w-full h-full px-4 py-4 bg-gray-900 flex-col">
    <h1 className="text-orange-400 w-full text-center text-3xl my-4">영화 등록</h1>
    <form className="w-full h-[90%] flex flex-col text-center items-center"
    onSubmit={registerMovie}>
    <input className="w-1/2 h-[10%] my-4 px-4 border-orange-400 border-2 bg-gray-900 rounded-md focus:outline-none focus:border-2 focus:border-orange-600 text-gray-300" 
    type="text" 
    placeholder="영화 제목을 입력하세요"
    value={title}
    onChange={handleInputChange}/>
    <div id="category-menu" className="bg-gray-900 w-full h-fit flex my-2 items-center cursor-pointer" onClick={onClick}>
        <p className="flex-1 text-center text-2xl h-1/5 text-orange-400 mb-3">장르 선택
        <div className="inline right-[40%]">{(categoryBtn ? <FontAwesomeIcon icon={faArrowUp} color="#ff9500" size="lg"/> : <FontAwesomeIcon icon={faArrowDown} color="#ff9500" size="lg" />)}</div>
        </p>
    </div>
    {(categoryBtn ? <CategoryMenu genre={genre} setGenre={setGenre} /> : <></>)}
    <DatePicker releasedAt={releaedAt} setReleasedAt={setReleasedAt} endAt={endAt} setEndAt={setEndAt}/>
    <button className="w-1/2 h-[10%] text-orange-400 border-2 border-orange-400 rounded-md cursor-pointer text-center"
    onClick={registerMovie}>등록하기</button>
    </form>
    </div>
    )
}