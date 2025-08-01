//VARIABLES
let amigos = [];

//FUNCIONES
function agregarAmigo(){
    const amigoIngresado = document.getElementById('amigo');
    const nombreAmigo = amigoIngresado.value.trim();

    if (nombreAmigo === ''){
        alert('Por favor, inserte un nombre');
        return;
    } else {
        amigos.push(nombreAmigo);
        amigoIngresado.value = '';
        mostrarListaAmigos();
    }
}


function mostrarListaAmigos(){
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach(function(amigo){
        const listaItem = document.createElement('li');
        listaItem.textContent = amigo;
        listaAmigos.appendChild(listaItem);
    });
}

function sortearAmigo(){
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0){
        alert('No hay amigos en la lista');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}
