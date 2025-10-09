 function dibujarP(numP) { //funcion con parametros
  if (numP === 0) {
    // -------- PORTADA --------
    image(imagenes[0], 0, 0, width, height);
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
    
    dibujarBoton(botonComenzar);  // aca llme a los botones en la portada 
  
    
  } 
    //  LÓGICA DE CRÉDITOS 
    else if (numP === 100) {
    creditos ();
    }
    else if (numP === 1) {
    // -------- aca empieza la aventura --------
   
     image(imagenes[1], 0, 0, width, height); //1ra imagen - aladin y la princesa
  }
    else if (numP === 2) {   

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

    image (imagenes [8] ,0,0,width,height); 
     dibujarBotonesDeDecision("si", "negarse por las dudas")
  }
  
  else if (numP === 9 ) {
    image (imagenes [9] ,0,0,width,height);
  }
  
  // 🌟 2. FINAL 1 (Estado 10)
  else if ( numP === 10) {
    image (imagenes [10] ,0,0,width,height);
    dibujarBotonesDeDecision("Reiniciar", "Créditos"); 
  }
  
  else if (numP === 11) {
    image (imagenes [11],0,0,width,height);
    dibujarBotonesDeDecision("Riquezas desmedidas", "Prosperidad moderada")
  }
  
  // 🌟 2. FINAL 2 (Estado 12)
  else if (numP ===12) {
    image (imagenes [12],0,0,width,height);
    dibujarBotonesDeDecision("Reiniciar", "Créditos"); 
  }
  
  else if (numP === 13 ) {
    image (imagenes [13] ,0,0,width,height);
  }
   
  else if (numP === 14 ){
   image (imagenes [14],0,0,width,height); 
  }
  
  else if (numP === 15 ){
    image (imagenes [15],0,0,width,height);
     dibujarBotonesDeDecision("Enfrentarlo con violencia", "Engañarlo con astucia")
  }
  
  else if (numP === 16){
    image (imagenes [16] ,0,0,width,height);
  }
  
  else if (numP === 17) {
    image (imagenes [17],0,0,width,height);
  }
  
  // 🌟 2. FINAL 3 (Estado 18)
  else if (numP === 18 ){
    image (imagenes [18],0,0,width,height); 
    dibujarBotonesDeDecision("Reiniciar", "Créditos");
  }

  // 🌟 2. FINAL 4 (Estado 19)
  else if (numP === 19) {
    image (imagenes [19] ,0,0,width,height);
    dibujarBotonesDeDecision("Reiniciar", "Créditos");
  }
   
   //  LÓGICA DEL BOTÓN SIGUIENTE (Excluye todos los estados de decisión y finales)
   if (
        numP >= 1 && numP <= 19 && 
        numP !== 4 && numP !== 8 && numP !== 11 && numP !== 15 && // Excluye decisiones
        numP !== 10 && numP !== 12 && numP !== 18 && numP !== 19  // Excluye finales
    ) { 
        dibujarBoton(botonSiguiente);  
    }
}
 
 
 //YA ESTAN TODAS OK , LAS MANEJE AGREGANDOLAS ACA Y ACTUALIZANDO EL MOUSE PRESSED CADA VEZ QUE HACIA UN SALTO ENTRE PANTALLAS
 
