import { Link, useNavigate } from "react-router-dom"
import s7ptimoLogo from "../assets/S7ptmoSeccion.png"
import LasMujeresFacturan from "../assets/LAS MUJERES FACTURAN.png"
import Invierno from "../assets/INVIERNO.png"
import CloudModal from "../Components/cloudModal"
import { useState } from "react"

const S7ptimo_P = () => {
    const navigate = useNavigate();
    const [modalData, setModalData] = useState(null);
    const obras = [
  {
    title: "Las mujeres facturan",
    image: LasMujeresFacturan,
    sinopsis: "Martha Del Baile está lista para revelar el secreto del éxito en su esperada TEDtalk: LAS MUJERES FACTURAN. Acompañada por su asistente personal, Leydi Lupita, quien nos ofrecerá una mirada aguda, divertida y honesta sobre lo que realmente significa “triunfar” en estos tiempos. Porque ahora las mujeres facturan… pero no todas facturamos igual. Prepárate para una experiencia que cuestiona los roles de género, el éxito y la desigualdad social.",
    horario: "20:00 hrs",
    fechas: "28 de marzo, 4 y 11 de abril.",
    duracion: "60 min",
    publico: "adolescentes y adultos",
    genero: "monólogo contemporáneo",
  },
  {
    title: "Invierno",
    image: Invierno,
    sinopsis: "INVIERNO es un unipersonal escrito e interpretado por Cristian Lara que cuenta la historia de Daniel “El Pollo”, un joven que toma un avión por primera vez para viajar a un pequeño pueblo pesquero en el norte de Europa, entre Suecia y Finlandia. Allí vive Peps, uno de sus mejores amigos de la preparatoria, quien ahora trabaja vendiendo pescado en el mercado local. Lo que comienza como una visita se convierte poco a poco en un viaje personal: lejos de todo lo conocido, Daniel tendrá que enfrentarse a sus propias preguntas, a las decisiones que lo trajeron hasta ahí y a aquello que todavía espera de su vida. Con unas botas blancas de pescador y un escenario casi vacío —apenas un banco— el actor construye, a través de la palabra y el relato, un universo completo: aeropuertos, mercados, recuerdos de juventud, amistades que cambian con el tiempo y la sensación de empezar de nuevo en un lugar donde nadie te conoce. Dirigida por Antón Araiza y con diseño escénico de Emilio Zurita, la obra dio origen a la compañía Teatro Bajo la Lluvia, integrada por jóvenes creadores interesados en una escena directa, honesta y cercana al público. Por este trabajo, Cristian Lara fue nominado por la ACPT como Actor Revelación.",
    horario: "20:00 hrs",
    fechas: "6, 13, 20 y 27 de abril.",
    duracion: "60 min",
    publico: "adolescentes y adultos",
    genero: "monólogo contemporáneo",
  }
];

    const handleNavigate = (url) => {
        navigate(url)
        window.scrollTo({top: 0, behavior: "smooth"})
    };

  return (
    <article>
        <section className="bg-black py-24 relative overflow-hidden">
            <span className="absolute top-1/2 right-0 -translate-y-1/2 text-[18rem] font-bold text-[#3D2E25]">7</span>
                <div className="z-10 max-w-6xl mx-auto flex flex-col gap-7 relative items-center">
                    <img src={s7ptimoLogo} alt="LogoFooter-Consultoria-7" className="w-56 md:w-64 object-contain"/>
                    <p className="text-white text-2xl text-center">Programación de Artes Escénicas Contemporáneas</p>
                    <p className="text-white/80 text-[17.6px] text-center">Foro Cultural Coyoacán, Ciudad de México</p>
                </div>
        </section>

        <section className="bg-gray-100 py-24">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">

                <article>
                    <h2 className="verde-olivo text-[35.2px] font-bold mb-9">Sobre el Proyecto</h2>
                    <div className="grid grid-cols-1 gap-8 text-[17.6px] text-gray-700">
                    <p>S7PTIMO Foro Cultural es un espacio de artes escénicas ubicado en Coyoacán, Ciudad de México, dedicado a la presentación y acompañamiento de propuestas contemporáneas multidiciploinarias.</p>
                    <p>Nacemos con la vocación de impulsar una escena que dialogue con nuestro tiempo y abra espacio a nuevas investigaciones, formatos, lenguajes y propuestas, generando un punto de encuentro entre creadoras, creadores y públicos diversos.</p>
                    <p>Este primer ciclo marca el inicio de una plataforma en construcción: un espacio que crecerá de manera orgánica, afinando progresivamente su identidad en busca de consolidarse como un referente para la experimentación, la calidad artística y las buenas prácticas en gestión, producción y programación cultural.</p>
                    </div>
                </article>

                {/* Columna 2 (ejemplo: imagen, video, etc) */}
                <div className="grid grid-cols-1 gap-8">
                    {/* card 1 */}
                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">📍 Ubicación</h3>
                <h4 className="naranja text-[17.6px] font-bold mb-3">S7ptimo Foro Cultural</h4>
                <p>Calle Vicente Guerrero 7, Coyoacán</p>
                <p>Ciudad de México, 04000</p>
                </article>

                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">Funciones</h3>
                {/* <h4 className="naranja text-[17.6px] font-bold mb-3">Jueves a Domingos</h4> */}
                <p>Lunes 20:00 hrs</p>
                <p>Jueves 20:00 hrs</p>
                <p>Sábado 20:00 hrs</p>
                </article>
                </div>
                </div>
            </div>
        </section>

        <section className="py-24" id="cartelera">
            <h2 className="verde-olivo font-bold text-[40px] text-center mb-12">Cartelera Actual</h2>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-stretch">
                    {/* card 1 */}
                    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
                        <div className="bg-verde-olivo h-80 flex items-center justify-center">
                            {/* <span className="text-6xl opacity-40">🎭</span> */}
                            <img className="w-full h-full object-cover" src={LasMujeresFacturan} alt="LasMujeresFacturan_Portada"/>
                        </div>

                        <div className="bg-gray-100 p-8 flex flex-col h-full">
                            <h3 className="verde-olivo font-bold text-[26px] leading-tight">Las mujeres facturan</h3>
                            <p className="naranja font-bold mt-2 text-[15px]">Temporada 1</p>

                            <div className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">🗓️</span>
                                    <span className="verde-olivo font-bold text-left">Fechas:</span>
                                    <span className="text-left">28 de marzo, 4 y 11 de abril.</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">⏱️</span>
                                    <span className="verde-olivo font-bold text-left">Duración:</span>
                                    <span className="text-left">60 minutos</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">👥</span>
                                    <span className="verde-olivo font-bold text-left">Público:</span>
                                    <span className="text-left">adolescentes y adultos</span>
                                </div>

                                </div>
                                    <p className="naranja font-bold text-[34px] mt-8">$300</p>

                                <div className="flex flex-col gap-4 mt-auto">
                                <button className="bg-naranja text-white font-bold py-4 rounded-lg bg-naranja-oscuro transition duration-300 hover:cursor-pointer"
                                onClick={() => window.open("https://boletopolis.com/es/eventos/buscar/S7ptimo", "_blank")}>🎫 Comprar boletos</button>
                                <button className="border-2 border-verde-olivo verde-olivo font-bold py-4 rounded-lg hover:bg-[#5C6B2F] hover:text-white transition duration-300 hover:cursor-pointer"
                                onClick={() => setModalData(obras[0])}>Ver más información</button>
                                </div>
                            </div>
                        </article>

                        {/* card 2 */}
                    <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
                        <div className="bg-verde-olivo h-80 flex items-center justify-center">
                            {/* <span className="text-6xl opacity-40">💃</span> */}
                            <img className="w-full h-full object-cover" src={Invierno} alt="Invierno_Portada"/>
                        </div>

                        <div className="p-8 flex flex-col h-full">
                            <h3 className="verde-olivo font-bold text-[26px] leading-tight">Invierno</h3>
                            <p className="naranja font-bold mt-2 text-[15px]">Temporada 2</p>

                            <div className="mt-6 flex flex-col gap-3 text-[15px] text-gray-700">
                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">🗓️</span>
                                    <span className="verde-olivo font-bold text-left">Fechas:</span>
                                    <span className="text-left">6, 13, 20 y 27 de abril.</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">⏱️</span>
                                    <span className="verde-olivo font-bold text-left">Duración:</span>
                                    <span className="text-left">60 minutos</span>
                                </div>

                                <div className="grid grid-cols-[22px_85px_1fr] items-start gap-3">
                                    <span className="text-center">👥</span>
                                    <span className="verde-olivo font-bold text-left">Público:</span>
                                    <span className="text-left">adolescentes y adultos</span>
                                </div>

                                </div>
                                    <p className="naranja font-bold text-[34px] mt-8">$300</p>

                                <div className="flex flex-col gap-4 mt-auto">
                                <button className="bg-naranja text-white font-bold py-4 rounded-lg bg-naranja-oscuro transition duration-300 hover:cursor-pointer"
                                onClick={() => window.open("https://boletopolis.com/es/eventos/buscar/S7ptimo", "_blank")}>🎫 Comprar boletos</button>
                                <button className="border-2 border-verde-olivo verde-olivo font-bold py-4 rounded-lg hover:bg-[#5C6B2F] hover:text-white hover:cursor-pointer
                                 transition duration-300" onClick={() => setModalData(obras[1])}>Ver más información</button>
                                </div>
                            </div>
                        </article>

                        {/* card 3 */}
                    {/* <article className="bg-gray-100 rounded-2xl shadow-sm overflow-hidden w-full max-w-105 h-full flex flex-col transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-1">
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
                    </article> */}

                </div>
            </div>
        </section>

        <section className="py-24 bg-gray-100">
            {/* <h2 className="verde-olivo font-bold text-[40px] text-center mb-12">Próximamente</h2>

            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-8 ">

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
            </div> */}
{/* mt-13 */}
            <div className="bg-verde-olivo flex flex-col gap-5 py-15 max-w-6xl rounded-xl mx-auto">
                <p className="text-center font-bold text-white text-[28.8px]">Suscríbete a nuestra programación</p>
                <p className="text-center text-white text-[17.6px]">Recibe información de estrenos, funciones especiales y eventos exclusivos</p>
                <form className="flex flex-col md:flex-row gap-5 mx-auto" action="">
                    <input className="bg-white rounded py-3 px-3 w-90 placeholder:text-left border-0 focus:outline-none focus:ring-0" type="email" name="Correo" id="Correo" placeholder="Tu correo electrónico"/>
                    <button className="bg-naranja py-3 px-8 text-white font-bold rounded hover:cursor-pointer">Suscribirme</button>
                </form>
            </div>

        </section>

        <section className="py-24">
            <div className="flex flex-col max-w-6xl mx-auto gap-8">
                <h2 className="verde-olivo font-bold text-[35.2px] text-center">¿Quieres ser parte de la programación de S7PTIMO?</h2>
                <p className="text-[18.4px] text-center">Programamos propuestas escénicas contemporáneas que exploren nuevos lenguajes, investigaciones y formas de relacionarse con el hecho escénico. Si tu obra o la de tu compañía dialoga con el espíritu de nuestro espacio nos lo puedes hacer llegar por esta vía.</p>
            </div>

            {/* criterios de seleccion */}
            {/* <div className="flex flex-col max-w-4xl mx-auto bg-gray-100 p-8 rounded-xl mt-8 gap-8">
                <h3 className="verde-olivo font-bold text-[22.4px]">Criterios de Selección</h3>
                <ul className="list-['✓'] pl-6 marker:text-[#E85D04] marker:font-bold text-gray-700 flex flex-col gap-4">
                    <li>Propuestas escénicas contemporáneas (teatro, danza, performance, híbridos)</li>
                    <li>Rigor artístico y calidad técnica</li>
                    <li>Obras que dialoguen con problemáticas actuales</li>
                    <li>Formato adaptable al espacio de La Titería</li>
                    <li>Compañías profesionales con trayectoria comprobable</li>
                    <li>Disponibilidad para temporadas de mínimo 4 funciones</li>
                </ul>
            </div> */}

            <div className="flex flex-col max-w-6xl mx-auto gap-8 items-center">
                <div className="flex flex-row max-w-6xl mx-auto text-[18.4px] mt-8 text-center">
                    <p><span className="font-bold">Proceso de programación: </span><span>Realizamos de manera continua un trabajo de scouting y desarrollamos parte de nuestra programación por invitación directa. Al mismo tiempo, permanecemos abiertos a recibir propuestas. El equipo curatorial revisa cada proyecto y se pondrá en contacto con aquellos que puedan integrarse a la programación en construcción.</span></p>
                </div>
                <button onClick={() => handleNavigate("/Contacto")} className="text-white font-bold bg-naranja rounded py-4 px-10 max-w-60 bg-naranja-oscuro hover:-translate-y-1 transition duration-300">Enviar Propuesta</button>
            </div>

        </section>
            <CloudModal key={modalData ? modalData.title : "closed"} data={modalData} onClose={() => setModalData(null)}/>
    </article>

  )
}

export default S7ptimo_P