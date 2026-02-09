const Footer = () => {
    const currentYear = new Date();
    const Year = currentYear.getFullYear();

  return (
    <footer className="bg-verde-olivo py-8">

        <section className="bg-verde-olivo text-white py-10">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* columna 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-star gap-4">
                            <span className="naranja font-bold text-6xl leading-none">7</span>
                            <div className="flex flex-col leading-tight font-semibold text-[16px]">
                                <span>consultoría</span>
                                <span>cultural</span>
                            </div>
                        </div>
                        <p className="text-white/90 text-[16px]">Donde la gestión se vuelve arte</p>
                        <p className="text-white/90 text-[16px]">Ciudad de México • Lima • Santiago</p>
                    </div>
                    {/* columna 2 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-lg">Servicios</h4>
                        <ul className="flex flex-col gap-3 text-white/90">
                        <li className="hover:text-[#E85D04] transition duration-300">Asesoría para Artistas</li>
                        <li className="hover:text-[#E85D04] transition duration-300">Mentoría de Movilidad</li>
                        <li className="hover:text-[#E85D04] transition duration-300">Consultoría Institucional</li>
                        <li className="hover:text-[#E85D04] transition duration-300">Capacitación</li>
                        </ul>
                    </div>
                    {/* columna 3 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-lg">Empresa</h4>
                        <ul className="flex flex-col gap-3 text-white/90">
                        <li className="hover:text-[#E85D04] transition duration-300">Equipo</li>
                        <li className="hover:text-[#E85D04] transition duration-300">S7PTIMO</li>
                        <li className="hover:text-[#E85D04] transition duration-300">Contacto</li>
                        <li className="hover:text-[#E85D04] transition duration-300">Aviso de Privacidad</li>
                        </ul>
                    </div>
                    {/* columna 4 */}
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-lg">Contacto</h4>
                        <div className="flex flex-col gap-6 text-white/90">
                        <div>
                            <p className="font-semibold text-white">Ilona Goyeneche</p>
                            <p>+52 55 3474 2139</p>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Leonardo Daniel Miranda</p>
                            <p>+52 656 101 2488</p>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Sheila Flores Galaviz</p>
                            <p>+52 55 7610 7332</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>

        <section className="text-center">
            <div className="absolute left-1/2 w-[80%] -translate-x-1/2 border-t border-white"></div>
            <p className="py-7 text-[14.4px] text-white/90">
            © {Year} 7 Consultoría Cultural. Todos los derechos reservados.
            </p>
        </section>
    </footer>
  )
}

export default Footer