//Sofia Gramajo 119051/4
// Lourdes Godoy 
//
 
let estadoActual = 0; //  para empezar en la Portada (pantalla 0)
let pantalla = []; //arreglo para las pantallas
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los textos  // hay que agregar esto
let botonComenzar;   
let botonCreditos;
let botonSiguiente;


function preload() {
  for (let i = 0; i <= 20; i++) {
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
    
    // Lógica de la AVENTURA (Pantallas 1 a 20)
    else if (estadoActual >= 1 && estadoActual <= 20) {
        

        
        //  Lógica para PANTALLAS DE DECISIÓN (Estado 4) ---
        if (estadoActual === 4) {
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen;
            let x1 = margen;
            let botonIzquierda = { x: x1, y: y, w: w, h: h };
            let x2 = width - w - margen;
            let botonDerecha = { x: x2, y: y, w: w, h: h };
            if (mouseEnBoton(botonIzquierda)) { estadoActual = 5; return; } 
            else if (mouseEnBoton(botonDerecha)) { estadoActual = 7; return; }
        }
        
        // Lógica para PANTALLAS DE DECISIÓN (Estado 8) ---
        else if (estadoActual === 8) {
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen;
            let x1 = margen;
            let botonIzquierda = { x: x1, y: y, w: w, h: h };
            let x2 = width - w - margen;
            let botonDerecha = { x: x2, y: y, w: w, h: h };
            if (mouseEnBoton(botonIzquierda)) { estadoActual = 9; return; } 
            else if (mouseEnBoton(botonDerecha)) { estadoActual = 10; return; }
        }
        
        //  Lógica para PANTALLAS DE DECISIÓN (Estado 11) ---
        else if (estadoActual === 11) {
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen;
            let x1 = margen;
            let botonIzquierda = { x: x1, y: y, w: w, h: h };
            let x2 = width - w - margen;
            let botonDerecha = { x: x2, y: y, w: w, h: h };
            if (mouseEnBoton(botonIzquierda)) { estadoActual = 12; return; } 
            else if (mouseEnBoton(botonDerecha)) { estadoActual = 13; return; }
        }
        
        // Lógica para PANTALLAS DE DECISIÓN (Estado 15) ---
        else if (estadoActual === 15) {
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen;
            let x1 = margen;
            let botonIzquierda = { x: x1, y: y, w: w, h: h };
            let x2 = width - w - margen;
            let botonDerecha = { x: x2, y: y, w: w, h: h };
            if (mouseEnBoton(botonIzquierda)) { estadoActual = 16; return; } 
            else if (mouseEnBoton(botonDerecha)) { estadoActual = 17; return; }
        }
        
        // LÓGICA PARA PANTALLAS FINALES (10, 12, 18, 19) ---
        else if (estadoActual === 10 || estadoActual === 12 || estadoActual === 18 || estadoActual === 19) {
            
            let w = 250;
            let h = 60;
            let margen = 20;
            let y = height - h - margen; 
            
            // Botón IZQUIERDA: REINICIAR
            let x1 = margen;
            let botonReiniciar = { x: x1, y: y, w: w, h: h };
            
            // Botón DERECHA: CRÉDITOS
            let x2 = width - w - margen;
            let botonCreditosFinal = { x: x2, y: y, w: w, h: h };
            
            if (mouseEnBoton(botonReiniciar)) {
                estadoActual = 0; // Vuelve a la portada
                return;
            } else if (mouseEnBoton(botonCreditosFinal)) {
                estadoActual = 100; // Va a la pantalla de créditos
                return;
            }
        }
        
        //  Lógica para PANTALLAS NARRATIVAS (Botón Siguiente) ---
        else if (mouseEnBoton(botonSiguiente)) {
            
            if (estadoActual === 6) {
                estadoActual = 9;
            } else if (estadoActual === 9) {
                estadoActual = 11;
            } else if (estadoActual === 16) {
                estadoActual = 18;
            } else if (estadoActual === 17) {
                estadoActual = 19;
            } else {
                estadoActual = estadoActual + 1;
            }
            
            // Límite: Evitar que el estado pase de 20
            if (estadoActual > 20) estadoActual = 20;
        }
    }
}






