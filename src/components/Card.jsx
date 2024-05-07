/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Button } from "flowbite-react";

// eslint-disable-next-line react/prop-types
function Card({img, title, overview, detalle}) {
    return (
        <div className="h-[36rem] w-80 m-10 bg-zinc-700 rounded-md">
            <img  className="h-3/4 w-80" src={img} alt="portada" />
            <div className="px-2">
                <h5 className="text-2xl font-bold font-sans">{title.substring(0,22)}</h5>
                <p className="font-normal">{overview.substring(0,90)}...</p>
                <Button size="sm" color="blue">
                    <Link to={detalle}> Ver mas</Link>
                </Button>
            </div>
        </div>
    )
}

export default Card;