function dibujarP(numP) { //funcion con parametros
  if (numP === 0) {
    // -------- PORTADA --------
    image(imagenes[0], 0, 0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
    
    dibujarBoton(botonComenzar);
    dibujarBoton(botonCreditos);
    
  } else if (numP === 1) {
    // -------- PANTALLA DE AVENTURA GRAFICA 1 --------
    
  }
}
