function dibujarP(numP) {
    
     if (numP === 0) {
        // -------- PORTADA --------
        image(imagenes[0], 0, 0, width, height);
        fill(255);
        textSize(32);
        textAlign(CENTER, CENTER);
        text("La lámpara de Aladino", width/2, height/5);
        dibujarBoton(botonComenzar); 

    } 
    
    // LÓGICA DE CRÉDITOS
    else if (numP === 100) {
        creditos(); 
    }
    
    // Pantallas (1 a 19)
    else if (numP >= 1 && numP <= 19) {
        
   // portada
   image(imagenes[numP], 0, 0, width, height); 
        
        //  LÓGICA DE DECISIONES Y FINALES (BOTONES ESPECÍFICOS)
        
        if (numP === 4) {
             dibujarBotonesDeDecision("entregar la lampara","negarse a entregarla"); 
        } else if (numP === 5) {
             
        } else if (numP === 6) {
            
        } else if (numP === 7) {
            
        } else if (numP === 8) {
             dibujarBotonesDeDecision("si", "negarse por las dudas");
        } else if (numP === 9) {
            
        } else if (numP === 11) {
             dibujarBotonesDeDecision("Riquezas desmedidas", "Prosperidad moderada");
        } else if (numP === 13) {
             
        } else if (numP === 14) {
            
        } else if (numP === 15) {
             dibujarBotonesDeDecision("Enfrentarlo con violencia", "Engañarlo con astucia");
        } else if (numP === 16) {
            
        } else if (numP === 17) {
            
        }
        
        // 🏁 FINALES (Botones Reiniciar/Créditos)
        else if (numP === 10 || numP === 12 || numP === 18 || numP === 19) {
           
             dibujarBotonesDeDecision("Reiniciar Aventura", "Ver Créditos"); 
        }
    } 


    //  LÓGICA DE DIÁLOGOS Y BOTÓN SIGUIENTE (SEPARADOS) ---
    
    //  DIBUJAR DIÁLOGO (Aparece en todas las pantallas de historia 1-19)
    if (numP >= 1 && numP <= 19) {
        dibujarDialogo(dialogos[numP]); 
    }
    
    // DIBUJAR BOTÓN SIGUIENTE (La Lógica de EXCLUSIÓN)
    // El botón Siguiente solo se dibuja si NO es una decisión, y NO es un final.
    if (
        numP >= 1 && numP <= 19 && 
        numP !== 4 && numP !== 8 && numP !== 11 && numP !== 15 && 
        numP !== 10 && numP !== 12 && numP !== 18 && numP !== 19
    ) {
        dibujarBoton(botonSiguiente); 
    }
}






