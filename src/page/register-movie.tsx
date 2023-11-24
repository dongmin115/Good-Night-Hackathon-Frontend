import { useState } from "react"
import React from "react";
import CategoryMenu from "../components/category-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";

type MouseEventHandler<T extends HTMLElement> = React.MouseEventHandler<T>;

export default function RegisterMovie() {
    const [categoryBtn,setCategoryBtn] = useState(false);

    const onClick: MouseEventHandler<HTMLDivElement> = () => {
        setCategoryBtn(!categoryBtn);
    }

    return (
    <div className="w-full h-1/3 px-4 py-4 bg-gray-900 flex-col">
    <div id="category-menu" className="bg-gray-900 w-full h-fit flex my-2 items-center cursor-pointer" onClick={onClick}>
        <p className="flex-1 text-center text-2xl h-1/5 text-orange-400">장르 선택
        <div className="inline absolute right-[40%]">{(categoryBtn ? <FontAwesomeIcon icon={faArrowUp} color="#ff9500" size="lg"/> : <FontAwesomeIcon icon={faArrowDown} color="#ff9500" size="lg" />)}</div>
        </p>
    </div>
    {(categoryBtn ? <CategoryMenu/> : <></>)}
    </div>
    )
}