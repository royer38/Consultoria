import { useEffect, useState } from "react";

const CloudModal = ({ data, onClose }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
  if (data) {
    setTimeout(() => setOpen(true), 80);
  }
}, [data]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()} className="relative flex items-center justify-center w-full max-w-3xl px-6">

        <div className={`relative transition-all duration-500 ease-out ${open ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>

          <div className="absolute w-72 h-72 bg-white rounded-full -top-10 left-10 blur-[2px]" />
          <div className="absolute w-60 h-60 bg-white rounded-full top-10 -left-10" />
          <div className="absolute w-80 h-80 bg-white rounded-full top-16 right-0" />
          <div className="absolute w-56 h-56 bg-white rounded-full -bottom-10 left-32" />
          <div className="absolute w-64 h-64 bg-white rounded-full bottom-0 right-20" />

          <div className={`relative z-10 bg-white/90 backdrop-blur-xl rounded-[40px] shadow-2xl p-8 flex flex-col gap-6 transition-all duration-700
            ${open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            animate-float
            max-h-[80vh] overflow-y-auto`}>

            <img src={data.image} alt={data.title} className="w-full h-64 object-contain rounded-2xl"/>

            <h2 className="text-3xl font-bold verde-olivo text-center">
              {data.title}
            </h2>

            <p className="text-gray-700 text-[16px] leading-relaxed text-center">
              {data.sinopsis}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-bold verde-olivo uppercase">Horas</p>
                <p className="text-sm text-gray-700">🕒 {data.horario}</p>
              </div>

              <div>
                <p className="font-bold verde-olivo uppercase">Fechas</p>
                <p className="text-sm text-gray-700">📅 {data.fechas}</p>
              </div>

              <div>
                <p className="font-bold verde-olivo uppercase">Duración</p>
                <p className="text-sm text-gray-700">⏱ {data.duracion}</p>
              </div>

              <div>
                <p className="font-bold verde-olivo uppercase">Público:</p>
                <p className="text-sm text-gray-700">👥 {data.publico}</p>
              </div>

              <div>
                <p className="font-bold verde-olivo uppercase">Género:</p>
                <p className="text-sm text-gray-700">🎭 {data.genero}</p>
              </div>
            </div>

            <button onClick={onClose} className="mt-4 bg-naranja text-white font-bold py-3 rounded-xl 
            hover:cursor-pointer hover:text-[#5C6B2F] transition duration-300">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CloudModal;