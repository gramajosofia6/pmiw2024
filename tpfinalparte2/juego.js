     class Juego {
       constructor(totalObjetos) {
        // atributos de la clase juego
          this.estado = "PORTADA"; 
           this.tiempoLimite = 30; 
          this.tiempoRestante = 30;
         this.objetosEncontrados = 0;
         this.totalObjetos = totalObjetos; 
        this.objetosEscondidos = []; // Arreglo de instancias de ObjetoEscondido
        this.barra = new barra(); // Instancia de la clase barra
     }


         iniciar() {
          this.estado = "JUGANDO";
          this.tiempoRestante = this.tiempoLimite;
          this.objetosEncontrados = 0;
        
          this.configurarObjetos(); // Prepara el arreglo de 8 objetos
       
      }

        configurarObjetos() {
        
          this.objetosEscondidos = [];
        
       
          this.objetosEscondidos.push(new ObjetoEscondido( 460 , 315, 70, 70, "Lámpara real",0));
         this.objetosEscondidos.push(new ObjetoEscondido( 130, 190, 80, 40, "lampara oro",1));
         this.objetosEscondidos.push(new ObjetoEscondido( 140, 350, 60, 60, "alfomra",2));
         this.objetosEscondidos.push(new ObjetoEscondido( 450, 200, 60, 60, "alfombra2",3));
         this.objetosEscondidos.push(new ObjetoEscondido( 90, 260, 90, 50, "espada",4));
         this.objetosEscondidos.push(new ObjetoEscondido( 375, 170, 60, 60, "gema",5));
         this.objetosEscondidos.push(new ObjetoEscondido( 580, 55, 70, 70, "corona",6));
          this.objetosEscondidos.push(new ObjetoEscondido( 330, 250, 30, 30, "anillo",7));
        
        this.totalObjetos = this.objetosEscondidos.length;
      }

          revisarClick(px, py) {
           if (this.estado !== "JUGANDO") return;
           
             for (let obj of this.objetosEscondidos) {
              if (obj.fueClickeado(px, py)) {
                obj.encontrado = true;
                this.objetosEncontrados++;
                
                // Revisa si ganó
                 if (this.objetosEncontrados >= this.totalObjetos) {
                    this.estado = "GANAR";
                }
                 break;
             }
         }
     }
   
         actualizarTiempo() {
        // Solo cuenta el tiempo si estamos jugando
          if (this.estado === "JUGANDO") {
            
             if (frameCount % 60 === 0 && this.tiempoRestante > 0) { 
                this.tiempoRestante--;
             }
         }
     }

        revisarCondiciones() {
          if (this.estado === "JUGANDO") {
            // Condición de derrota por tiempo
           if (this.tiempoRestante <= 0) {
                this.estado = "PERDER";
              }
           }
        }

       // =================================================================
        // MÉTODOS DE DIBUJO DE PANTALLAS
       // =================================================================

           dibujarPantallas() {
        // Usamos la estructura else if para controlar el flujo de dibujo
        
           if (this.estado === "PORTADA") {
              this.dibujarPortada(); 
          } 
        
           else if (this.estado === "INTRODUCCION") {
              this.dibujarIntroduccion();
         } 
        
           else if (this.estado === "INSTRUCCIONES") {
              this.dibujarInstrucciones();
          } 
        
          else if (this.estado === "JUGANDO") {
             this.dibujarJuego(); 
           } 
        
        // Las pantallas de ganar y perder 
           else if (this.estado === "GANAR" || this.estado === "PERDER") {
              this.dibujarFinal(this.estado);
           } 
        
             else if (this.estado === "CREDITOS") {
              this.dibujarCreditos();
          }

        // ponemos el temporizador y las reglas
          this.actualizarTiempo();
          this.revisarCondiciones();
    }
    
           dibujarPortada() {
            image(fondos.portada, 0, 0, width, height);
           fill(255); 
         stroke(237,192,26);
          strokeWeight(2); 
         textSize(20);
        textAlign(CENTER, CENTER); 
         text("y los objetos perdidos", width / 2, height / 2 + 25);
          btnComenzar.dibujar();
        }
    
         dibujarIntroduccion() {
           image(fondos.introduccion, 0, 0, width, height);
          fill(255);
           textAlign(CENTER, CENTER);
          textSize(15);
         text("Estás atrapado. Antes de que el tiempo termine (30 segundos),", width / 2, height / 2 - 80);
         text("debes encontrar los objetos para liberar a aladino.", width / 2, height / 2);
          btnSiguiente.dibujar();
     }

         dibujarInstrucciones() {
          image(fondos.instrucciones, 0, 0, width, height);
         fill(255);
         textAlign(CENTER, CENTER);
          textSize(20);
           text("INSTRUCCIONES:", width / 2, height / 2 - 100);
          text("Haz clic en los 8 objetos listados en la BARRA INFERIOR.", width / 2, height / 2 - 30);
           text("¡Si los encuentras todos, ganas!\n Si se acaba el tiempo, pierdes.", width / 2, height / 2);
            btnComenzarJuego.dibujar();
          }
    
             dibujarJuego() {
    
             image(fondos.juego, 0, 0, width, height); 
    
            for (let obj of this.objetosEscondidos) {
          // tenemos la imagen correcta del arreglo iconosItem
          // el indiceImagen del objeto nos dice que imagen usar
              let img = iconosItem[obj.indiceImagen]; 
            // verificamos que la imagen exista (para evitar errores si algo falla en la carga)
              if (img) { 
               push(); // guarda la configuración de dibujo actual  
                if (obj.encontrado) {
                 tint(255,0,0,200); //esto pinta las imagenes cuando las encontras
            }
          
            image(img, obj.x, obj.y, obj.ancho, obj.alto);
            
            pop(); // restaura la configuración de dibujo original (deshace el tint para otros dibujos)
           }
       } 
   
    // dibuja la Barra 
    //  le pasamos el tiempo restante y el arreglo de objetos para que sepa qué mostrar
        this.barra.dibujar(this.tiempoRestante, this.objetosEscondidos);
     }

          dibujarFinal(resultado) {
          let imagenFinal = (resultado === "GANAR") ? fondos.ganar : fondos.perder;
           image(imagenFinal, 0, 0, width, height);
            btnReiniciar.dibujar();
            btnCreditos.dibujar();
       }

       dibujarCreditos() {
         image(fondos.creditos, 0, 0, width, height); 
          fill(255);
          textAlign(CENTER, CENTER);
         textSize(36);
         text("CRÉDITOS", width / 2, 80);
        
          textSize(20);
          text("creadoras :Gramajo Sofía y Godoy Lourdes", width / 2, 200);
          text("pmiw 2025", width / 2, 250);
        
          btnVolver.dibujar();
      }
   } 
