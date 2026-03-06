import { useState } from "react";
import NuestrasRedes from "../Seccions/NuestrasRedes"

const Contacto = () => {
  const LinkedIn_Link = "https://www.linkedin.com/company/7-consultor%C3%ADa-cultural/posts?lipi=urn%3Ali%3Apa[…]_page_posts_published%3B11579e87-81c2-463b-b732-fb2e147fa7a3";
  const Instagram_Link = "https://www.instagram.com/7consultoriacultural?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const paises = [
"Antigua y Barbuda",
"Argentina",
"Bahamas",
"Barbados",
"Belice",
"Bolivia",
"Brasil",
"Canadá",
"Chile",
"Colombia",
"Costa Rica",
"Cuba",
"Dominica",
"Ecuador",
"El Salvador",
"Estados Unidos",
"Granada",
"Guatemala",
"Guyana",
"Haití",
"Honduras",
"Jamaica",
"México",
"Nicaragua",
"Panamá",
"Paraguay",
"Perú",
"República Dominicana",
"San Cristóbal y Nieves",
"San Vicente y las Granadinas",
"Santa Lucía",
"Surinam",
"Trinidad y Tobago",
"Uruguay",
"Venezuela"
];

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [pais, setPais] = useState("");
  const [consulta, setConsulta] = useState("");
  const [otroTipoConsulta, setOtroTipoConsulta] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [comunicacion, setComunicacion] = useState("");
  const tipoConsultaFinal = consulta === "otro" ? otroTipoConsulta : consulta;
  const formularioCompleto =
    nombre.trim() !== "" &&
    email.trim() !== "" &&
    pais.trim() !== "" &&
    tipoConsultaFinal.trim() !== "" &&
    mensaje.trim() !== "" &&
    comunicacion

    const enviarCorreo = (e) => {
    e.preventDefault();
    const tipoConsultaFinal = consulta === "otro" ? otroTipoConsulta : consulta;
    if (!nombre || !email || !pais || !consulta || !mensaje || !comunicacion){
      alert("Por favor completa todos los campos obligatorios.")
      return
    }

    const subject = `Nueva consulta desde el sitio web - ${tipoConsultaFinal}`
    const body = `Estimado equipo de 7 Consultoría Cultural,

      Mi nombre es ${nombre} y me pongo en contacto con ustedes a través de su sitio web para solicitar información sobre sus servicios.

      Tipo de consulta: ${tipoConsultaFinal}

      Mensaje:
      ${mensaje}

      Datos de contacto:
      Nombre: ${nombre}
      Correo electrónico: ${email}
      Teléfono: ${numero || "No proporcionado"}
      País / Región: ${pais}

      ${comunicacion ? "He aceptado recibir comunicaciones por parte de 7 Consultoría Cultural." : ""}

      Quedo atento(a) a su respuesta.

      Saludos cordiales,

      ${nombre}
      `
   const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=7consultoriacultural@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
   window.open(gmailLink, "_blank")
  }

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
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="text" name="Nombre" id="Nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)}/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Correo" className="verde-olivo font-bold">Correo electrónico <span className="naranja">*</span></label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="email" name="Correo" id="Correo" required value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Telefono" className="verde-olivo font-bold">Teléfono</label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="text" name="Telefono" id="Telefono" value={numero} onChange={(e) => setNumero(e.target.value)}/>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Pais" className="verde-olivo font-bold">País / Región <span className="naranja">*</span></label>
                <select className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Pais" id="Pais" required value={pais} onChange={(e) => setPais(e.target.value)}>
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
                <select className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Consulta" id="Consulta" required value={consulta} onChange={(e) => setConsulta(e.target.value)}>
                  <option value="">Selecciona una opción</option>
                  <option value="Asesoría para artistas">Asesoría para artistas</option>
                  <option value="Mentoría de movilidad">Mentoría de movilidad</option>
                  <option value="Consultoría institucional">Consultoría institucional</option>
                  <option value="Capacitación">Capacitación</option>
                  <option value="S7PTIMO">S7PTIMO</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              {consulta === "otro" && (
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Tipo_Consulta" className="font-bold verde-olivo">Ingrese su tipo de consulta <span className="naranja">*</span></label>
                <input className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" type="text" name="Tipo_Consulta" id="Tipo_Consulta" required value={otroTipoConsulta} onChange={(e) => setOtroTipoConsulta(e.target.value)}/>
              </div>)}
              <div className="grid grid-cols-1 gap-3">
                <label htmlFor="Mensaje" className="font-bold verde-olivo">Mensaje <span className="naranja">*</span></label>
                <textarea className="border-2 border-gray-200 p-3.5 rounded focus:border-[#E85D04] focus:ring-2 focus:ring-[#E85D04]/0 focus:outline-none transition" name="Mensaje" id="Mensaje" placeholder="Cuéntanos sobre tu proyecto o consulta..." rows={5} required value={mensaje} onChange={(e) => setMensaje(e.target.value)}></textarea>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <input type="checkbox" name="Comunicaciones" id="Comunicaciones" required checked={comunicacion} onChange={(e) => setComunicacion(e.target.checked)}/>
                <label htmlFor="Comunicaciones" className="text-gray-600">Acepto recibir comunicaciones de 7 Consultoría Cultural <span className="naranja">*</span></label>
              </div>
              <div className="mt-5">
                <button onClick={enviarCorreo} disabled={!formularioCompleto} className={`px-10 py-4 rounded-lg font-bold text-white transition
                  ${formularioCompleto ? "bg-[#E85D04] hover:bg-[#c94e03] hover:-translate-y-1 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"}`}>Enviar solicitud</button>
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