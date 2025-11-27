    class Pantallas {
      constructor(juego) {
        // guarda la referencia a la instancia de la clase Juego
        this.juego = juego; 
    }

    // metodo principal que decide qué dibujar según el estado actual del juego
      dibujar() {
        // Usamos la estructura else  para controlar el flujo de dibujo
        
        if (this.juego.estado === "PORTADA") {
            this.dibujarPortada();
         } else if (this.juego.estado === "INTRODUCCION") {
            this.dibujarIntroduccion();
         } else if (this.juego.estado === "INSTRUCCIONES") {
            this.dibujarInstrucciones();
         } else if (this.juego.estado === "JUGANDO") {
            this.dibujarJuego();
        }
         
         else if (this.juego.estado === "GANAR" || this.juego.estado === "PERDER") {
            this.dibujarFinal(this.juego.estado);
         } else if (this.juego.estado === "CREDITOS") {
            this.dibujarCreditos();
         }
     }

    dibujarPortada() {
        image(fondos.portada, 0, 0, width, height);               
        image(fondos.sonido, 15, 15, 40, 40); 
         fill(255);
         stroke(237, 192, 26);
         textSize(40);
        textAlign(CENTER, CENTER);
        fill(255);
         stroke(237, 192, 26);
        textSize(25);
         text("y los objetos perdidos", width / 2, height / 2 + 30); 
        this.juego.btnComenzar.dibujar();
       }

       dibujarIntroduccion() {
        image(fondos.introduccion, 0, 0, width, height);
        image(fondos.sonido, 15, 15, 40, 40); // Icono de sonido
               
        fill(255);
        textAlign(LEFT, CENTER);
        textSize(15);   
       text("¡Estás atrapado! Antes de que el tiempo\ntermine (30 segundos) debes encontrar\ntodos los objetos perdidos para que Aladin\npueda ser liberado de la cueva.",260, 116, 350, 150);
        // Dibuja el botón de la clase Juego
        this.juego.btnSiguiente.dibujar();
    }

       dibujarInstrucciones() {
        image(fondos.instrucciones, 0, 0, width, height);
         image(fondos.sonido, 15, 15, 40, 40); // Icono de sonido
        
         fill(255);
        textAlign(CENTER, CENTER);        
        textSize(25);
        text("Cómo Jugar:",190,35,420,150); 
         textSize(15);  
         text("Encontrá los 8 objetos que\nse muestran en la lista de\nla barra inferior.",250,90,300,150  );
        
       text( "Si los encontrás todos a tiempo, ¡GANAS!\nSi se acaba el tiempo y no\nencontraste todos, ¡PERDES!", 250,160,300,150 );

       
        this.juego.btnComenzarJuego.dibujar();
    }

        dibujarJuego() {
        image(fondos.juego, 0, 0, width, height);

        //  objetos escondidos en el fondo
        for (let obj of this.juego.objetosEscondidos) {
            let img = iconosItem[obj.indiceImagen];
            
            if (img) {
                push(); // guarda la configuración de dibujo actual

                // pintai el objeto que fue encontrado
                if (obj.encontrado) {
                    tint(255, 0, 0, 200); 
                }
         
                image(img, obj.x, obj.y, obj.ancho, obj.alto);

                pop(); // sca tinta
            }
         }
        
        
         image(fondos.sonido, 15, 15, 40, 40);

        // dibuja la barra de estado 
        this.juego.barra.dibujar(this.juego.tiempoRestante, this.juego.objetosEscondidos);
       }

        dibujarFinal(resultado) {
        let imagenFinal = (resultado === "GANAR") ? fondos.ganar : fondos.perder;
        image(imagenFinal, 0, 0, width, height);
        
        image(fondos.sonido, 15, 15, 40, 40);
        
       
         this.juego.btnReiniciar.dibujar();
        this.juego.btnCreditos.dibujar();
    }

      dibujarCreditos() {
        image(fondos.creditos, 0, 0, width, height);
         image(fondos.sonido, 15, 15, 40, 40);
         fill(255);
        textAlign(CENTER, CENTER);
        
        textSize(36);
        text("Créditos", width / 2, 80);
       textSize(20);
        text("Creadoras: Gramajo Sofía\ny Godoy Lourdes\nPMIW ©2025", 250,150,350,150); 
        this.juego.btnVolver.dibujar();
    }
}
