const ResultadosRecientes = () => {
  return (
    <section className="max-w-6xl mx-auto py-22">
        <div className="flex flex-col gap-7">
        <h2 className="text-center verde-olivo font-bold text-[40px]">Resultados Recientes 2025</h2>
        <p className="text-center text-[18.4px]">Logros concretos que demuestran la efectividad de nuestras metodologías</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* cards */}
            <article className="bg-gray-100 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <h3 className="text-2xl font-bold verde-olivo mb-6">
                        Mentoría de Movilidad
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Conclusión exitosa del acompañamiento a <span className="naranja font-bold">10 compañías mexicanas</span> de artes escénicas en la primera edición de nuestro programa de circulación nacional e internacional.
                    </p>
            </article>

            <article className="bg-gray-100 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <h3 className="text-2xl font-bold verde-olivo mb-6">
                        Estudios de Viabilidad
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Entrega de <span className="naranja font-bold">estudio integral</span> para el Teatro del IMSS en Monterrey, incluyendo análisis de estacionalidad, modelado estadístico y recomendaciones estratégicas.
                    </p>
            </article>

            <article className="bg-gray-100 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <h3 className="text-2xl font-bold verde-olivo mb-6">
                        Asesoría para Convocatorias
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                        Acompañamiento personalizado a artistas para postulación a <span className="naranja font-bold">Sistema de Apoyos a la Creación</span> y Premio Nacional de Ciencias y Artes.
                    </p>
            </article>
        </div>
    </section>
  )
}

export default ResultadosRecientes