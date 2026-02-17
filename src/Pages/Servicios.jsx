const Servicios = () => {
  return (
    <article>
        <section className="bg-verde-olivo py-24 text-center">
            <h1 className="text-white font-bold text-5xl">Nuestros Servicios</h1>
            <p className="text-white text-[19.2px] mt-10">Acompañamos a artistas, compañías, instituciones y gobiernos en la profesionalización y crecimiento de sus proyectos culturales</p>
        </section>

        <section className="py-24 max-w-6xl mx-auto">
            <p className="text-center text-[18.4px] mb-15">Con más de 25 años de experiencia combinada, ofrecemos servicios especializados que integran conocimiento institucional, visión curatorial y capacidad técnica de producción.</p>

            {/* cards */}
            {/* HEADER */}
                <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
                    
                    <div className="w-33 h-40 border-3 bg-gray-100 border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-5xl opacity-90">🎭</span>
                    </div>

                    <h2 className="text-[28px] sm:text-[35.2px] font-bold text-[#5C6B2F] leading-tight">
                    Asesoría Personalizada para Artistas
                    </h2>
                </div>

                <p className="text-[17px] sm:text-[18.4px] text-gray-800 leading-relaxed">
                    Acompañamiento integral para creadores y compañías escénicas en el diseño,
                    desarrollo y postulación de proyectos artísticos a convocatorias públicas y privadas.
                    Nuestro objetivo es fortalecer la capacidad de artistas independientes para acceder
                    a financiamiento y desarrollar proyectos sostenibles.
                </p>

                </div>

            {/* CARD GRIS */}
            <div className="mt-12 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                Incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">
                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diagnóstico y conceptualización de proyectos</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Preparación y revisión documental para convocatorias</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Estructuración de presupuestos y estrategias de financiamiento</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Desarrollo de materiales de difusión y promoción</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Seguimiento personalizado durante el proceso</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Asesoría en cumplimiento de requisitos institucionales</span>
                </li>
                </ul>
            </div>

            {/* BOTONES */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Solicitar asesoría
                </button>

                <button className="border-2 border-[#5C6B2F] text-[#5C6B2F] font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#5C6B2F] hover:text-white transition duration-300 hover:cursor-pointer">
                Más información
                </button>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
                    
                    <div className="w-33 h-40 border-3 bg-gray-100 border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-5xl opacity-90">📚</span>
                    </div>

                    <h2 className="text-[28px] sm:text-[35.2px] font-bold text-[#5C6B2F] leading-tight">
                    Capacitación para Equipos de Trabajo
                    </h2>
                </div>

                <p className="text-[17px] sm:text-[18.4px] text-gray-800 leading-relaxed">
                    Programas de formación diseñados para fortalecer competencias en equipos de instituciones culturales, enfocados en gestión, producción y políticas culturales. Diseñamos talleres y programas a la medida de las necesidades de cada organización.
                </p>

                </div>

            {/* CARD GRIS */}
            <div className="mt-12 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                Temas disponibles:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">
                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Talleres de diseño de proyectos culturales</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Capacitación en gestión de convocatorias y evaluación de proyectos</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Actualización en tendencias de políticas culturales</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Formación en marketing cultural y desarrollo de audiencias</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Producción de artes escénicas</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Gestión de espacios culturales</span>
                </li>
                </ul>
            </div>

            {/* BOTONES */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Solicitar cotización
                </button>

                <button className="border-2 border-[#5C6B2F] text-[#5C6B2F] font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#5C6B2F] hover:text-white transition duration-300 hover:cursor-pointer">
                Ver temarios
                </button>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
                    
                    <div className="w-33 h-40 border-3 bg-gray-100 border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-5xl opacity-90">🏛️</span>
                    </div>

                    <h2 className="text-[28px] sm:text-[35.2px] font-bold text-[#5C6B2F] leading-tight">
                    Consultoría para Instituciones Públicas en México
                    </h2>
                </div>

                <p className="text-[17px] sm:text-[18.4px] text-gray-800 leading-relaxed">
                Servicios especializados para instancias estatales, municipales, universidades y organizaciones culturales que buscan profesionalizar sus procesos y optimizar su impacto. Trabajamos de la mano con instituciones para desarrollar políticas culturales efectivas y sostenibles.
                </p>

                </div>

            {/* CARD GRIS */}
            <div className="mt-12 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                Alcances específicos:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">
                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diagnóstico y desarrollo de procesos institucionales</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Alineación con programas y políticas públicas culturales</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Infraestructura cultural: diagnóstico, programación y equipamiento</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Vinculación institucional y desarrollo de redes de colaboración</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diseño de convocatorias y sistemas de evaluación</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Estudios de viabilidad y modelos de gestión</span>
                </li>
                </ul>
            </div>

            {/* BOTONES */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Agendar reunión exploratoria
                </button>

                <button className="border-2 border-[#5C6B2F] text-[#5C6B2F] font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#5C6B2F] hover:text-white transition duration-300 hover:cursor-pointer">
                Casos de éxito
                </button>
            </div>

            {/* divisor */}
            <hr className="my-20 border-gray-100 border-2" />

            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 text-center sm:text-left">
                    
                    <div className="w-33 h-40 border-3 bg-gray-100 border-[#E85D04] rounded-2xl flex items-center justify-center shrink-0 mx-auto sm:mx-0">
                    <span className="text-5xl opacity-90">🌎</span>
                    </div>

                    <h2 className="text-[28px] sm:text-[35.2px] font-bold text-[#5C6B2F] leading-tight">
                    Mentoría de Movilidad para Proyectos Escénicos
                    </h2>
                </div>

                <p className="text-[17px] sm:text-[18.4px] text-gray-800 leading-relaxed">
                Programa de acompañamiento intensivo para compañías escénicas que buscan ampliar su circulación a nivel nacional e internacional. Desarrollamos estrategias de vinculación con festivales, espacios culturales y redes de programación en México, América Latina y Europa.
                </p>
                <div className="bg-naranja flex flex-col items-center max-w-full text-center py-8 rounded-xl gap-3">
                    <p className="text-white font-bold text-2xl">📢 Próxima Convocatoria 2026</p>
                    <p className="text-white text-[17.6px]">Segunda edición del programa | Lanzamiento: Marzo 2026</p>
                    <button className="bg-white max-w-sm naranja font-bold py-3 px-8 hover:-translate-y-1 hover:bg-[#F5F5F5] rounded transition duration-300 hover:cursor-pointer">Quiero ser notificado</button>
                </div>
                </div>

            {/* CARD GRIS */}
            <div className="mt-12 bg-gray-100 rounded-2xl p-10">
                <h3 className="text-[#5C6B2F] font-bold text-[22px] mb-8">
                El programa incluye:
                </h3>

                <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-12 text-gray-800 text-[16px]">
                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Diagnóstico integral desde perspectiva curatorial y de gestión</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Desarrollo de materiales de promoción y dossier artístico</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Mapeo de festivales, programadores y oportunidades de financiamiento</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Acompañamiento en primeros contactos y negociaciones</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Sesiones individuales y grupales</span>
                </li>

                <li className="flex gap-4">
                    <span className="text-[#E85D04] font-bold text-lg">✓</span>
                    <span>Red de contactos con programadores internacionales</span>
                </li>
                </ul>
            </div>

            <div className="bg-gray-100 rounded-xl flex flex-col max-w-full gap-4 py-8 mt-8 px-8">
                <p className="verde-olivo font-bold text-[20.8px]">Resultados 2025</p>
                <div className="text-[17.6]">
                    <span className="font-bold">10 compañías mexicanas</span>{" "}
                    <span>acompañadas exitosamente en procesos de movilidad internacional, logrando vínculos con festivales y espacios en</span>{" "}
                    <span className="font-bold">Alemania, Uruguay, Colombia, Perú y Chile.</span>
                </div>
            </div>

            {/* BOTONES */}
            <div className="mt-8 flex flex-col sm:flex-row gap-6">
                <button className="bg-[#E85D04] text-white font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#c94e03] transition duration-300 hover:cursor-pointer">
                Más información sobre la convocatoria
                </button>

                <button className="border-2 border-[#5C6B2F] text-[#5C6B2F] font-bold px-10 py-4 rounded-lg hover:-translate-y-1 hover:bg-[#5C6B2F] hover:text-white transition duration-300 hover:cursor-pointer">
                Ver casos de éxito
                </button>
            </div>
        </section>

        <section className="bg-verde-olivo py-10 text-center flex flex-col items-center max-w-full mx-auto gap-8">
            <p className="text-white font-bold text-[35.2px]">¿No estás seguro qué servicio necesitas?</p>
            <p className="text-white/90 text-[18.4px]">Platiquemos tu proyecto. Podemos ayudarte a identificar las mejores estrategias para alcanzar tus objetivos.</p>
            <button className="text-white font-bold bg-naranja max-w-sm py-5 px-8 bg-naranja-oscuro rounded hover:cursor-pointer hover:-translate-y-1 transition duration-300">Agendar una llamada</button>
        </section>


    </article>
  )
}

export default Servicios