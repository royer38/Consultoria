import { useState, useRef, useEffect } from "react";
import OpenMenu from "../assets/OpenMenu.svg";
import CloseMenu from "../assets/CloseMenu.svg";
import { NavLink } from "react-router-dom";
import MainLogo from "../assets/LogoNaranja.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOrigin, setMenuOrigin] = useState({ x: 0, y: 0 });

  const buttonRef = useRef(null);

  const linkClass = ({ isActive }) => `transition-colors duration-300 ${
      isActive ? "naranja font-bold" : "hover:text-[#E85D04]"}`;

  const linkClassMobile = ({ isActive }) =>
    `transition-colors duration-300 ${isActive ? "text-[#E85D04] font-bold" : ""}`;

  const calculateOrigin = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      setMenuOrigin({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  };

  const handleMenuToggle = () => {
    calculateOrigin();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    calculateOrigin();
  }, []);

  return (
    <header className="font-medium px-6 lg:px-64 py-4 z-50 sticky top-0 bg-white">
      <nav className="flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={MainLogo} alt="Logo 7 Consultoría Cultural" className="w-56 md:w-45 object-contain"/>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button ref={buttonRef} className="md:hidden z-50 relative" onClick={handleMenuToggle}>
          <img src={menuOpen ? CloseMenu : OpenMenu} alt="menu" className="w-10 h-10"/>
        </button>

        {/* MENÚ DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 verde-olivo">
            <li><NavLink to="/" className={linkClass}>Inicio</NavLink></li>
            <li><NavLink to="/servicios" className={linkClass}>Servicios</NavLink></li>
            <li><NavLink to="/nuestroEquipo" className={linkClass}>Equipo</NavLink></li>
            <li><NavLink to="/contacto" className={linkClass}>Contacto</NavLink></li>
          </ul>

          <ul className="flex gap-3 bg-gris-claro p-2 rounded">
            <li><a href="#" className="naranja">MX</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">PE</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2">CL</a></li>
          </ul>
        </div>

        {/* MENÚ MOBILE */}
        <div
          style={{clipPath: menuOpen ? `circle(150% at ${menuOrigin.x}px ${menuOrigin.y}px)`
              : `circle(0% at ${menuOrigin.x}px ${menuOrigin.y}px)`
          }}
          className="fixed inset-0 bg-verde-olivo flex flex-col items-center justify-center gap-10 md:hidden transition-[clip-path] duration-500 ease-in-out">
          <ul className="flex flex-col gap-8 text-2xl text-white font-semibold text-center">
            <li><NavLink to="/" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Inicio</NavLink></li>
            <li><NavLink to="/servicios" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Servicios</NavLink></li>
            <li><NavLink to="/nuestroequipo" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Equipo</NavLink></li>
            <li><NavLink to="/contacto" className={linkClassMobile} onClick={() => setMenuOpen(false)}>Contacto</NavLink></li>
          </ul>

          <ul className="flex gap-3 bg-gris-claro p-2 rounded">
            <li><a href="#" className="naranja font-bold">MX</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2 font-bold">PE</a></li>
            <li><a href="#" className="verde-olivo border-l-2 border-gray-400 pl-2 font-bold">CL</a></li>
          </ul>
        </div>

      </nav>
    </header>
  );
};

export default Header;