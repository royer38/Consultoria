const Header = () => {
  return (
        <header className='font-medium px-64 py-4'>
      <nav className='flex items-center justify-between'>
      <div className='flex items-center gap-2'>
        <span className='naranja text-5xl'>7</span>
        <span className="text-[0.95rem] verde-olivo flex flex-col gap-0 leading-none">
        <span>consultoría</span>
        <span>cultural</span>
        </span>
      </div>

      <div className='flex items-center gap-10'>
        <ul className='flex gap-10 verde-olivo'>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">S7PTIMO</a>
          </li>
          <li>
            <a href="#">Equipo</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>

        <ul className='flex gap-3 bg-gris-claro p-2 rounded'>
          <li>
            <a href="#" className='naranja'>MX</a>
          </li>
          <li>
            <a href="#" className='verde-olivo border-l-2 border-gray-400 pl-2'>PE</a>
          </li>
          <li>
            <a href="#" className='verde-olivo border-l-2 border-gray-400 pl-2'>CL</a>
          </li>
        </ul>
      </div>

      </nav>
    </header>
  )
}

export default Header