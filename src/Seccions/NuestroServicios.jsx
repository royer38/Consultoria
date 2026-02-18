const NuestroServicios = () => {
  return (
    <section className="py-16">
    <section className="mb-16">
        <div className="text-center">
        <h2 className="verde-olivo font-bold text-[40px]">Nuestros Servicios</h2>
        <p className="text-[18.4px]">Acompañamos a artistas, compañías, instituciones y gobiernos en la profesionalización y crecimiento de sus proyectos culturales</p>
        </div>
    </section>
{/* en los divs vacios puede que despues vaya una imagen, habian emojis */}
    <section className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article className="bg-white rounded-2xl p-10 h-full border-2 border-[#F5F5F5] hover:border-[#E85D04] transition-all duration-300 hover:-translate-y-1">
          <div className="text-3xl mb-6"></div>
          <h3 className="verde-olivo font-bold text-2xl leading-snug mb-6">Asesoría Personalizada para Artistas</h3>
          <p className="text-gray-700 leading-relaxed mb-10">Acompañamiento integral en diseño, desarrollo y postulación de proyectos a convocatorias públicas y privadas.</p>
          <button className="border-2 border-verde-olivo verde-olivo font-bold px-8 py-3 rounded-md
          transition-all duration-300 hover:bg-[#5C6B2F] hover:text-white hover:cursor-pointer">Ver más</button>
        </article>

        <article className="bg-white rounded-2xl p-10 h-full border-2 border-[#F5F5F5] hover:border-[#E85D04] transition-all duration-300 hover:-translate-y-1">
          <div className="text-3xl mb-6"></div>
          <h3 className="verde-olivo font-bold text-2xl leading-snug mb-6">Mentoría de Movilidad Internacional</h3>
          <p className="text-gray-700 leading-relaxed mb-10">Programa intensivo para ampliar circulación nacional e internacional. Vinculación con festivales y redes de programación.</p>
          <button className="border-2 border-verde-olivo verde-olivo font-bold px-8 py-3 rounded-md
          transition-all duration-300 hover:bg-[#5C6B2F] hover:text-white hover:cursor-pointer">Ver más</button>
        </article>

        <article className="bg-white rounded-2xl p-10 h-full border-2 border-[#F5F5F5] hover:border-[#E85D04] transition-all duration-300 hover:-translate-y-1">
          <div className="text-3xl mb-6"></div>
          <h3 className="verde-olivo font-bold text-2xl leading-snug mb-6">Consultoría Institucional</h3>
          <p className="text-gray-700 leading-relaxed mb-10">Servicios especializados para instancias públicas que buscan profesionalizar procesos y optimizar su impacto cultural.</p>
          <button className="border-2 border-verde-olivo verde-olivo font-bold px-8 py-3 rounded-md
          transition-all duration-300 hover:bg-[#5C6B2F] hover:text-white hover:cursor-pointer">Ver más</button>
        </article>

        <article className="bg-white rounded-2xl p-10 h-full border-2 border-[#F5F5F5] hover:border-[#E85D04] transition-all duration-300 hover:-translate-y-1">
          <div className="text-3xl mb-6"></div>
          <h3 className="verde-olivo font-bold text-2xl leading-snug mb-6">Capacitación para Equipos</h3>
          <p className="text-gray-700 leading-relaxed mb-10">Programas de formación en gestión, producción y políticas culturales para equipos de instituciones culturales.</p>
          <button className="border-2 border-verde-olivo verde-olivo font-bold px-8 py-3 rounded-md
          transition-all duration-300 hover:bg-[#5C6B2F] hover:text-white hover:cursor-pointer">Ver más</button>
        </article>

      </div>
    </section>
    </section>
  )
}

export default NuestroServicios