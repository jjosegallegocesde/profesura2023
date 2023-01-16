export async function consultarEspecialistas(){

    const URI="https://apigestorapp.vercel.app/gestionapp/especialistas"

    const PETICION={
        method:"GET",
    }

    let respuesta=await fetch(URI,PETICION)
    let data=await respuesta.json()

   return(data)



}