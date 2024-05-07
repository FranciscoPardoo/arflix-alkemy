import { Routes, Route } from "react-router-dom"
import Login from "./components/Login.jsx"
import Listado from "./components/List.jsx"
import Header from "./components/Header.jsx"
import Detalle from "./components/Detail.jsx"
import FooterComponent from "./components/Footer.jsx"
import Home from "./components/Home.jsx"

function App() {

return (
    <>
    <Header classname="bg-slate-400"/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/listado" element={<Listado/>}/>
        <Route path="/detalle" element={<Detalle/>}/>
    </Routes>
    <FooterComponent/>
    </>
)
}

export default App
