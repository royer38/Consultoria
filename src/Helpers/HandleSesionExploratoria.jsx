const HandleSesionExploratoria = () => {
 const phoneNumber = "+526561012488";
 const message = "Hola 👋 Los contacto desde su página web porque estoy interesado(a) en una sesión exploratoria gratuita. Me gustaría conversar sobre mi situación actual y explorar cómo su consultoría podría ayudarme. ¿Cuál sería el siguiente paso para agendar?";
 const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
 window.open(url, "_blank");
};
export default HandleSesionExploratoria;