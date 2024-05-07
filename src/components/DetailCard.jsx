/* eslint-disable react/prop-types */


// eslint-disable-next-line react/prop-types
function Card({img, title, overview, genres, date}) {
    return (
        <div className="flex flex-col items-center h-120 w-1/2 p-6 bg-zinc-700 rounded-lg">
            <h3 className="text-3xl font-bold font-sans mb-3">{title}</h3>
            <div className="flex flex-row gap-3">
                <img  className="h-3/4 w-96" src={img} alt="portada" />
                <div className="px-2">
                    <p className="font-normal">Fecha de Estreno: {date}</p>
                    <p className="font-normal">{overview}</p>
                    <p>Generos:</p>
                    <ul>
                        {genres}
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default Card;