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
}