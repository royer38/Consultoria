const Contacto = () => {
  return (
    <article>
        <section className="bg-verde-olivo text-white text-center py-24">
            <h1 className="text-5xl font-bold">Contáctanos</h1>
            <p className="text-[19.2px] mt-10">Platiquemos tu proyecto. Estamos aquí para ayudarte a alcanzar tus objetivos culturales.</p>
        </section>

      <div className="max-w-6xl mx-auto px-6">
        <article className="grid grid-cols-1 sm:grid-cols-2">
          <section className="flex flex-col gap-6">
            <h2 className="verde-olivo text-[32px] font-bold">Envíanos un Mensaje</h2>
            <form action="">
              <div>
                <label htmlFor="Nombre" className="verde-olivo font-bold">Nombre completo <span className="naranja">*</span></label>
                <input type="text" name="Nombre" id="Nombre" required/>
              </div>
              <div>
                <label htmlFor="Email" className="verde-olivo font-bold">Correo electrónico <span className="naranja">*</span></label>
                <input type="email" name="Email" id="Email" required/>
              </div>
              <div>
                <label htmlFor="Telefono" className="verde-olivo font-bold">Teléfono</label>
                <input type="text" name="Telefono" id="Telefono"/>
              </div>
              <div>
                <label htmlFor="Pais" className="verde-olivo font-bold">País / Región <span className="naranja">*</span></label>
                <select name="Pais" id="Pais" required>
                  <option value="Mexico">Mexico</option>
                  <option value="Chile">Chile</option>
                  <option value="Peru">Peru</option>
                </select>
              </div>
              <div>
                <label htmlFor="Consulta" className="verde-olivo font-bold">Tipo de consulta <span className="naranja">*</span></label>
                <select name="Consulta" id="Consulta" required>
                  <option value="">Selecciona una opción</option>
                  <option value="asesoria">Asesoría para artistas</option>
                  <option value="mentoria">Mentoría de movilidad</option>
                  <option value="consultoria">Consultoría institucional</option>
                  <option value="capacitacion">Capacitación</option>
                  <option value="s7ptimo">S7PTIMO</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label htmlFor="Mensaje" className="font-bold verde-olivo">Mensaje <span className="naranja">*</span></label>
                <textarea name="Mensaje" id="Mensaje" placeholder="Cuéntanos sobre tu proyecto o consulta..."></textarea>
              </div>
            </form>
          </section>

          <section className="flex flex-col gap-6">
            <h2 className="verde-olivo text-[32px] font-bold">Información de Contacto</h2>
          </section>
        </article>
      </div>

    </article>
  )
}

export default Contacto