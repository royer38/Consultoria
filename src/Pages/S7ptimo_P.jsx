const S7ptimo_P = () => {
  return (
    <article>
        <section className="bg-black py-24 relative overflow-hidden">
            <span className="absolute top-1/2 right-0 -translate-y-1/2 text-[18rem] font-bold text-[#3D2E25]">7</span>
                <div className="z-10 max-w-6xl mx-auto flex flex-col gap-7 relative ">
                    <h1 className="naranja font-bold text-[80px] text-center">S7PTIMO</h1>
                    <p className="text-white text-2xl text-center">Programación Escénica Contemporánea</p>
                    <p className="text-white/80 text-[17.6px] text-center">La Titería, Ciudad de México</p>
                </div>
        </section>

        <section className="bg-gray-100 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
            
                <article>
                    <h2 className="verde-olivo text-[35.2px] font-bold mb-9">Sobre el Proyecto</h2>
                    <div className="grid grid-cols-1 gap-8 text-[17.6px] text-gray-700">
                    <p>S7PTIMO es un espacio dedicado a la programación escénica contemporánea que explora las fronteras del teatro, la danza y las artes vivas.</p>
                    <p>Bajo la curaduría de 7 Consultoría Cultural, presentamos propuestas artísticas innovadoras que desafían las formas tradicionales y dialogan con las inquietudes de nuestro tiempo.</p>
                    <p>Cada temporada es una invitación a descubrir nuevas voces y lenguajes escénicos en uno de los espacios culturales más emblemáticos de la Ciudad de México.</p>
                    </div>
                </article>

                {/* Columna 2 (ejemplo: imagen, video, etc) */}
                <div className="grid grid-cols-1 gap-8">
                    {/* card 1 */}
                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">📍 Ubicación</h3>
                <h4 className="naranja text-[17.6px] font-bold mb-3">La Titería</h4>
                <p>Calle Centenario 9, Coyoacán</p>
                <p>Ciudad de México, 04000</p>
                </article>

                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">🎭 Funciones</h3>
                <h4 className="naranja text-[17.6px] font-bold mb-3">Jueves a Domingos</h4>
                <p>20:00 hrs</p>
                <p>Duración variable según obra</p>
                </article>
                </div>
                </div>
            </div>
        </section>

        <section className="py-24">
            <h2 className="verde-olivo font-bold text-[40px] text-center mb-12">Cartelera Actual</h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 items-stretch">
                    {/* card 1 */}
                    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">  
                        <div className="bg-verde-olivo h-80 flex items-center justify-center">
                            <span className="text-6xl opacity-40">🎭</span>
                        </div>

                        <div className="bg-gray-100 p-8 flex flex-col h-full">
                            <h3 className="verde-olivo font-bold text-[26px] leading-tight">El Peso de la Memoria</h3>
                            <p className="naranja font-bold mt-2 text-[15px]">Compañía Teatral Experimental</p>

                            <div className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">🗓️</span>
                                    <span className="verde-olivo font-bold text-left">Fechas:</span>
                                    <span className="text-left">Jueves a Domingos, hasta 28 Feb</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">⏱️</span>
                                    <span className="verde-olivo font-bold text-left">Duración:</span>
                                    <span className="text-left">75 minutos</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">👥</span>
                                    <span className="verde-olivo font-bold text-left">Edad:</span>
                                    <span className="text-left">Mayores de 15 años</span>
                                </div>

                                </div>
                                    <p className="naranja font-bold text-[34px] mt-8">$250</p>

                                <div className="flex flex-col gap-4 mt-auto">
                                <button className="bg-naranja text-white font-bold py-4 rounded-lg bg-naranja-oscuro transition duration-300">🎫 Comprar boletos</button>
                                <button className="border-2 border-verde-olivo verde-olivo font-bold py-4 rounded-lg hover:bg-[#5C6B2F] hover:text-white transition duration-300">Ver más información</button>
                                </div>
                            </div>
                        </article>

                        {/* card 2 */}
                    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">  
                        <div className="bg-verde-olivo h-80 flex items-center justify-center">
                            <span className="text-6xl opacity-40">💃</span>
                        </div>

                        <div className="p-8 flex flex-col h-full">
                            <h3 className="verde-olivo font-bold text-[26px] leading-tight">Geografías del Cuerpo</h3>
                            <p className="naranja font-bold mt-2 text-[15px]">Colectivo de Danza Contemporánea</p>

                            <div className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">🗓️</span>
                                    <span className="verde-olivo font-bold text-left">Fechas:</span>
                                    <span className="text-left">Viernes y Sábados, hasta 15 Mar</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">⏱️</span>
                                    <span className="verde-olivo font-bold text-left">Duración:</span>
                                    <span className="text-left">60 minutos</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">👥</span>
                                    <span className="verde-olivo font-bold text-left">Edad:</span>
                                    <span className="text-left">Todo público</span>
                                </div>

                                </div>
                                    <p className="naranja font-bold text-[34px] mt-8">$200</p>

                                <div className="flex flex-col gap-4 mt-auto">
                                <button className="bg-naranja text-white font-bold py-4 rounded-lg bg-naranja-oscuro transition duration-300">🎫 Comprar boletos</button>
                                <button className="border-2 border-verde-olivo verde-olivo font-bold py-4 rounded-lg hover:bg-[#5C6B2F] hover:text-white transition duration-300">Ver más información</button>
                                </div>
                            </div>
                        </article>

                        {/* card 3 */}
                    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">  
                        <div className="bg-verde-olivo h-80 flex items-center justify-center">
                            <span className="text-6xl opacity-40">🎪</span>
                        </div>

                        <div className="p-8 flex flex-col h-full">
                            <h3 className="verde-olivo font-bold text-[26px] leading-tight">Noches de Cabaret</h3>
                            <p className="naranja font-bold mt-2 text-[15px]">Ensamble Escénico La Revuelta</p>

                            <div className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">🗓️</span>
                                    <span className="verde-olivo font-bold text-left">Fechas:</span>
                                    <span className="text-left">Sábados, hasta 22 Mar</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">⏱️</span>
                                    <span className="verde-olivo font-bold text-left">Duración:</span>
                                    <span className="text-left">90 minutos</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">👥</span>
                                    <span className="verde-olivo font-bold text-left">Edad:</span>
                                    <span className="text-left">Mayores de 18 años</span>
                                </div>

                                </div>
                                    <p className="naranja font-bold text-[34px] mt-8">$300</p>

                                <div className="flex flex-col gap-4 mt-auto">
                                <button className="bg-naranja text-white font-bold py-4 rounded-lg bg-naranja-oscuro transition duration-300">🎫 Comprar boletos</button>
                                <button className="border-2 border-verde-olivo verde-olivo font-bold py-4 rounded-lg hover:bg-[#5C6B2F] hover:text-white transition duration-300">Ver más información</button>
                                </div>
                            </div>
                        </article>

                </div>
            </div>
        </section>

        <section className="py-24 bg-gray-100">
            <h2 className="verde-olivo font-bold text-[40px] text-center mb-12">Próximamente</h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 ">
                    {/* cards */}
                    <article className="bg-white rounded-2xl shadow-sm p-6 relative h-full overflow-hidden">
                        <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                            <p className="verde-olivo font-bold text-[22.4px] text-center mb-4">La Casa de los Ecos</p>
                            <p className="naranja font-bold text-center mb-4">Teatro del Abismo</p>
                            <p className="text-center mb-4 font-bold">📅 Estreno: Abril 2026</p>
                            <p className="text-center mb-4">Una exploración sobre la memoria y el olvido en espacios domésticos abandonados.</p>
                    </article>

                    <article className="bg-white rounded-2xl shadow-sm p-6 relative h-full overflow-hidden">
                        <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                            <p className="verde-olivo font-bold text-[22.4px] text-center mb-4">Ritmos Urbanos</p>
                            <p className="naranja font-bold text-center mb-4">Danza Periférica</p>
                            <p className="text-center mb-4 font-bold">📅 Estreno: Mayo 2026</p>
                            <p className="text-center mb-4">Pieza de danza que dialoga con los sonidos y movimientos de la ciudad contemporánea.</p>
                    </article>

                    <article className="bg-white rounded-2xl shadow-sm p-6 relative h-full overflow-hidden">
                        <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                            <p className="verde-olivo font-bold text-[22.4px] text-center mb-4">Monólogos del Silencio</p>
                            <p className="naranja font-bold text-center mb-4">Proyecto Solista</p>
                            <p className="text-center mb-4 font-bold">📅 Estreno: Junio 2026</p>
                            <p className="text-center mb-4">Serie de performances que exploran la comunicación más allá de las palabras.</p>
                    </article>
                </div>
            </div>

            <div className="bg-verde-olivo flex flex-col gap-5 py-15 max-w-6xl rounded-xl mx-auto mt-13">
                <p className="text-center font-bold text-white text-[28.8px]">Suscríbete a Nuestro Calendario</p>
                <p className="text-center text-white text-[17.6px]">Recibe notificaciones de estrenos, funciones especiales y eventos exclusivos</p>
                <form className="flex flex-col md:flex-row gap-5 mx-auto" action="">
                    <input className="bg-white rounded py-3 px-3 w-90 placeholder:text-left border-0 focus:outline-none focus:ring-0" type="email" name="Correo" id="Correo" placeholder="Tu correo electrónico"/>
                    <button className="bg-naranja py-3 px-8 text-white font-bold rounded hover:cursor-pointer">Suscribirme</button>
                </form>
            </div>

        </section>

        <section className="py-24">
            <div className="flex flex-col max-w-6xl mx-auto gap-8">
                <h2 className="verde-olivo font-bold text-[35.2px] text-center">¿Quieres Presentar tu Obra en S7PTIMO?</h2>
                <p className="text-[18.4px] text-center">Estamos siempre en búsqueda de propuestas escénicas contemporáneas que desafíen, cuestionen y emocionen. Si tu compañía o colectivo tiene un proyecto que resuena con nuestra línea curatorial, nos encantaría conocerlo.</p>
            </div>

            <div className="flex flex-col max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl mt-8 gap-8">
                <h3 className="verde-olivo font-bold text-[22.4px]">Criterios de Selección</h3>
                <ul className="list-['✓'] pl-6 marker:text-[#E85D04] marker:font-bold text-gray-700 flex flex-col gap-4">
                    <li>Propuestas escénicas contemporáneas (teatro, danza, performance, híbridos)</li>
                    <li>Rigor artístico y calidad técnica</li>
                    <li>Obras que dialoguen con problemáticas actuales</li>
                    <li>Formato adaptable al espacio de La Titería</li>
                    <li>Compañías profesionales con trayectoria comprobable</li>
                    <li>Disponibilidad para temporadas de mínimo 4 funciones</li>
                </ul>
            </div>

            <div className="flex flex-col max-w-4xl mx-auto gap-8 items-center">
                <div className="flex flex-row max-w-4xl mx-auto text-[18.4px] mt-8">
                    <p><span className="font-bold">Proceso: </span><span>Recibimos propuestas de forma continua. El equipo curatorial revisa todas las solicitudes y contacta a los proyectos seleccionados para seguimiento y programación.</span></p>
                </div>
                <button className="text-white font-bold bg-naranja rounded py-4 px-10 max-w-60 bg-naranja-oscuro hover:-translate-y-1 transition duration-300">Enviar Propuesta</button>
            </div>

        </section>

    </article>
  )
}

export default S7ptimo_P