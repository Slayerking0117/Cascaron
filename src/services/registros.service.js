import { enviar } from "./connections/post.service";

export function registros(){
    const  datoRegistro = document.getElementById("registros")
     datoRegistro.addEventListener("submit", (evento) => {
        evento.preventDefault()
        const datosTemporales = new FormData(datoRegistro);
        const datosFinales = Object.fromEntries(datosTemporales)
        enviar(datosFinales, "usuario")
     } )
}