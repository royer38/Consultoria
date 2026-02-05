const Hero = () => {
  return (
    <article className="bg-verde-olivo py-20">
      <section className="text-white text-center flex flex-col gap-9">
        <h1 className="font-bold text-[56px]">7 Consultoría Cultural</h1>
        <p className="text-2xl">donde la gestión se vuelve arte</p>
        <p className="text-[1.15rem]">Plataforma de profesionalización especializada en artes escénicas y gestión cultural</p>
        <p className="text-base">Ciudad de México • Lima • Santiago</p>
        <button className="bg-naranja py-4 px-10 font-bold w-fit mx-auto rounded
        transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#D45103] hover:cursor-pointer">Solicita una consulta</button>
      </section>
    </article>
  )
}

export default Hero