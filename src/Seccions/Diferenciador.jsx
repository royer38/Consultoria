const Diferenciador = () => {
  return (
    <article className="bg-gray-100 py-24">
        <h2 className="verde-olivo text-[40px] font-bold text-center">Nuestro Diferenciador</h2>
        <section className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {/* Card 1 */}
                <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />

                <h3 className="text-2xl font-bold verde-olivo mb-6">
                    Experiencia Institucional de Alto Nivel
                </h3>
                <p className="text-gray-700 leading-relaxed">
                   Más de 25 años de experiencia en gestión cultural pública y privada. Ex Coordinadores Nacionales de Teatro del INBAL y representantes ante organismos internacionales.                </p>
                </article>

                {/* Card 2 */}
                <article className="bg-white rounded-2xl shadow-sm p-6 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />

                <h3 className="text-2xl font-bold verde-olivo mb-6">
                    Conocimiento de Circuitos Internacionales
                </h3>
                <p className="text-gray-700 leading-relaxed">
                   Interacción directa con festivales y redes de programación en Europa y América Latina. Conexiones reales con curadores, programadores y espacios culturales.
                </p>
                </article>

                {/* Card 3 */}
                <article className="bg-white rounded-2xl shadow-sm p-6 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />

                <h3 className="text-2xl font-bold verde-olivo mb-6">
                    Visión Integral del Proceso
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Capacidad de desarrollo en todas las etapas: desde la conceptualización artística hasta la gestión de recursos, producción y circulación internacional.
                </p>
                </article>

            </div>
        </section>

        <section className="bg-verde-olivo max-w-7xl mx-auto px-14 py-12 rounded-2xl">
            <p className="naranja-claro text-center text-[2.5rem] font-bold leading-none mb-4">10+</p>
            <div className="grid grid-rows-2 text-center text-[16px]">
            <span className="text-white">Compañías acompañadas exitosamente en movilidad internacional (2023-2025)</span>
            <span className="text-white">Alemania • Uruguay • Colombia • Perú • Chile</span>
            </div>
        </section>
    </article>
  )
}

export default Diferenciador