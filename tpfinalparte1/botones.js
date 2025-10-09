// para verificar si las coordenadas actuales del moouse están dentro del área de un botón.
  //@param {object} boton - Objeto con propiedades x, y, w, h del botón.
  //@returns {boolean} True si el mouse está sobre el botón, False si no está
 
function mouseEnBoton(boton) {
  return mouseX > boton.x && 
         mouseX < boton.x + boton.w && 
         mouseY > boton.y && 
         mouseY < boton.y + boton.h;
}


 
function dibujarBoton(boton) {
  
  fill(35,208,229); 
  stroke (250,200,18);
  strokeWeight(4); 
  rect(boton.x, boton.y, boton.w, boton.h, 10); // esquinas redondeadas
  
  // Dibuja el texto
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER, CENTER);
  text(boton.texto, boton.x + boton.w/2, boton.y + boton.h/2);
}

 function dibujarBotonesDeDecision(textoIzquierda, textoDerecha) {
    let w = 250;
    let h = 60;
    let margen = 20;
    let y = height - h - margen; // Posición vertical fija cerca del fondo

    // Botón 1 (Izquierda)
    let x1 = margen; 
    let boton1 = { x: x1, y: y, w: w, h: h, texto: textoIzquierda };
    dibujarBoton(boton1);
    
    //  Botón 2 (Derecha)
    let x2 = width - w - margen; 
    let boton2 = { x: x2, y: y, w: w, h: h, texto: textoDerecha };
    dibujarBoton(boton2);
    
}



// aca no hay que agregar nada creo
