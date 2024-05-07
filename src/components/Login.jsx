import  axios  from "axios";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";


const MySwal = withReactContent(Swal)


function Login() {
    const navigate = useNavigate()
    const handleForm = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if(email === "" || password === ""){
            MySwal.fire({
                title: <p>Los campos no pueden estar vacios</p>,
                })
            return;
        }

        if( email !== "" && !regexEmail.test(email)){
            MySwal.fire({
                title: <p>Debes escribir una dirreccion de correo electronico valida.</p>,
                })
            return;
        }

        if( email !== "challenge@alkemy.org" || password !== "react"){
            MySwal.fire({
                title: <p>Credenciales invalidas.</p>,
                })
            return;
        }

        axios
        .post("http://challenge-react.alkemy.org", {email, password})
        .then(res => {
            MySwal.fire({
                title: <p>Has ingresado correctamente.</p>,
                })
            const tokenRecibido = res.data.token;
            sessionStorage.setItem("token", tokenRecibido);
            navigate("/listado")
    })
    }

    // let token = sessionStorage.getItem("token");
    // useEffect(() => {
    //     if (!token) {
    //         navigate("/listado");
    //     }
    // }, [token, navigate]);
    
    return (
    <div className="bg-[url('./assets/portada6.jpg')] bg-cover h-132 flex justify-center items-center flex-col"> 
        <div className="bg-black/90 w-96 h-120 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-blue-400 font-bold font-sans">Inicia sesión</h2>
            <form onSubmit={handleForm} className="m-10 flex flex-col">
                <label className="mb-3">
                    <input className="bg-black/60 rounded-md border-white/75 w-64 h-12" placeholder="Ingresar email" type="text" name="email" />
                </label>
                <label className="mb-5">
                    <input className="bg-black/60 rounded-md border-white/75 w-64 h-12" placeholder="Ingresar contraseña" type="password" name="password" />
                </label>
                <Button type="submit" color="blue" size="md">Ingresar</Button>
                <p className="mt-10 text-center">¿Olvidaste la contraseña?</p>
                <p className="mt-5 text-center">No tenes cuenta, <a className="text-blue-400 underline decoration-solid cursor-pointer">Registrate</a> </p>
            </form>
        </div>
        
    </div>
    )
}

export default Login;