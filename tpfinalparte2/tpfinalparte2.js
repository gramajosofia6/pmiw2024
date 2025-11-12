
// VARIABLES GLOBALES
let juego; // Objeto de la clase Juego (el cerebro)

// Fondos y Arreglos de Imágenes (usados por las clases)
let fondos = {};      // Objeto para fondos estáticos
let iconosItem = [];  // Arreglo para los 8 objetos
let btnComenzar, btnSiguiente, btnComenzarJuego, btnReiniciar, btnCreditos, btnVolver;
// let sonidoAcierto, sonidoFondo; // (Para uso futuro si implementas sonidos)


function preload() {
    
    fondos.portada = loadImage('data/portada.jpg');
    fondos.introduccion = loadImage('data/introduccion.png');
    fondos.instrucciones = loadImage('data/instrucciones.png');
    fondos.ganar = loadImage('data/imagenganar.png');
    fondos.perder = loadImage('data/imagenperder.png');
    fondos.creditos = loadImage('data/creditos.png');
    fondos.juego = loadImage('data/fondo_juego.png'); 

    // Carga de los 8 Íconos 
    for (let i = 0; i < 8; i++) {
        iconosItem[i] = loadImage(`data/objeto${i}.png`);  
    }
    
    // (Carga de sonidos aquí: loadSound())
}

function setup() {
    createCanvas(640, 480);
    
    juego = new Juego(8); // indica que debe buscar 8 objetos
    
    imageMode(CORNER); 
    
    // Instancia de TODOS los Botones (Clase Boton)
    let btnAncho = 200;
    let btnAlto = 50;
    let btnX = width / 2 - btnAncho / 2;
    let btnY = height - 150;
    
    // Botones de flujo principal
    btnComenzar = new Boton("comenzar", btnX, btnY, btnAncho, btnAlto);
    btnSiguiente = new Boton("siguiente", btnX, btnY, btnAncho, btnAlto);
    btnComenzarJuego = new Boton("¡a jugar!", btnX, btnY, btnAncho, btnAlto);

    // Botones para las pantallas de Ganar/Perder 
    btnReiniciar = new Boton("Reiniciar", width / 2 - 150, height / 2 + 50, 100, 40); // Izquierda
    btnCreditos = new Boton("Creditos", width / 2 + 50, height / 2 + 50, 100, 40); // Derecha
    btnVolver = new Boton("volver", btnX, btnY, 200, 50);
}

function draw() {
    juego.dibujarPantallas(); 
}

function mouseClicked() {
    // El SWITCH controla el flujo de las transiciones al hacer clic
    switch (juego.estado) {
        
        case "PORTADA":
            if (btnComenzar.fuePresionado(mouseX, mouseY)) {
                juego.estado = "INTRODUCCION"; 
            }
            break;
            
        case "INTRODUCCION":
            if (btnSiguiente.fuePresionado(mouseX, mouseY)) {
                juego.estado = "INSTRUCCIONES"; 
            }
            break;
            
        case "INSTRUCCIONES":
            if (btnComenzarJuego.fuePresionado(mouseX, mouseY)) {
                juego.iniciar(); // <--- Inicia el juego (cambia a estado: JUGANDO)
            }
            break;
            
        case "JUGANDO":
            // Delega la verificación de clic al arreglo de objetos
            juego.revisarClick(mouseX, mouseY);
            break;
            
        case "GANAR":
        case "PERDER":
            // Manejo de los dos botones en la pantalla final
            if (btnReiniciar.fuePresionado(mouseX, mouseY)) {
                juego.estado = "PORTADA"; // Vuelve a empezar
            }
            if (btnCreditos.fuePresionado(mouseX, mouseY)) {
                juego.estado = "CREDITOS"; 
            }
            break;
            
        case "CREDITOS":
            if (btnVolver.fuePresionado(mouseX, mouseY)) {
                juego.estado = "PORTADA"; // Vuelve a la portada
            }
            break;
    }
}

function keyPressed() {
    // Control para reiniciar con tecla 'R' 
    if ((juego.estado === "GANAR" || juego.estado === "PERDER") && key.toLowerCase() === 'r') {
        juego.estado = "PORTADA"; 
    }
