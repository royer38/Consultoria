import DanielMIranda from "../assets/DanielMiranda2.jpg";
import IlonaGoyeneche from "../assets/IlonaGoyeneche.jpg";
import SheilaFlores from "../assets/SheilaFlores.jpeg"
import useHandleNavigateTop from "../Hooks/useHandleNavigateTop";

const NuestroEquipo = () => {
    const handleNavigateTop = useHandleNavigateTop();
  return (
    <article>
        <section className="bg-verde-olivo text-center text-white py-24">
            <h1 className="font-bold text-5xl">Nuestro Equipo</h1>
            <p className="text-[19.2px] mt-10">Experiencia y visión internacional al servicio de las artes escénicas</p>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
            <p className="text-[19.2px] text-justify">Somos tres profesionales con más de 25 años de experiencia combinada en gestión cultural pública y privada, coproducción y curaduría internacional y producción escénica. Nuestra vinculación con la escena, trayectoria en instituciones de alto nivel y nuestra red de contactos en México, Europa y América Latina son el fundamento de 7 Consultoría Cultural.</p>

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="bg-verde-olivo rounded-2xl w-full h-105 flex items-center justify-center">
                    <img className="w-full h-full object-cover rounded-2xl" src={DanielMIranda} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Leonardo Daniel Miranda Cano</h3>
                <p className="naranja font-bold text-lg">Gestor Cultural y Consultor</p>

                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    25 años de experiencia en el sector cultural mexicano. Como Coordinador Nacional de Teatro del INBAL (2021-2024),
                    lideró políticas públicas para las artes escénicas a nivel nacional y representó a México ante el Consejo
                    Intergubernamental de IBERESCENA, el principal organismo de cooperación teatral iberoamericana.
                    </p>

                    <p>
                    Durante su gestión como Director de Desarrollo Cultural de la Secretaría de Cultura de Chihuahua (2018-2021),
                    implementó programas innovadores de formación de audiencias y profesionalización artística que fueron
                    reconocidos por la OEA y la Secretaría de Gobernación.
                    </p>

                    <p>
                    Su trabajo ha estado enfocado en la construcción de puentes entre artistas, instituciones y público, siempre
                    desde una perspectiva de desarrollo sostenible y profesionalización del sector cultural.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-8 mt-4">
                    <h3 className="verde-olivo font-bold text-[19.2px] mb-5">
                    Trayectoria destacada:
                    </h3>

                    <ul className="flex flex-col gap-4 text-gray-700 text-[15.5px]">
                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Ex Coordinador Nacional de Teatro del INBAL (2021-2024)</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Representante de México ante IBERESCENA</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Ex Director de Desarrollo Cultural, Chihuahua (2018-2021)</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Reconocimientos de OEA y Secretaría de Gobernación</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Especialista en políticas culturales y cooperación internacional</span>
                    </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 pt-3">
                    <div className="flex items-center gap-3">
                    <span className="naranja text-xl">✉️</span>
                    <a href={`mailto:mirandacanodaniel@gmail.com`} className="verde-olivo font-semibold hover:text-[#E85D04] transition duration-300 hover:cursor-pointer">mirandacanodaniel@gmail.com</a>
                    </div>
                </div>
                </div>
            </div>

            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="bg-verde-olivo rounded-2xl w-full h-105 flex items-center justify-center">
                    <img className="w-full h-full object-cover rounded-2xl" src={SheilaFlores} alt="DanielMiranda" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Sheila Flores Galaviz</h3>
                <p className="naranja font-bold text-lg">Productora Escénica</p>

                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    25 años de experiencia en producción teatral. Como Sub Coordinadora Nacional de Teatro del INBAL (2022-2024), gestionó la producción de decenas de montajes teatrales y supervisó procesos de producción a nivel nacional.
                    </p>

                    <p>
                    A lo largo de su carrera ha trabajado en más de 70 montajes teatrales producidos por instituciones como el Instituto Nacional de Bellas Artes y Literatura, el Fondo Nacional para la Cultura y las Artes, EFIARTES, la Compañía Nacional de Teatro y la Universidad Nacional Autónoma de México.
                    </p>

                    <p>
                    Su expertise abarca desde la gestión de recursos hasta la coordinación técnica y logística de producciones de gran formato, así como el desarrollo de modelos de sostenibilidad para proyectos escénicos independientes.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-8 mt-4">
                    <h3 className="verde-olivo font-bold text-[19.2px] mb-5">
                    Trayectoria destacada:
                    </h3>

                    <ul className="flex flex-col gap-4 text-gray-700 text-[15.5px]">
                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Ex Sub Coordinadora Nacional de Teatro del INBAL (2022-2024)</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Colaboraciones con INBAL, FONCA, EFIARTES, CNT, UNAM</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Especialista en producción de gran formato</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Experta en modelos de sostenibilidad para artes escénicas</span>
                    </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 pt-3">
                    <div className="flex items-center gap-3">
                    <span className="naranja text-xl">✉️</span>
                    <a href={`mailto:sheilatalking@gmail.com`} className="verde-olivo font-semibold hover:text-[#E85D04] transition duration-300 hover:cursor-pointer">sheilatalking@gmail.com</a>
                    </div>
                </div>
                </div>
            </div>

            <hr className="my-20 border-gray-100 border-2" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start mt-20">
                <div className="w-full">
                <div className="bg-verde-olivo rounded-2xl w-full h-105 flex items-center justify-center">
                    <img className="w-full h-full object-cover rounded-2xl" src={IlonaGoyeneche} alt="IlonaGoyeneche" draggable={false}/>
                </div>
                </div>

                <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-bold verde-olivo">Ilona Goyeneche</h3>
                <p className="naranja font-bold text-lg">Curadora Internacional</p>

                <div className="flex flex-col gap-5 text-gray-700 leading-relaxed text-[16.8px]">
                    <p>
                    Más de 20 años de experiencia en diseño de proyectos y curaduría de artes escénicas y movilidad internacional. Como Curadora del Festival de Teatro Iberoamericano ¡ADELANTE! en Heidelberg, Alemania, ha desarrollado una extensa red de contactos con compañías, programadores y festivales en Europa y América Latina.                    </p>
                    <p>
                    Desarrollando proyectos y formatos de intercambio, coproducciones, redes y espacios de transferencia de conocimiento le permitió consolidar una visión integral sobre las tendencias contemporáneas en artes vivas y las necesidades de circulación de propuestas escénicas.                    
                    </p>
                    <p>
                    Ilona aporta a 7 Consultoría Cultural una perspectiva única que combina conocimiento de la escena europea con expertise en la realidad latinoamericana, facilitando procesos de internacionalización para compañías mexicanas.
                    </p>
                </div>

                <div className="bg-gray-100 rounded-2xl p-8 mt-4">
                    <h3 className="verde-olivo font-bold text-[19.2px] mb-5">
                    Trayectoria destacada:
                    </h3>

                    <ul className="flex flex-col gap-4 text-gray-700 text-[15.5px]">
                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Curadora del Festival ¡ADELANTE!, Heidelberg, Alemania</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Producción y coordinación general de coproducciones entre Chile, México y Alemania</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Especialista en movilidad internacional de artes escénicas</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Red de contactos en Europa y América Latina</span>
                    </li>

                    <li className="flex gap-3">
                        <span className="naranja font-bold">›</span>
                        <span>Experta artes vivas latinoamericanas y la escena europea</span>
                    </li>
                    </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 pt-3">
                    <div className="flex items-center gap-3">
                    <span className="naranja text-xl">✉️</span>
                    <a href={`mailto:ilonagoyeneche@gmail.com`} className="verde-olivo font-semibold hover:text-[#E85D04] transition duration-300 hover:cursor-pointer">ilonagoyeneche@gmail.com</a>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <section className="text-center">
            <section className="bg-gray-100 py-20">
                <h2 className="text-[40px] verde-olivo font-bold">Nuestra Visión</h2>
                <article className="max-w-4xl mx-auto grid grid-cols-1 gap-10 text-justify mt-10 text-[18.4px]">
                <div>
                Creemos que la gestión cultural es, en sí misma, una forma de creación. No ocurre detrás del escenario ni frente a él, sino en el espacio donde todo se vuelve posible: el de construir estructuras, abrir caminos y contribuir a la profesionalización del oficio de crear.
                </div>
                <div>
                El número 7 ha sido históricamente asociado con la idea de equilibrio y totalidad: los siete días de la semana, las siete notas musicales, los siete colores del arcoíris. En <span className="naranja font-bold">7 Consultoría Cultural </span>trabajamos desde esa misma idea de completitud, acompañando a nuestros clientes con una mirada integral que abarca las múltiples dimensiones necesarias para fortalecer, profesionalizar y proyectar sus iniciativas.
                </div>
                <div>
                Nuestra experiencia combinada en gestión pública de alto nivel, curaduría internacional y producción ejecutiva nos permite entender el ecosistema cultural desde distintas escalas. A partir de esa perspectiva, desarrollamos estrategias, estructuras y procesos que ayudan a que los proyectos culturales no sólo existan, sino que crezcan, se sostengan y alcancen su máximo potencial dentro del panorama cultural mexicano y latinoamericano.                
                </div>
                </article>
            </section>
        </section>

        <section className="bg-verde-olivo text-center py-20">
            <p className="text-white font-bold text-[40px]">Cuéntanos sobre tu proyecto. Nos encantará explorar su potencial contigo.</p>
            <button onClick={() => handleNavigateTop("/Contacto")}  className="bg-naranja text-white font-bold text-[16.8px] mt-10 px-10 py-4 rounded bg-naranja-oscuro transition duration-300 hover:-translate-y-1 hover:cursor-pointer">Contáctanos</button>
        </section>

    </article>
  )
}

export default NuestroEquipo