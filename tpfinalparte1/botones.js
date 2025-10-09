//function botonSiguiente (){ 

//}

//function botonDecision(){

//}

//function botonReiniciar(){

//}

/**
 * Verifica si las coordenadas actuales del ratón están dentro del área de un botón.
 * @param {object} boton - Objeto con propiedades x, y, w, h del botón.
 * @returns {boolean} True si el ratón está sobre el botón, False en caso contrario.
 */
function mouseEnBoton(boton) {
  return mouseX > boton.x && 
         mouseX < boton.x + boton.w && 
         mouseY > boton.y && 
         mouseY < boton.y + boton.h;
}

/**
 * Dibuja un botón en la pantalla.
 * @param {object} boton - Objeto con propiedades x, y, w, h y texto.
 */
function dibujarBoton(boton) {
  // Dibuja el rectángulo del botón
  fill(0, 150); // Fondo negro semi-transparente
  stroke(255); // Borde blanco
  rect(boton.x, boton.y, boton.w, boton.h, 10); // rect con esquinas redondeadas
  
  // Dibuja el texto
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text(boton.texto, boton.x + boton.w/2, boton.y + boton.h/2);
}
