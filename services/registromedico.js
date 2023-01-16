export async function registrarEspecialista(datosEspecialista){

    let datosEnvio=JSON.stringify(datosEspecialista)
    console.log(datosEnvio)

    const URI="https://apigestorapp.vercel.app/gestionapp/especialistas"

    const PETICION={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:datosEnvio
    }

    let respuesta=await fetch(URI,PETICION)
    let data=await respuesta.json()

    if(data.mensaje){
        
        Swal.fire(
            'ESPECIALISTA REGISTRADO',
            'Adelante!',
            'success'
        )

        window.location.reload()


    }



}