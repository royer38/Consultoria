import { useState } from "react";
import OpenMenu from "../assets/OpenMenu.svg";
import CloseMenu from "../assets/CloseMenu.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="font-medium px-6 lg:px-64 py-4 relative z-50">
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
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={menuOpen ? CloseMenu : OpenMenu}
            alt="menu"
            className="w-10 h-10"
          />
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 verde-olivo">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">S7PTIMO</a></li>
            <li><a href="#">Equipo</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>

          <ul className="flex gap-3 bg-gris-claro p-2 rounded">
            <li><a href="#" className="naranja">MX</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">PE</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">CL</a></li>
          </ul>
        </div>

        {/* MENÚ MOBILE (overlay) */}
        {menuOpen && (
          <div className="fixed inset-0 bg-verde-olivo flex flex-col items-center justify-center gap-10 md:hidden">

            <ul className="flex flex-col gap-8 text-2xl text-white font-semibold text-center">
              <li><a href="#" onClick={() => setMenuOpen(false)}>Inicio</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Servicios</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>S7PTIMO</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Equipo</a></li>
              <li><a href="#" onClick={() => setMenuOpen(false)}>Contacto</a></li>
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
