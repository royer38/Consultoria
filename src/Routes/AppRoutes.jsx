import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import MainLayout from "../Layouts/MainLayout"
import Contacto from "../Pages/Contacto"
import NuestroEquipo from "../Pages/NuestroEquipo"

const AppRoutes = () => {
  return (
    <>
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacto" element={<Contacto/>}/>
        <Route path="/NuestroEquipo" element={<NuestroEquipo/>}/>
        
        {/* error 404 */}
        <Route path="*" element={<h1>404 - Pagina no encontrada</h1>}/>
      </Route>
    </Routes>
    </>
  )
}

export default AppRoutes