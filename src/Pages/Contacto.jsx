import NuestrasRedes from "../Seccions/NuestrasRedes"

const Contacto = () => {
  const LinkedIn_Link = "https://www.linkedin.com/company/7-consultor%C3%ADa-cultural/posts?lipi=urn%3Ali%3Apa[…]_page_posts_published%3B11579e87-81c2-463b-b732-fb2e147fa7a3";
  const Instagram_Link = "https://www.instagram.com/7consultoriacultural?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const paises = [
"Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda",
"Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria",
"Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice",
"Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina",
"Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi",
"Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar",
"Chad","Chile","China","Chipre","Colombia","Comoras","Corea del Norte",
"Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba",
"Dinamarca","Dominica","Ecuador","Egipto","El Salvador",
"Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España",
"Estados Unidos","Estonia","Esuatini","Etiopía","Filipinas","Finlandia",
"Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada",
"Grecia","Guatemala","Guyana","Guinea","Guinea-Bisáu","Guinea Ecuatorial",
"Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda",
"Islandia","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán",
"Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia",
"Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo",
"Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos",
"Islas Marshall","Mauricio","Mauritania","México","Micronesia",
"Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia",
"Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda",
"Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea",
"Paraguay","Perú","Polonia","Portugal","Reino Unido",
"República Centroafricana","República Checa",
"República Democrática del Congo","República del Congo",
"República Dominicana","Ruanda","Rumanía","Rusia",
"San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas",
"Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles",
"Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Sudáfrica",
"Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia",
"Tanzania","Tayikistán","Timor Oriental","Togo","Tonga",
"Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu",
"Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu",
"Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
];

  return (
    <article>
        <section className="bg-verde-olivo text-white text-center py-24">
            <h1 className="text-5xl font-bold">Contáctanos</h1>
            <p className="text-[19.2px] mt-10">Estamos aquí para ayudarte. Platiquemos sobre tu proyecto</p>
        </section>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <article className="grid grid-cols-1 sm:grid-cols-2 gap-18">
          <section className="flex flex-col gap-6">
            <h2 className="verde-olivo text-[32px] font-bold">Envíanos un Mensaje</h2>
            <form action="" className="">
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Nombre" className="verde-olivo font-bold">Nombre completo <span className="naranja">*</span></label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="text" name="Nombre" id="Nombre" required/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Correo" className="verde-olivo font-bold">Correo electrónico <span className="naranja">*</span></label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="email" name="Correo" id="Correo" required/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Telefono" className="verde-olivo font-bold">Teléfono</label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="text" name="Telefono" id="Telefono"/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Pais" className="verde-olivo font-bold">País / Región <span className="naranja">*</span></label>
                <select className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Pais" id="Pais" required>
                  <option value="">Selecciona una opción</option>
                  {paises.map((pais) => (
                    <option key={pais} value={pais}>
                      {pais}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Consulta" className="verde-olivo font-bold">Tipo de consulta <span className="naranja">*</span></label>
                <select className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Consulta" id="Consulta" required>
                  <option value="">Selecciona una opción</option>
                  <option value="asesoria">Asesoría para artistas</option>
                  <option value="mentoria">Mentoría de movilidad</option>
                  <option value="consultoria">Consultoría institucional</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="s7ptimo">S7PTIMO</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Mensaje" className="font-bold verde-olivo">Mensaje <span className="naranja">*</span></label>
                <textarea className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Mensaje" id="Mensaje" placeholder="Cuéntanos sobre tu proyecto o consulta..." rows={5} required></textarea>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <input type="checkbox" name="Comunicaciones" id="Comunicaciones" required/>
                <label htmlFor="Comunicaciones" className="text-gray-600">Acepto recibir comunicaciones de 7 Consultoría Cultural <span className="naranja">*</span></label>
              </div>
              <div className="mt-5">
                <button className="bg-naranja py-4 px-11 hover:cursor-pointer rounded text-white font-bold bg-naranja-oscuro hover:-translate-y-1 transition duration-300">Enviar solicitud</button>
              </div>
            </form>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="verde-olivo text-[32px] font-bold">Información de Contacto</h2>
            <div className="grid grid-cols-1 gap-8">
                
                {/* Card 1 */}
                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">México - Sede Principal</h3>
                <h4 className="naranja text-[17.6px] font-bold">Leonardo Daniel Miranda Cano</h4>
                <p className="text-gray-700 leading-relaxed hover:text-[#E85D04] transition duration-300">✉️ mirandacanodaniel@gmail.com</p>
                </article>

                {/* Card 2 */}
                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">Perú y Chile</h3>
                <h4 className="naranja text-[17.6px] font-bold">Ilona Goyeneche</h4>
                <p>Coordinación Internacional</p>
                <p className="text-gray-700 leading-relaxed hover:text-[#E85D04] transition duration-300">✉️ ilonagoyeneche@gmail.com</p>
                </article>

                {/* Card 3 */}
                <article className="bg-gray-50 rounded-2xl shadow-sm p-10 relative h-full overflow-hidden">
                <span className="absolute left-0 top-0 h-full w-1 bg-naranja rounded-l-2xl" />
                <h3 className="text-[22.4px] font-bold verde-olivo mb-6">Producción Escénica</h3>
                <h4 className="naranja text-[17.6px] font-bold">Sheila Flores Galaviz</h4>
                <p className="text-gray-700 leading-relaxed hover:text-[#E85D04] transition duration-300">✉️ sheilatalking@gmail.com</p>
                </article>

                <div className="text-white font-bold grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-start max-w-md">
                  <a className="bg-verde-olivo px-6 py-3 rounded hover:bg-[#7A8B4A] transition duration-300" href={LinkedIn_Link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="bg-verde-olivo px-6 py-3 rounded hover:bg-[#7A8B4A] transition duration-300" href={Instagram_Link} target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            </div>
          </section>
        </article>
      </div>

      <NuestrasRedes/>

    </article>
  )
}

export default Contacto