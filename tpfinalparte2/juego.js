/**
 * Clase Juego - Controla el estado del juego, el tiempo, el arreglo de objetos y el flujo de pantallas.
 */
class Juego {
    constructor(totalObjetos) {
        // Propiedades de Estado y Lógica
        this.estado = "PORTADA"; 
        this.tiempoLimite = 30; 
        this.tiempoRestante = 30;
        this.objetosEncontrados = 0;
        this.totalObjetos = totalObjetos; 
        
     
        this.objetosEscondidos = []; // Arreglo de instancias de ObjetoEscondido
        this.hud = new HUD();        // Instancia de la clase HUD
    }


    iniciar() {
        this.estado = "JUGANDO";
        this.tiempoRestante = this.tiempoLimite;
        this.objetosEncontrados = 0;
        
        this.configurarObjetos(); // Prepara el arreglo de 8 objetos
       
    }

    configurarObjetos() {
        
        this.objetosEscondidos = [];
        
       
        this.objetosEscondidos.push(new ObjetoEscondido( 50, 100, 50, 50, "Lámpara real"));
        this.objetosEscondidos.push(new ObjetoEscondido( 400, 50, 80, 40, "lampara oro"));
        this.objetosEscondidos.push(new ObjetoEscondido( 200, 350, 60, 60, "alfomra"));
        this.objetosEscondidos.push(new ObjetoEscondido( 550, 200, 40, 40, "alfombra2"));
        this.objetosEscondidos.push(new ObjetoEscondido( 30, 400, 70, 30, "anillo"));
        this.objetosEscondidos.push(new ObjetoEscondido( 150, 150, 45, 45, "gema"));
        this.objetosEscondidos.push(new ObjetoEscondido( 500, 380, 50, 50, "cuchillo"));
        this.objetosEscondidos.push(new ObjetoEscondido( 600, 10, 30, 30, "espada"));
        
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
        // Este SWITCH controla el flujo de todo el juego
        switch (this.estado) {
            case "PORTADA":
                this.dibujarPortada(); 
                break;
            case "INTRODUCCION":
                this.dibujarIntroduccion();
                break;
            case "INSTRUCCIONES":
                this.dibujarInstrucciones();
                break;
            case "JUGANDO":
                this.dibujarJuego(); 
                break;
            case "GANAR":
            case "PERDER":
                this.dibujarFinal(this.estado);
                break;
            case "CREDITOS":
                this.dibujarCreditos();
                break;
        }
        
        // La lógica de tiempo se aplica en cada frame
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
        // Dibuja el fondo principal del juego
        image(fondos.juego, 0, 0, width, height); 
        
        // Dibuja el arreglo de áreas de desarrollo 
        for (let obj of this.objetosEscondidos) {
            obj.dibujarArea(); 
        }
        
        // Dibuja el HUD (barra inferior y tiempo)
        this.hud.dibujar(this.tiempoRestante, this.objetosEscondidos);
    }

    dibujarFinal(resultado) {
        let imagenFinal = (resultado === "GANAR") ? fondos.ganar : fondos.perder;
        image(imagenFinal, 0, 0, width, height);


        // Dibuja los DOS botones (REINICIAR y CRÉDITOS)
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
        text("Diseño y Programación: [Tu Nombre]", width / 2, 200);
        text("Imágenes: Carpeta /data/", width / 2, 250);
        
        btnVolver.dibujar();
    }
}
