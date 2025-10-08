function dibujarP(numP) { //funcion con parametros
  if (numP === 0) {
    // -------- PORTADA --------
    image(imagenes[0], 0, 0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
    
    dibujarBoton(botonComenzar);  // aca llme a los botones en la portada 
    dibujarBoton(botonCreditos);
    
  } else if (numP === 1) {
    // -------- PANTALLA DE AVENTURA GRAFICA 1 --------
   
     image(imagenes[1], 0, 0, width, height); //1ra imagen - aladin y la princesa
  }
    else if (numP === 2) {   
    // -------- PANTALLA DE AVENTURA GRAFICA 2 -------- 
    image(imagenes[2], 0, 0, width, height); //2da imagen - el hechizero
  }
  
    else if (numP === 3) {
    image (imagenes[3] ,0,0, width, height); 
  
   }
   
   else if (numP === 4 ) {
     image ( imagenes [4] ,0,0, width,height);
       dibujarBotonesDeDecision("entregar la lampara","negarse a entregarla"); 
   }
     
    else if  (numP === 5 ) {
     image (imagenes [5] ,0,0,width,height);
     
   }
    
    else if (numP === 7 ) {
     image (imagenes [7] ,0,0,width,height); 
  }
  
  else if (numP === 6 ) {
    image (imagenes [6],0,0,width,height);
  }
    
  else if (numP === 8 ) {
    image (imagenes [8] ,0,0,width.height);
     dibujarBotonesDeDecision("si", "negarse por las dudas")
  }
  
  else if (numP === 9 ) {
    image (imagenes [9] ,0,0,width,height);
  }
  
  else if ( numP === 10) {
    image (imagenes [10] ,0,0,width,height);
  }
  
   if (numP >= 1 && numP <= 10 && numP !== 4 && numP !== 8) {   // este es para que aparezca solo en las pantallas que tiene desiciones 
        dibujarBoton(botonSiguiente);  
    }
}
