//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5
//video : https://youtu.be/Irpju5JWzaA?si=p29Cyil63kFqpjEm



   let juego;     // instancia de la clase juego (lógica, estado y recursos
   let pantallas; // instancia de la clase pantallas 
  let fondos = {};  // arreglo para almacenar todas las imágenes de fondo
  let iconosItem = []; // arreglo para almacenar las imágenes de los 8 objetos
  let fuente;  
  let sonido;   

//  sacamos las variables globales para los botones de setup

     function preload() {  

      fondos.portada = loadImage('data/portada.jpg');
     fondos.introduccion = loadImage('data/introduccion.png');
     fondos.instrucciones = loadImage('data/instrucciones.png');
      fondos.ganar = loadImage('data/imagenganar.png'); 
     fondos.perder = loadImage('data/imagenperder.png');
      fondos.creditos = loadImage('data/creditos.png');
     fondos.juego = loadImage('data/fondo_juego.png');  
      fondos.sonido = loadImage('data/botonsonido.png'); 

       // carga de los 8 objetos
      for (let i = 0; i < 8; i++) {
        iconosItem[i] = loadImage(`data/objeto${i}.png`);  
       }
    
      fuente = loadFont ('data/Schoolbell-Regular.ttf');
     soundFormats('mp3', 'wav'); 
     sonido = loadSound('data/sonidoAmbiente.wav'); 
   }

    function setup() {
      createCanvas(640, 480);
      textFont(fuente);
      sonido.loop();
      userStartAudio(); 
    
    // creamos  instancias de la clase Juego y pant 
    juego = new Juego(8); 
     pantallas = new Pantallas(juego);
    
    imageMode(CORNER);  
   }

     function draw() {   
    pantallas.dibujar();  
     juego.actualizarTiempo(); // baja el temporizador cada segundo en estado jugando
    juego.revisarCondiciones(); // comprueba si el tiempo llegó a 0 en estado jugando
   }

    function mouseClicked() {
    
     if (juego.estado === "PORTADA") {
        if (juego.btnComenzar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INTRODUCCION"; 
         }
      }  
    
      else if (juego.estado === "INTRODUCCION") {
         if (juego.btnSiguiente.fuePresionado(mouseX, mouseY)) {
            juego.estado = "INSTRUCCIONES"; 
          }
      } 
    
      else if (juego.estado === "INSTRUCCIONES") {
        if (juego.btnComenzarJuego.fuePresionado(mouseX, mouseY)) {
            juego.iniciar(); // inicia el juego ,configura objetos y cambia a estado JUGANDO
        }
    } 
    
       else if (juego.estado === "JUGANDO") {
        // delega la verificación de clic al arreglo de objetos en la clase juego
        juego.revisarClick(mouseX, mouseY);
     } 
    
      else if (juego.estado === "GANAR" || juego.estado === "PERDER") {
        
        if (juego.btnReiniciar.fuePresionado(mouseX, mouseY)) {
            juego.estado = "PORTADA"; 
        }
        if (juego.btnCreditos.fuePresionado(mouseX, mouseY)) {
            juego.estado = "CREDITOS";  
        }
      } 
  
    else if (juego.estado === "CREDITOS") {
        if (juego.btnVolver.fuePresionado(mouseX, mouseY)) {
            juego.estado = "PORTADA"; 
        }
      }
    }
    
 
   function mousePressed() {  
    
     if (mouseX > 15 && mouseX < 55 && mouseY > 15 && mouseY < 55) { 
        
        // si el sonido NO está sonando, que empiece
        if (!sonido.isPlaying()) {
            sonido.loop();
        // si el sonido ya está sonando, que se pause
        } else {
            sonido.stop();
        }
    }
}
