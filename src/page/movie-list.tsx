import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MovieList() {
    const navigate = useNavigate();
    const location = useLocation();
    const [movies,setMovies] = useState(location.state && location.state.movies ? location.state.movies : []);

    const getMovies = async () => {
        var response = await axios.get('http://localhost:8080/api/v1/movies');
        setMovies(response.data);
    };

    const RemoveMovieList = async (e:any, id:number) => {
        e.preventDefault();
        await axios.delete(`http://localhost:8080/api/v1/movies/${id}`);
        // 삭제 요청이 완료되면 새로운 배열을 설정합니다.
        const updatedMovies = movies.filter((element: any) => element.id !== id);
        setMovies(updatedMovies);
    }

    const moveToPutPage = async (e:any, id:number) => {
        e.preventDefault();
        navigate(`/put/${id}`);
    }

    const moveToDetails = async (e:any, id:number) => {
        e.preventDefault();
        navigate(`/details/${id}`);
    }

    useEffect(()=>{
        getMovies();
    },[]);
    return (
    <div className="w-full h-full px-[10%] py-[5%] text-center text-white ">
        {/*필터링메뉴*/}
        <div className=" bg-gray-800 rounded-md">
        <div className="text-white flex flex-row justify-center">
        <p className="">장르</p>
        <ul className="flex">
        <li className="mx-2"><p><input type="checkbox"/>스릴러</p></li>
        <li className="mx-2"><p><input type="checkbox"/>로맨스</p></li>
        <li className="mx-2"><p><input type="checkbox"/>코믹</p></li>
        <li className="mx-2"><p><input type="checkbox"/>액션</p></li>
        </ul>
        </div>
        <div className="text-white flex flex-row justify-center">
        <p>상영 여부</p>
        <ul className="flex">
        <li className="mx-2"><p><input type="checkbox"/>상영 중</p></li>
        <li className="mx-2"><p><input type="checkbox"/>상영 종료</p></li>
        </ul>
        </div>
        <div className="text-white flex flex-row justify-center">
        <p className="">별점</p>
        <ul className="flex">
        <li className="mx-2"><input type="checkbox"/>⭐</li>
        <li className="mx-2"><input type="checkbox"/>⭐⭐</li>
        <li className="mx-2"><input type="checkbox"/>⭐⭐⭐</li>
        <li className="mx-2"><input type="checkbox"/>⭐⭐⭐⭐</li>
        <li className="mx-2"><input type="checkbox"/>⭐⭐⭐⭐⭐</li>
        </ul>
        </div>
        </div>
        <ul className="text-white">
        {movies && movies.length > 0 ? (
            movies.map((element: any) => (
            <li key={element.id} className="my-2">
                {element.title}
                <button
                className="px-1 mx-1 border border-orange-400 rounded-md bg-orange-400 text-gray-900 font-bold"
                onClick={(e) => moveToDetails(e, element.id)}
                >
                상세정보
                </button>
                <button
                className="px-1 mx-1 border border-orange-400 rounded-md bg-orange-400 text-gray-900 font-bold"
                onClick={(e) => moveToPutPage(e, element.id)}
                >
                수정
                </button>
                <button
                className="px-1 border border-orange-400 rounded-md bg-orange-400 text-gray-900 font-bold"
                onClick={(e) => RemoveMovieList(e, element.id)}
                >
                삭제
                </button>
            </li>
            ))
        ) : (
            <li className="text-gray-400">영화 목록이 없습니다.</li>
        )}
        </ul>
        <button className="px-2 py-2 my-4 border rounded-md border-orange-400 text-gray-900 bg-orange-400 font-bold cursor-pointer"><Link to="/register">추가하기</Link></button>
        <ul className="flex justify-center my-2">
            <li className="mx-2 text-orange-400 cursor-pointer font-bold">1</li>
            <li className="mx-2 text-orange-400 cursor-pointer font-bold">2</li>
            <li className="mx-2 text-orange-400 cursor-pointer font-bold">3</li>
            <li className="mx-2 text-orange-400 cursor-pointer font-bold">4</li>
            <li className="mx-2 text-orange-400 cursor-pointer font-bold">5</li>
        </ul>
    </div>
    );
}