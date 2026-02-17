import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import MainLayout from "../Layouts/MainLayout"
import Contacto from "../Pages/Contacto"
import NuestroEquipo from "../Pages/NuestroEquipo"
import S7ptimo_P from "../Pages/S7ptimo_P"
import Servicios from "../Pages/Servicios"

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/NuestroEquipo" element={<NuestroEquipo/>}/>
        <Route path="/S7PTIMO" element={<S7ptimo_P/>}/>
        <Route path="/Servicios" element={<Servicios/>}/>
        
        {/* error 404 */}
        <Route path="*" element={<h1>404 - Pagina no encontrada</h1>}/>
      </Route>
    </Routes>
    </>
  )
}

export default AppRoutes