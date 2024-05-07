import { Button } from "flowbite-react";
import mockup from "../assets/mockup.png";
import tv from "../assets/tv.jpg"
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
        <div className="flex justify-center items-center flex-col bg-[url('./assets/portada4.jpg')] bg-cover h-132 brightness-75 border-b-8 border-zinc-700 ">
                <h2 className="text-6xl font-bold text-white text-shadow-lg shadow-black mb-10">Películas y series ilimitadas y mucho más</h2>
                <Button color="blue" size="xl">
                    <Link to={"/login"} >
                        INICIAR SESION {">"}
                    </Link>
                </Button>
        </div>
        <div className="flex flex-row justify-center items-center h-130 border-b-8 border-zinc-700 ">
            <div>
                <h2 className="text-5xl font-bold text-white text-shadow-lg shadow-black mb-10">Disfruta en tu TV</h2>
                <p className="text-2xl font-semibold text-white">Ve en smart TV, Playstation, Xbox, <br/> Chromecast, Apple TV y más.</p>
            </div>
            <img  className="ml-36 h-96 w-120 brightness-75 contrast-125" src={tv} alt="imagen tv" />
        </div>
        <div className="flex flex-row justify-center items-center h-130 border-b-8 border-zinc-700 ">
            <div>
                <h2 className="text-5xl font-bold text-white text-shadow-lg shadow-black mb-10">Disfruta donde quieras</h2>
                <p className="text-2xl font-semibold text-white">Peliculas y series ilimitadas en tu telefono, tablet, laptop y tv.</p>
            </div>
            <img  className="h-96 w-120 brightness-75 contrast-125" src={mockup} alt="mockup" />
        </div>
        </>
    )
}

export default Home