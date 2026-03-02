import { Link } from "react-router-dom"

const CTA_Final = () => {
  return (
    <section className="bg-verde-olivo mx-auto py-10">
        <p className="font-bold text-white text-[40px] text-center py-8">¿Listo para conversar sobre tu proyecto?</p>
        <div className="flex gap-6 justify-center items-center m-2">
            <Link to="/Contacto" className="bg-naranja text-white text-[16.8px] px-10 rounded p-4 font-bold transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer">Agenda una sesión diagnóstica gratuita</Link>
        </div>
    </section>
  )
}

export default CTA_Final