import ILONAFOTOS7 from "../assets/ILONA FOTOS7.jpg";
import HandleSesionExploratoria from "../Helpers/HandleSesionExploratoria";
import ConsultoriaInstitucional from "../assets/Consultoria Institucional.png"
import Curaduria from "../assets/CURADURIA Y PROGRAMACION.png"
import Disenoproyecto from "../assets/Diseño de proyecto Artistico.png"

const Servicios = () => {
  return (
    <article>
        <section className="bg-verde-olivo py-24 text-center">
            <h1 className="text-5xl font-bold text-white">Nuestros Servicios</h1>
            <p className="text-white text-[19.2px] mt-10">Preséntanos tu proyecto y te ayudamos a identificar de qué manera podrías alcanzar tus objetivos.</p>
                <button onClick={HandleSesionExploratoria} className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer mt-10">
                Agenda una sesión de diagnóstico gratuita.
                </button>        
        </section>

        <section className="py-24 max-w-6xl mx-auto">
            <p className="text-center text-[18.4px] mb-15">Con más de 25 años de experiencia, ofrecemos servicios especializados, conocimiento institucional, visión curatorial y capacidad integral de producción</p>

            {/* prueba para ver como se veria con diseno de imagen */}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={ILONAFOTOS7} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Asesoría Personalizada para Artistas</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Acompañamiento integral en diseño, desarrollo y postulación de proyectos a convocatorias públicas y privadas.
                    </p>
                </div>

                <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Clarificación de propósito y posicionamiento.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Identificación de contexto, públicos y territorios estratégicos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de formatos y proceso artístico.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de narrativa para dossier y presentaciones.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de proyección estratégica y sostenibilidad.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de visión artística. </span>
                </li>

                </ul>
            </div>

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Solicitar asesoría
                </button>
            </div>
                </div>
            </div>

            <hr className="my-20 border-gray-100 border-2" />

            {/* prueba para ver como se veria con diseno de imagen como baner*/}
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={ILONAFOTOS7} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Mentoría de Movilidad Internacional</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Programa intensivo para proyectos escénicos que buscan dialogar con circuitos nacionales e internacionales. Vinculación con festivales y redes de programación.                    
                    </p>
                </div>

                {/* <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Clarificación de propósito y posicionamiento.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Identificación de contexto, públicos y territorios estratégicos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de formatos y proceso artístico.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de narrativa para dossier y presentaciones.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de proyección estratégica y sostenibilidad.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de visión artística. </span>
                </li>

                </ul>
                </div> */}

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button onClick={HandleSesionExploratoria} className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                agendar sesión exploratoria gratuita
                </button>
            </div>
                </div>
            </div>

            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={ConsultoriaInstitucional} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Consultoría Institucional</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Servicios especializados para instancias públicas que buscan profesionalizar procesos y fortalecer su impacto cultural. Incluye capacitación para equipos en gestión, producción y políticas culturales
                    </p>
                </div>

                {/* <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Clarificación de propósito y posicionamiento.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Identificación de contexto, públicos y territorios estratégicos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de formatos y proceso artístico.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de narrativa para dossier y presentaciones.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de proyección estratégica y sostenibilidad.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de visión artística. </span>
                </li>

                </ul>
                </div> */}

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button onClick={HandleSesionExploratoria} className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                agendar sesión exploratoria gratuita
                </button>
            </div>
                </div>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={Disenoproyecto} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Diseño de Proyecto Artístico</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Proceso de acompañamiento dramatúrgico de propuestas escénicas y multidisciplinarias, construcción conceptual, estructura narrativa y coherencia estética.
                    </p>
                    <div className="bg-naranja flex flex-col items-center max-w-full text-center py-8 rounded-xl gap-3">
                    <p className="text-white font-bold text-2xl">📢  Próxima Convocatoria 2026</p>
                    <p className="text-white text-[17.6px]">Segunda edición del programa | Lanzamiento: Marzo 2026</p>
                    <button className="bg-white max-w-sm naranja font-bold py-3 px-8 hover:-translate-y-1 hover:bg-[#F5F5F5] rounded transition duration-300 hover:cursor-pointer">Quiero ser notificado</button>
                </div>
                </div>

                <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Clarificación de propósito y posicionamiento.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Identificación de contexto, públicos y territorios estratégicos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de formatos y proceso artístico.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de narrativa para dossier y presentaciones.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de proyección estratégica y sostenibilidad.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de visión artística.</span>
                </li>

                </ul>
                </div>

                <div className="bg-gray-100 rounded-xl flex flex-col max-w-full gap-4 py-8 mt-8 px-8">
                    <p class="verde-olivo font-bold text-[20.8px]">Resultados 2025</p>
                <div className="text-[17.6]">
                    <span className="font-bold">10 compañías mexicanas</span>{" "}
                    <span>acompañadas exitosamente en procesos de movilidad internacional, logrando vínculos con festivales y espacios en</span>{" "}
                    <span className="font-bold">Alemania, Uruguay, Colombia, Perú y Chile.</span>
                </div>
                </div>

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Solicitar asesoría
                </button>
            </div>
                </div>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={ILONAFOTOS7} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Producción Escénica</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Proceso integral de planificación, gestión, coordinación y ejecución de un proyecto escénico. Implica convertir una propuesta artística en una experiencia escénica concreta, viable y sustentable.
                    </p>
                </div>

                {/* <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Clarificación de propósito y posicionamiento.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Identificación de contexto, públicos y territorios estratégicos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Análisis de pertinencia y oportunidad cultural.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de formatos y proceso artístico.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de narrativa para dossier y presentaciones.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de proyección estratégica y sostenibilidad.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de visión artística. </span>
                </li>

                </ul>
                </div> */}

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Solicitar asesoría
                </button>
            </div>
                </div>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="w-full h-105 border-3 bg-verde-olivo border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <img className="w-full h-full object-contain rounded-2xl" src={Curaduria} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Curaduría y Programación</h3>
                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Diseño y planeación de líneas curatoriales y programación artística para festivales, ciclos y espacios culturales que dialoguen con contextos territoriales, públicos específicos y objetivos institucionales
                    </p>
                </div>

                <div className="mt-6 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                Alcances específicos:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Investigación de contenidos y contextos.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Evaluación crítica y selección de propuestas.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Construcción de relatos curatoriales integrados.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Definición de criterios y enfoque conceptual.</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Vinculación con audiencias y territorios estratégicos.</span>
                </li>

                 <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de programación alineada a objetivos institucionales.</span>
                </li>

                </ul>
                </div>

                 <div className="mt-6 flex flex-col sm:flex-row gap-6">
                <button onClick={HandleSesionExploratoria} className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                agendar sesión exploratoria gratuita
                </button>
            </div>
                </div>
            </div>

        </section>

        <section className="bg-verde-olivo py-10 text-center flex flex-col items-center max-w-full mx-auto gap-8">
            <p className="text-white font-bold text-[35.2px]">¿No estás seguro qué servicio necesitas?</p>
            <p className="text-white/90 text-[18.4px]">Platiquemos tu proyecto. Podemos ayudarte a identificar las mejores estrategias para alcanzar tus objetivos.</p>
            <button onClick={HandleSesionExploratoria} className="text-white font-bold bg-naranja max-w-sm py-5 px-8 bg-naranja-oscuro rounded hover:cursor-pointer hover:-translate-y-1 transition duration-300">Agenda una sesión exploratoria gratuita</button>
        </section>

    </article>
  )
}

export default Servicios