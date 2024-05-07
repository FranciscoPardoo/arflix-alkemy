import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="h-14 flex justify-around items-center">
            <h1 className="text-blue-400 text-4xl font-extrabold font-mono">ARflix</h1>
            <nav>
                <ul className="flex gap-4 text-xl ">
                    <li >
                        <Link className="hover:text-blue-400" to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-blue-400" to={"/listado"}>Peliculas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;

