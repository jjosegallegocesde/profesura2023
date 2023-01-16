import { consultarEspecialistas } from "../../services/consultaEspecialistas.js"

let fila=document.getElementById("fila")



consultarEspecialistas().then(function(especialistas){
    especialistas.datos.forEach(function(especialista){

        console.log(especialista)

        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        let nombre=document.createElement("h1")
        nombre.classList.add("text-center")
        nombre.textContent=especialista.nombres

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100")
        foto.src=especialista.fotografia

        tarjeta.appendChild(foto)
        tarjeta.appendChild(nombre)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
})


