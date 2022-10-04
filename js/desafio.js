class Consulta{
    constructor(nombreCompleto, eMail, haceTuConsulta) {
        this.nombreCompleto = nombreCompleto;
        this.eMail = eMail;
        this.haceTuConsulta = haceTuConsulta;
    }
}


let nombreUsuario;

document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e){
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;

    let listadodeConsultas = document.getElementById("listadodeConsultas");
    const consultas = JSON.parse(localStorage.getItem(nombreUsuario));

    if(consultas == null){
        listadodeConsultas.innerHTML = "<h1>No hay consultas para mostrar</h1>";
    }else {
        mostrarConsultas(consultas);
    }
    mostrarPanel();
}


function mostrarConsultas(consultas) {
    let listadodeConsultas = document.getElementById("listadodeConsultas");
    listadodeConsultas.innerHTML = "";
    
    consultas.forEach(consulta => {
    let li = document.createElement("li");
    li.innerHTML = 
    `<hr> ${consulta.nombreCompleto.toUpperCase()} - ${consulta.eMail} - ${consulta.haceTuConsulta}`;
    const botonBorrar = crearBotonEliminar(consulta);
    li.appendChild(botonBorrar);
    listadodeConsultas.appendChild(li);
});
}

function crearBotonEliminar(consulta){
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
        eliminarConsulta(consulta);
    })
    return botonBorrar;

}

function mostrarPanel() {
    const opcion = document.getElementById("opcion");

    opcion.innerHTML =
   `<h3>Bienvenido ${nombreUsuario}</h3>
    <form id="formulario-consulta">
    <input type="text" id="nombreCompleto" placeholder="Nombre Completo">
    <input type="text" id="eMail" placeholder="E-mail">
    <textarea  cols="65" rows="10" id="haceTuConsulta" placeholder="Hace Tu Consulta"></textarea>
    <button id="miBoton" type="submit">Agregar consulta</button>
    </form>`;
    document.getElementById("formulario-consulta").addEventListener("submit", agregarConsulta);


    const miBtn = document.querySelector("#miBoton");
    miBtn.addEventListener('click', () => {
        Swal.fire({
            title: "Consulta realizada con éxito!",
            text: "Le llegará nuestra respuesta a la brevedad",
            icon: "success",
            button: "Entendido",
        });
    })
}



function agregarConsulta(e){
    e.preventDefault();
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const eMail = document.getElementById("eMail").value;
    const haceTuConsulta = document.getElementById("haceTuConsulta").value;

    let consulta = new Consulta(nombreCompleto, eMail, haceTuConsulta);
    const consultasEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));

    if(consultasEnLocalStorage == null){
        localStorage.setItem(nombreUsuario, JSON.stringify([consulta]));
        mostrarConsultas([consulta]);
    }else{
        consultasEnLocalStorage.push(consulta);
        localStorage.setItem(nombreUsuario, JSON.stringify(consultasEnLocalStorage));
        mostrarConsultas(consultasEnLocalStorage);
    }
    e.target.reset();
}


function eliminarConsulta(consulta) {
    const consultasEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = consultasEnLocalStorage.filter(item => item.nombreCompleto != consulta.nombreCompleto);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarConsultas(nuevoArray);
}
