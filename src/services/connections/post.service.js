export async function enviar(data, endpoints){
    const respuesta = await fetch(`http://localhost:3000/${endpoints}`, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(data)});

    const resultado = await respuesta.json();
    return resultado
}
