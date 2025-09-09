// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigos = [];

function agregarAmigo() {
    // 1. Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById('amigo');
    let nombre = inputAmigo.value;

    // 2. Validar la entrada 
    if (nombre.trim() === '') {
        alert("Por favor, inserte un nombre.");
        return; // Detener ejecución
    }

    // 3. Actualizar el array de amigos
    amigos.push(nombre.trim());
    console.log(amigos);

    // 4. Limpiar el campo de entrada
    inputAmigo.value = '';

    // 5. Actualizar la lista visual de amigos
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // 1. Obtener el elemento de la lista
    const listaAmigos = document.getElementById('listaAmigos');

    // 2. Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // 3. Si no hay amigos, mostrar mensaje
    if (amigos.length === 0) {
        listaAmigos.innerHTML = '<li class="empty-message">No hay amigos agregados todavía</li>';
        return;
    }

    // 4. Iterar sobre el arreglo y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear nuevo elemento de lista
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.justifyContent = 'space-between';
        li.style.alignItems = 'center';

        // Crear contenedor para el nombre
        const nombreContainer = document.createElement('div');
        nombreContainer.textContent = amigos[i];

        // Crear botón para eliminar con más separación
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.style.marginLeft = '15px';
        deleteBtn.style.padding = '5px 10px';
        deleteBtn.style.fontSize = '12px';
        deleteBtn.style.backgroundColor = '#ff6b6b';
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.borderRadius = '4px';
        deleteBtn.style.cursor = 'pointer';
        deleteBtn.onclick = function () {
            eliminarAmigo(i);
        };

        // Agregar elementos al li
        li.appendChild(nombreContainer);
        li.appendChild(deleteBtn);

        // Agregar elemento a la lista
        listaAmigos.appendChild(li);
    }
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultadoElement = document.getElementById('resultado');

    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        resultadoElement.innerHTML = '<li class="empty-message">No hay amigos registrados. Agrega al menos un nombre.</li>';
        return;
    }

    // 2. Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre del amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado
    resultadoElement.innerHTML = `
        <li class="winner">
            ¡El amigo secreto es: ${amigoSorteado}!
        </li>
    `;
}

// Inicializar la lista al cargar la página
document.addEventListener('DOMContentLoaded', actualizarListaAmigos);