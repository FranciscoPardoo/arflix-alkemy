import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Card";


function Listado() {
    // const navigate = useNavigate();
    // const token = sessionStorage.getItem("token");

    // useEffect(() => {
    //     if (!token && navigate) {
    //         navigate("/");
    //     }
    // }, [token, navigate]);
    
    const [movieList, setMovieList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            fetchMovies();
            setLoading(false);
        }
    }, [loading]);

    const fetchMovies = () => {
        const endPoint = "https://api.themoviedb.org/3/discover/movie?api_key=3226a391ca0c0e5406248f5880d11159&language=es-ES&page=1";
        
        axios.get(endPoint)
            .then(res => {
                const apiData = res.data;
                setMovieList(apiData.results);
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error',
                    text: `Ha ocurrido un ${error}, intenta más tarde`,
                    icon: 'error'
                });
            });
    };

    return (
        <>
            <div className="flex flex-wrap m-10 justify-center">
                {movieList.map((item, key) => (
                    <div key={key}>
                        <Card
                        img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        title={item.title}
                        overview={item.overview}
                        detalle={`/detalle?movieID=${item.id}`}
                        />
                    </div>
                ))}
            </div>
        </>
    ); 
}

export default Listado;






