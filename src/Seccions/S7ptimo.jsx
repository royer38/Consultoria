import Logo from "../assets/S7ptimoNaranja.png"

const S7ptimo = () => {
  return (
    <section className="bg-black py-16 relative overflow-hidden font-garamond">
        <span className="absolute top-1/2 right-0 -translate-y-1/2 text-[18rem] font-bold terracota-oscuro">7</span>
        <div className="max-w-6xl mx-auto flex flex-col gap-7 relative z-10">
        <div className="flex justify-start">
          <img src={Logo} alt="S7PTIMO_Logo" className="w-56 md:w-64 object-contain drop-shadow-lg"/>
        </div>
        <p className="hueso text-[18px]">Programación Escénica Contemporánea en S7ptimo, Foro Coyoacán</p>
        <p className="hueso text-[18px]">Un espacio para las artes escénicas en Coyoacán en la Ciudad de México. Descubre nuestra cartelera</p>
        <button className="hueso bg-terracota p-3 font-bold w-fit rounded bg-terracota-oscuro-hover transition duration-300 hover:cursor-pointer">Ver programación y boletos</button>
        </div>
    </section>
  )
}

export default S7ptimo