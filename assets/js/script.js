let parte1 = document.getElementById('range-1');
let parte2 = document.getElementById('range-2');
let parte3 = document.getElementById('range-3');
let espacioPersonaje1 = document.getElementById('character-display1');
let espacioPersonaje2 = document.getElementById('character-display2');
let espacioPersonaje3 = document.getElementById('character-display3');

class Personajes {
    constructor(nombre,altura,peso) {

        this.nombre = nombre;
        this.altura= altura;
        this.peso= peso;
    }

    static async crear(i) {
        let response = await fetch(`https://swapi.dev/api/people/${i}/`);
        let personaje = await response.json();

        return new Personajes(personaje.name, personaje.height, personaje.mass);
    }
}


async function fetchPersonajes(inicio, fin) {
    var espacioPersonaje;
    if(fin <=6){
    espacioPersonaje = espacioPersonaje1;
    } else{
        if(fin <=12){
            espacioPersonaje = espacioPersonaje2;
        }
        else{
            espacioPersonaje = espacioPersonaje3;
        }
    }


    espacioPersonaje.innerHTML = ''; 
    for (let i = inicio; i < fin; i++) {

        let PersonajeNuevo = await Personajes.crear(i);

        let cartaPersonaje = document.createElement('div');

        cartaPersonaje.classList.add('character-card');

        cartaPersonaje.innerHTML = `
            <h3>${PersonajeNuevo.nombre}</h3>
            <p>Altura: ${PersonajeNuevo.altura} cm</p>
            <p>Peso: ${PersonajeNuevo.peso} kg</p>
        `;
        espacioPersonaje.appendChild(cartaPersonaje);
    }
}

parte1.addEventListener('mouseover', function() {
    fetchPersonajes(1, 6);
});
parte2.addEventListener('mouseover', function() {
    fetchPersonajes(6, 12);
});
parte3.addEventListener('mouseover', function() {
    fetchPersonajes(12, 17);
});

//Para saltarme el 17 (está dañado) y poner el 18
parte3.addEventListener('mouseover', function() {
    fetchPersonajes(18, 19);
});
