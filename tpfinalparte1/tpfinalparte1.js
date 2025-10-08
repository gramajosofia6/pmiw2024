//Sofia Gramajo 119051/4
// Lourdes Godoy 
//
 
let estadoActual = 0; //  para empezar en la Portada (pantalla 0)
let pantalla = []; //arreglo para las pantallas
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los textos
let botonComenzar; 
let botonCreditos;
let botonSiguiente;


function preload() {
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  //para los botones de la portada
  let w = 200; 
  let h = 50;  
  let x = width / 2 - w / 2;
  
  botonComenzar = { x: x, y: height * 0.7, w: w, h: h, texto: "COMENZAR", destino: 1 };
  botonCreditos = { x: x, y: height * 0.85, w: w, h: h, texto: "CRÉDITOS", destino: 20 };
  
  //para el boton siguiente 
  let wS = 140;
  let hS = 40; 
  let xS= width - wS -20 ; 
  let yS = height - hS - 20;
  
  botonSiguiente = {  //para encontrar los lugares del boton 
    x: xS,
    y: yS,
    w: wS,
    h: hS,
    texto: "Siguiente " 
  };
  
  
  
}


function draw() {
  background(0);
  dibujarP(estadoActual); 
  
}

function mousePressed() {
    // 1. Lógica de la PORTADA (Estado 0)
    if (estadoActual === 0) {
        if (mouseEnBoton(botonComenzar)) {
            estadoActual = botonComenzar.destino; // estadoActual = 1
        }
        else if (mouseEnBoton(botonCreditos)) {
            estadoActual = botonCreditos.destino; // estadoActual = 100
        }
    }
    
    // 2. Lógica de CRÉDITOS (Estado 100)
    else if (estadoActual === 100) {
        estadoActual = 0;
    }
    
    // 3. Lógica de la AVENTURA (Pantallas 1 a 20)
    else if (estadoActual >= 1 && estadoActual <= 20) {
        
        // --- A. Lógica para PANTALLAS DE DECISIÓN (Estado 5) ---
        if (estadoActual === 4) {
            
            // 1. Definir la geometría de los botones de decisión (DEBE COINCIDIR CON EL DIBUJO)
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen; // Posición vertical
            
            // Botón 1 (Izquierda) - Destino 6
            let x1 = margen; 
            let botonIzquierda = { x: x1, y: y, w: w, h: h };
            
            // Botón 2 (Derecha) - Destino 8
            let x2 = width - w - margen; 
            let botonDerecha = { x: x2, y: y, w: w, h: h };
            
            if (mouseEnBoton(botonIzquierda)) {
                estadoActual = 5; // IZQUIERDA lleva a la Pantalla 6
                return; 
            } else if (mouseEnBoton(botonDerecha)) {
                estadoActual = 7; // DERECHA lleva a la Pantalla 8
                return; 
            }
        } 
        
        //  Lógica para PANTALLAS NARRATIVAS (Botón Siguiente) ---
        // Este código solo se ejecuta si NO se hizo clic en un botón de decisión.
        else if (mouseEnBoton(botonSiguiente)) {
            estadoActual = estadoActual + 1;
            
            // Límite: Evitar que el estado pase de 20
            if (estadoActual > 20) estadoActual = 19;
        }
    }
}


