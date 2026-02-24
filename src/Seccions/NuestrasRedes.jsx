import BanderaChile from "../assets/Flags/BanderaChile"
import BanderaMexico from "../assets/Flags/BanderaMexico"
import BanderaPeru from "../assets/Flags/BanderaPeru"
const NuestrasRedes = () => {
  return (
    <article className="bg-gray-100 py-20">
        <div className="text-center">
            <h2 className="verde-olivo text-[40px] font-bold">Presencia</h2>
            <p className="text-[18.4px]">Con presencia en tres países de América Latina, ofrecemos servicios adaptados a las realidades culturales de cada región</p>
        </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto place-items-center">
            {/* cards */}
            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden min-w-72">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="flex justify-center text-5xl mb-6"><BanderaMexico/></p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">México</p>
                    <p className="naranja font-bold text-center mb-4">Sede Principal</p>
                    <p className="text-center mb-4">Ciudad de México</p>
            </article>

            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden min-w-72">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="flex justify-center text-5xl mb-6"><BanderaPeru/></p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">Perú</p>
                    <p className="naranja font-bold text-center mb-4">Sede Lima</p>
                    <p className="text-center mb-4">Lima, Perú</p>
            </article>

            <article className="bg-white rounded-2xl shadow-sm p-10 relative h-full overflow-hidden min-w-72">
                <span className="absolute top-0 left-0 w-full h-1 bg-naranja"></span>
                    <p className="flex justify-center text-5xl mb-6"><BanderaChile/></p>
                    <p className="verde-olivo font-bold text-xl text-center mb-4">Chile</p>
                    <p className="naranja font-bold text-center mb-4">Sede Santiago</p>
                    <p className="text-center mb-4">Santiago, Chile</p>
            </article>

        </div>
    </article>
  )
}

export default NuestrasRedes