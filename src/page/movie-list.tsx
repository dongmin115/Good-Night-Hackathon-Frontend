import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function MovieList() {

    const location = useLocation();
    const movies = location.state && location.state.movies ? location.state.movies : [];
    console.log(movies);
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
        {movies.map((element:any) => (
            <li key={element.id} className="my-2">{element.title}
            <button className="px-1 mx-1 border border-orange-400 rounded-md bg-orange-400 text-gray-900 font-bold">수정</button>
            <button className="px-1 border border-orange-400 rounded-md bg-orange-400 text-gray-900 font-bold">삭제</button>
            </li>
        ))}
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