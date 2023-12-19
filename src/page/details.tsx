import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function Details(){
    const {id} = useParams();   //useParams를 통해 불러온 id값은 string이다.
    const location = useLocation();
    const [movies,setMovies] = useState(location.state && location.state.movies ? location.state.movies : []);
    const [title,setTitle] = useState("");

    const getMovies = async () => {
        var response = await axios.get('http://localhost:8080/api/v1/movies');
        setMovies(response.data);
    };

    useEffect(()=>{
        getMovies();
    },[])

    useEffect(() => {
        if(id !== undefined){
        var numericId = parseInt(id,10);
        }
        movies.map((e: any) => {
            if (e.id === numericId) {
                setTitle(e.title);
            }
        });
    }, [movies, id]);

    return (
        <p className="text-orange-400">{title}의 상세정보 페이지입니다.</p>
    )
}