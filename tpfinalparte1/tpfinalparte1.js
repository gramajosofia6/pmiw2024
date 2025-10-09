//Sofia Gramajo 119051/4
// Lourdes Godoy 
//
 
let estadoActual = 0; //  para empezar en la Portada (pantalla 0)
let pantalla = []; //arreglo para las pantallas
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los textos


function preload() {
  for (let i = 0; i < 18; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
   let w = 200; 
  let h = 50;  
  let x = width / 2 - w / 2;
  
  botonComenzar = { x: x, y: height * 0.7, w: w, h: h, texto: "COMENZAR", destino: 1 };
  botonCreditos = { x: x, y: height * 0.85, w: w, h: h, texto: "CRÉDITOS", destino: 100 };
}


function draw() {
  background(0);
  dibujarP(estadoActual); 
  
}


function mousePressed() {
  // 1. Lógica de la PORTADA (Estado 0)
  if (estadoActual === 0) {
    // Usamos la función mouseEnBoton() de la pestaña "botones"
    if (mouseEnBoton(botonComenzar)) {
      estadoActual = botonComenzar.destino; // estadoActual = 1
    }
    
    // Usamos la función mouseEnBoton() de la pestaña "botones"
    else if (mouseEnBoton(botonCreditos)) {
      estadoActual = botonCreditos.destino; // estadoActual = 100
    }
    
  } 
  
  // 2. Lógica de CRÉDITOS (Estado 100)
  else if (estadoActual === 100) {
    // Cualquier clic en créditos te devuelve a la portada
    estadoActual = 0;
    
  } 
  
  // 3. Lógica de la AVENTURA (Pantallas 1 a 20)
  else if (estadoActual >= 1 && estadoActual <= 20) {
    // Avanza a la siguiente pantalla por defecto
    estadoActual = estadoActual + 1;
  }
}
