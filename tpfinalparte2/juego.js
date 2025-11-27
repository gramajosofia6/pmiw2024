
  class Juego {
    constructor(totalObjetos) {
        
        this.estado = "PORTADA";
         this.tiempoLimite = 30; 
        this.tiempoRestante = 30;
         this.objetosEncontrados = 0;
        this.totalObjetos = totalObjetos;
        this.objetosEscondidos = []; // arreglo de instancias de ObjetoEscondido
        this.barra = new barra();    

       
        // ponemos instancia de la clase boton que antes estaba en setup
      
         let btnAncho = 200;
         let btnAlto = 50;
        let btnX = width / 2 - btnAncho / 2;
         let btnY = height - 150;

         this.btnComenzar = new Boton("Comenzar", btnX, btnY, btnAncho, btnAlto);
        this.btnSiguiente = new Boton("Siguiente", btnX, btnY, btnAncho, btnAlto);
        this.btnComenzarJuego = new Boton("¡A jugar!", btnX, btnY, btnAncho, btnAlto);

        
        this.btnReiniciar = new Boton("Reiniciar", width / 2 - 150, height / 2 + 50, 100, 40); // Izquierda
         this.btnCreditos = new Boton("Creditos", width / 2 + 50, height / 2 + 50, 100, 40);    // Derecha
        this.btnVolver = new Boton("Volver", btnX, btnY, 200, 50);
    }

    // metodo para preparar el juego antes de pasar al estado jugando
      iniciar() {
        this.estado = "JUGANDO";
         this.tiempoRestante = this.tiempoLimite;
        this.objetosEncontrados = 0;
        this.configurarObjetos(); // preparamos el arreglo de 8 obj
    }

    
    configurarObjetos() {
        this.objetosEscondidos = [];

        
         this.objetosEscondidos.push(new ObjetoEscondido( 460, 315, 70, 70, "Lámpara real", 0));
        this.objetosEscondidos.push(new ObjetoEscondido( 130, 190, 80, 40, "Lampara oro", 1));
         this.objetosEscondidos.push(new ObjetoEscondido( 140, 350, 60, 60, "Alfombra", 2));
        this.objetosEscondidos.push(new ObjetoEscondido( 450, 200, 60, 60, "Alfombra 2", 3));
         this.objetosEscondidos.push(new ObjetoEscondido( 90, 260, 90, 50, "Espada", 4));
        this.objetosEscondidos.push(new ObjetoEscondido( 375, 170, 60, 60, "Gema", 5));
         this.objetosEscondidos.push(new ObjetoEscondido( 580, 55, 70, 70, "Corona", 6));
        this.objetosEscondidos.push(new ObjetoEscondido( 330, 250, 30, 30, "Anillo", 7));

        this.totalObjetos = this.objetosEscondidos.length;
    }

    // verifica si encontró un obj
       revisarClick(px, py) {
        if (this.estado !== "JUGANDO") return;

         for (let obj of this.objetosEscondidos) {
            if (obj.fueClickeado(px, py)) {
                obj.encontrado = true;
               this.objetosEncontrados++;

                // se fija si gano
                if (this.objetosEncontrados >= this.totalObjetos) {
                    this.estado = "GANAR";
                }
                // si encontramos uno, salimos del bucle para no revisar otros
                break; 
            }
          }
        }

    // Lógica para descontar el tiempo
      actualizarTiempo() {
        // solo cuenta los 30 segundos del tiempo si estamos jugando
         if (this.estado === "JUGANDO") {
          if (frameCount % 60 === 0 && this.tiempoRestante > 0) {
                this.tiempoRestante--;
             }
        }
       }

    // revisa si el juego debe terminar por tiempo
    revisarCondiciones() {
        if (this.estado === "JUGANDO") {
        //si llega a 0 pierde
            if (this.tiempoRestante <= 0) {
                this.estado = "PERDER";
            }
        }
    } 
   }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
