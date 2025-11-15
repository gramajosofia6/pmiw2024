
//sofia gramajo 119051/4
//Lourdes Godoy 
//video; 
//falta ; sonido,acomodar texto en intro e instrucciones , acomodar botones (medio opcional,no estan tan mal) , poner una tipografia (opcional) .tanto sondido como letra podes reutilizar la del tp anterior



// VARIABLES GLOBALES
  let juego; // Objeto de la clase Juego 
  let fondos = {};      // Objeto para fondos (el del juego notmal,la de instrucciones,portada y de intro)
   let iconosItem = [];  // Arreglo para los 8 objetos
  let btnComenzar, btnSiguiente, btnComenzarJuego, btnReiniciar, btnCreditos, btnVolver;



    function preload() {  
    
     fondos.portada = loadImage('data/portada.jpg');
    fondos.introduccion = loadImage('data/introduccion.png');
     fondos.instrucciones = loadImage('data/instrucciones.png');
     fondos.ganar = loadImage('data/imagenganar.png');
    fondos.perder = loadImage('data/imagenperder.png');
     fondos.creditos = loadImage('data/creditos.png');
    fondos.juego = loadImage('data/fondo_juego.png'); 

    // Carga de los 8 objetos
       for (let i = 0; i < 8; i++) {
         iconosItem[i] = loadImage(`data/objeto${i}.png`);  
     }
    
   
}

     function setup() {
      createCanvas(640, 480);
    
     juego = new Juego(8); // indica que debe buscar 8 objetos
    
      imageMode(CORNER); 
    
     // Instancia de TODOS los Botones (Clase Boton)
       let btnAncho = 200;
      let btnAlto = 50;
      let btnX = width / 2 - btnAncho / 2;
       let btnY = height - 150;
    
    // Botones de flujo principal
      btnComenzar = new Boton("comenzar", btnX, btnY, btnAncho, btnAlto);
     btnSiguiente = new Boton("siguiente", btnX, btnY, btnAncho, btnAlto);
     btnComenzarJuego = new Boton("¡a jugar!", btnX, btnY, btnAncho, btnAlto);

    // Botones para las pantallas de Ganar/Perder 
      btnReiniciar = new Boton("Reiniciar", width / 2 - 150, height / 2 + 50, 100, 40); // Izquierda
       btnCreditos = new Boton("Creditos", width / 2 + 50, height / 2 + 50, 100, 40); // Derecha
     btnVolver = new Boton("volver", btnX, btnY, 200, 50);
}

        function draw() {
           juego.dibujarPantallas(); 
}

          function mouseClicked() {
    // Usamos la estructura if para manejar el estado del juego

    if (juego.estado === "PORTADA") {
        if (btnComenzar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INTRODUCCION"; 
          }
     } 
    
         else if (juego.estado === "INTRODUCCION") {
            if (btnSiguiente.fuePresionado(mouseX, mouseY)) {
                 juego.estado = "INSTRUCCIONES"; 
           }
       }
    
          else if (juego.estado === "INSTRUCCIONES") {
             if (btnComenzarJuego.fuePresionado(mouseX, mouseY)) {
                  juego.iniciar(); // <--- Inicia el juego (cambia a estado: JUGANDO)
           }
        }
    
          else if (juego.estado === "JUGANDO") {
              // Delega la verificación de clic al arreglo de objetos
                     juego.revisarClick(mouseX, mouseY);
    }
    
              else if (juego.estado === "GANAR" || juego.estado === "PERDER") {
                // Manejo de los dos botones en la pantalla final
              if (btnReiniciar.fuePresionado(mouseX, mouseY)) {
                     juego.estado = "PORTADA"; // Vuelve a empezar
             }
                if (btnCreditos.fuePresionado(mouseX, mouseY)) {
                            juego.estado = "CREDITOS"; 
                    }
           }
    
                 else if (juego.estado === "CREDITOS") {
                   if (btnVolver.fuePresionado(mouseX, mouseY)) {
                        juego.estado = "PORTADA"; // Vuelve a la portada
               }
           }
    }


       function keyPressed() { 
          if ((juego.estado === "GANAR" || juego.estado === "PERDER") && key.toLowerCase() === 'r') {
          juego.estado = "PORTADA"; 
     }
  }
