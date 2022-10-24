class Consulta{
    constructor(nombreCompleto, eMail, haceTuConsulta) {
        this.nombreCompleto = nombreCompleto;
        this.eMail = eMail;
        this.haceTuConsulta = haceTuConsulta;
    }
}

let nombreUsuario;

const formularioUsuario = document.getElementById("formulario-usuario");

//Boton para eliminar consulta anterior
function crearBotonEliminar(consulta){
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
        eliminarConsulta(consulta);
    })
    return botonBorrar;
}

//Listado de consultas visible al poner el usuario
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

//Formulario para hacer consulta
function mostrarPanel() {
    const opcion = document.getElementById("opcion");

    opcion.innerHTML =
   `<h3>Bienvenido ${nombreUsuario}</h3>
    <form id="formulario-consulta">
    <input type="text" id="nombreCompleto" placeholder="Nombre Completo">
    <input type="text" id="eMail" placeholder="E-mail">
    <textarea  cols="65" rows="10" id="haceTuConsulta" placeholder="Hace Tu Consulta"></textarea>
    <br>
    <button id="miBoton" type="submit">Agregar consulta</button>
    </form>`;
    document.getElementById("formulario-consulta").addEventListener("submit", agregarConsulta);

 //Alerta de que se agrego la consulta correctamente
    const miBtn = document.querySelector("#miBoton");
    miBtn.addEventListener('click', () => {
        Swal.fire({
            icon: "success",
            title: "Consulta realizada con éxito!",
            text: "Le llegará nuestra respuesta a la brevedad",
            button: "ok",
        }); 
    })
   
}

//Lo que se muestra cuando no hay consultas
function manejadorFormularioUsuario(e){
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;

    let listadodeConsultas = document.getElementById("listadodeConsultas");
    const consultas = JSON.parse(localStorage.getItem(nombreUsuario));

    consultas == null ? listadodeConsultas.innerHTML = "<h1>No hay consultas para mostrar</h1>" : mostrarConsultas(consultas);
    mostrarPanel();

}

formularioUsuario.addEventListener("submit", manejadorFormularioUsuario);




//Cuando el usuario agrega una nueva consulta se guardo la anterior y agrego la actual
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
