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
    
    // Validar si el nombre ya está en la lista
    if (amigos.includes(Nombre)) {
        alert("Ese nombre ya fue agregado.");
        document.getElementById('amigo').value = "";
        return;
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
// Función para sortear un amigo
function sortearAmigo() {

    // Validar si hay al menos un nombre en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía, por favor agrega al menos un nombre.");
        return;
    }
     // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.querySelector('#resultado');

    // limpiar resultados anteriores
    resultado.innerHTML = ""; 
    const elementoResultado = document.createElement('li');
    elementoResultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(elementoResultado);
}