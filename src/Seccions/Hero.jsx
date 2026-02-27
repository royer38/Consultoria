const Hero = () => {
  return (
    <article className="bg-verde-olivo py-20">
      <section className=" text-center flex flex-col gap-9">
        <h1 className="font-bold text-[56px] text-white">7 Consultoría Cultural</h1>
        <p className="text-2xl naranja font-bold">Hacemos de la Gestión un Arte</p>
        <p className="text-[1.15rem] text-white">Plataforma de profesionalización especializada en Artes Escénicas, Vinculación Internacional, Producción y Gestión Cultural</p>
        <p className="text-base text-white">Ciudad de México • Lima • Santiago</p>
        <button className="bg-naranja py-4 px-10 font-bold w-fit mx-auto rounded text-white
        transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#D45103] hover:cursor-pointer">Solicita una consulta</button>
      </section>
    </article>
  )
}

export default Hero