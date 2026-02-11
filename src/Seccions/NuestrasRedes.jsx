const NuestrasRedes = () => {
  return (
    <article className="bg-gray-100 py-20">
        <div className="text-center">
            <h2 className="verde-olivo text-[40px] font-bold">Nuestras Sedes</h2>
            <p className="text-[18.4px]">Con presencia en tres países de América Latina, ofrecemos servicios adaptados a las realidades culturales de cada región</p>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto place-items-center">
            {/* cards */}
            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="text-5xl text-center mb-6">🇲🇽</p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">México</p>
                    <p className="naranja font-bold text-center mb-4">Sede Principal</p>
                    <p className="text-center mb-4">Ciudad de México</p>
                    <p className="text-center mb-4">Especialización en consultoría institucional, asesoría para artistas y S7PTIMO</p>
                    <p className="naranja font-bold text-center">Contacto:</p>
                    <p className="text-center">Leonardo Daniel Miranda</p>
            </article>

            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="text-5xl text-center mb-6">🇵🇪</p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">Perú</p>
                    <p className="naranja font-bold text-center mb-4">Sede Lima</p>
                    <p className="text-center mb-4">Lima, Perú</p>
                    <p className="text-center mb-4">Mentoría de movilidad internacional y capacitación especializada</p>
                    <p className="naranja font-bold text-center">Contacto:</p>
                    <p className="text-center">Ilona Goyeneche</p>
            </article>

            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="text-5xl text-center mb-6">🇨🇱</p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">Chile</p>
                    <p className="naranja font-bold text-center mb-4">Sede Santiago</p>
                    <p className="text-center mb-4">Santiago, Chile</p>
                    <p className="text-center mb-4">Vinculación con circuitos internacionales y curaduría de proyectos</p>
                    <p className="naranja font-bold text-center">Contacto:</p>
                    <p className="text-center">Ilona Goyeneche</p>
            </article>

        </div>
    </article>
  )
}

export default NuestrasRedes