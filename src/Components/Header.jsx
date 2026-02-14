import { useState } from "react";
import OpenMenu from "../assets/OpenMenu.svg";
import CloseMenu from "../assets/CloseMenu.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const linkClass = ({isActive}) => isActive ? "naranja font-bold" : "";
  const linkClassMobile = ({isActive}) => isActive ? "text-[#E85D04] font-bold" : "";

  return (
    <header className="font-medium px-6 lg:px-64 py-4 z-50 sticky top-0 bg-white">
      <nav className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <span className="naranja text-5xl">7</span>
          <span className="text-[0.95rem] verde-olivo flex flex-col gap-0 leading-none">
            <span>consultoría</span>
            <span>cultural</span>
          </span>
        </div>

        {/* BOTÓN HAMBURGUESA (solo mobile) */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={menuOpen ? CloseMenu : OpenMenu} alt="menu" className="w-10 h-10"/>
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 verde-olivo">
            <li><NavLink to="/" className={linkClass}>Inicio</NavLink></li>
            <li><a href="#">Servicios</a></li>
            <li><NavLink to="/S7PTIMO" className={linkClass}>S7PTIMO</NavLink></li>
            <li><NavLink to="/NuestroEquipo" className={linkClass}>Equipo</NavLink></li>
            <li><NavLink to="/Contacto" className={linkClass}>Contacto</NavLink></li>
          </ul>

          <ul className="flex gap-3 bg-gris-claro p-2 rounded">
            <li><a href="#" className="naranja">MX</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">PE</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">CL</a></li>
          </ul>
        </div>

        {/* MENÚ MOBILE */}
        {menuOpen && (
          <div className="fixed inset-0 bg-verde-olivo flex flex-col items-center justify-center gap-10 md:hidden">
            <ul className="flex flex-col gap-8 text-2xl text-white font-semibold text-center">
              <li><NavLink to="/" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Inicio</NavLink></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Servicios</a></li>
              <li><NavLink to="/S7PTIMO" className={linkClassMobile} onClick={() => setMenuOpen(false)}>S7PTIMO</NavLink></li>
              <li><NavLink to="/NuestroEquipo" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Equipo</NavLink></li>
              <li><NavLink to="/Contacto" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Contacto</NavLink></li>
            </ul>

            <ul className="flex gap-3 bg-gris-claro p-2 rounded">
              <li><a href="#" className="naranja font-bold">MX</a></li>
              <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2 font-bold">PE</a></li>
              <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2 font-bold">CL</a></li>
            </ul>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;
