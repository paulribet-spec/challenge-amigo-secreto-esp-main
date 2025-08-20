// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    //capturar nombre ingresado por el usuario
    let Nombre = document.getElementById('amigo').value;

    // Validar si el campo está vacío
    if (Nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la ejecución de la función si el campo está vacío
    }

    //almacenar el nombre en el arreglo
    amigos.push(Nombre);

    //limpiar input para que el usuario ingrese otro nombre
    document.getElementById('amigo').value = "";

    //Actualizar la lista de nombres en la pagina 
    actualizarListaAmigos();
}

//Funcion para actualizar la lista de nombres
function actualizarListaAmigos() {
    // Selecciona el elemento ul con el id "listaAmigos"
    const listaNombres = document.querySelector('#listaAmigos');

    // Limpia la lista existente
    listaNombres.innerHTML = "";

    // Recorre el arreglo de nombres y crea un elemento li para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        const nombre = amigos[i];
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        listaNombres.appendChild(nuevoElemento);
    }
}