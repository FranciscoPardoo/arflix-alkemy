import { useEffect, useState } from "react";
import DetailCard from "./DetailCard";
import axios from "axios";


function Detalle() {
    const query = new URLSearchParams(window.location.search);
    const movieID = query.get("movieID");

    const [movieDetail, setMovieDetail] = useState(null)

    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=3226a391ca0c0e5406248f5880d11159&language=es-ES`
        axios.get(endPoint)
            .then( res => {
                const movieData = res.data;
                setMovieDetail(movieData)
            .catch(error => {console.log(error)})
            })
    },[movieID])
    
    return (
        <>
        <div className="flex justify-center items-center">
        {movieDetail &&
            <DetailCard
            img={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            title={movieDetail.title}
            overview={movieDetail.overview}
            date = {movieDetail.release_date}
            genres = {movieDetail.genres.map(item => <li key={item.id}>{item.name}</li>)}
            />
        }
        </div>
        </>
        
    )
}

export default Detalle