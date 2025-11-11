//Sofia Gramajo 119051/4
//Lourdes Godoy 119044/5
//VIDEO:

let estado = 0;
let imagenes = []; // arreglo de imágenes
let dialogos = []; // arreglo para los texto
let sonido; //variable para sonido
let fuente; //variable para la fuente para el texto


function preload() {
  for (let i = 0; i < 21; i++) {
    imagenes[i] = loadImage('data/imagen' + i + '.jpg');
  }
  soundFormats('mp3', 'wav'); // formatos de sonido admitidos
  sonido = loadSound('data/sonidoAmbiente.wav'); //subida de sonido
  dialogos = loadStrings('data/dialogos.txt'); //subida de fuente para el texto
}

function setup() {
  createCanvas(640, 480);
  fuente = loadFont ('data/Schoolbell-Regular.ttf');
  textFont(fuente);
   sonido.loop();
}
function draw() {
  background(0);
  dibujarP(estado);
}

function mousePressed() {
  // 🚩 Bandera para asegurar que solo haya UN cambio de estado por clic.
  // Esto soluciona los saltos de pantalla (como de 9 a 13).
  let cambioRealizado = false;

  // Lógica del botón de Créditos en la PORTADA (50, 420, 90, 30)
  if (estado == 0 && clickEnBoton(50, 420, 90, 30)) {
    estado = 100;
    cambioRealizado = true; 
  }
  
  // Lógica para volver de creditos
  if (estado === 100 && clickEnBoton (500,420,90,30)){
    estado = 0;
    cambioRealizado = true; 
  }

  // PANTALLAS DE DECISION
  // Solo se revisan las decisiones si no se ha hecho un cambio antes.
  if (estado == 4 && !cambioRealizado) { //esta desicion puede llevarte a la pantalla 5 o 7
    if (clickEnBoton(100, 410, 180, 30)) { estado = 5; cambioRealizado = true; }
    if (clickEnBoton(400, 410, 180, 30)) { estado = 7; cambioRealizado = true; }
  }
  if (estado == 8 && !cambioRealizado) { //esta desicion puede llevarte a la pantalla 9 o 10
    if (clickEnBoton(200, 410, 90, 30)) { estado = 9; cambioRealizado = true; }
    if (clickEnBoton(400, 410, 180, 30)) { estado = 10; cambioRealizado = true; }
  }
  if (estado == 11 && !cambioRealizado) { //esta desicion puede llevarte a la pantalla 12 o 13
    if (clickEnBoton(100, 410, 180, 30)) { estado = 12; cambioRealizado = true; }
    if (clickEnBoton(400, 410, 180, 30)) { estado = 13; cambioRealizado = true; }
  }
  if (estado == 15 && !cambioRealizado) { //esta desicion puede llevarte a la pantalla 16 o 17
    if (clickEnBoton(100, 410, 180, 30)) { estado = 16; cambioRealizado = true; }
    if (clickEnBoton(400, 410,180, 30)) { estado = 17; cambioRealizado = true; }
  }


  // TODOS LOS POSIBLES FINALES (Botones Reiniciar y Créditos)
  if ((estado == 10 || estado == 12 || estado === 18 || estado === 19) && !cambioRealizado) {
    // Botón Izquierda: Reiniciar (200, 410)
    if (clickEnBoton (200,410,90,30)) { 
      reiniciarPrograma();
      cambioRealizado = true;
    }
    // Botón Derecha: Créditos (400, 410)
    else if (clickEnBoton (400,410,90,30)){ 
      estado= 100;
      cambioRealizado = true;
    }
  }

  // LÓGICA DE AVANCE LINEAL (Botón "Siguiente" en 500, 420)
  // Solo se ejecuta si NO se hizo un cambio en los bloques anteriores (Decisiones/Finales)
  if (clickEnBoton(500, 420, 90, 30) && !cambioRealizado) {
    if (estado == 0) estado = 1;
    else if (estado == 1) estado = 2;
    else if (estado == 2) estado = 3;
    else if (estado == 3) estado = 4;
    else if (estado == 5) estado = 6;
    else if (estado == 6) estado = 9; // De 6 va a 9 (convergencia)
    else if (estado == 7) estado = 8;
    else if (estado == 9) estado = 11; // De 9 va a 11 (decisión)
    else if (estado == 13) estado = 14;
    else if (estado == 14) estado = 15;
    else if (estado == 16) estado = 18; // De 16 va a 18 (final)
    else if (estado == 17) estado = 19; // De 17 va a 19 (final)
  }
}



function keyPressed() {
  userStartAudio(); //permite que el sonido funcione sin problema en cualquier navegador

  if (keyCode === ENTER) { // si se presiona la tecla enter comienza la musica de fondo
    if (!sonido.isPlaying()) {
      sonido.loop(); // es para que el sonido se escuche en bucle
    }
  }
  if (key === 'p' || key === 'P') {
    if (sonido.isPlaying()) {
      sonido.pause(); // si se presiona la tecla P pausa el sonido
    } else if (sonido.isPaused()) {
      sonido.play(); // reanuda desde donde se pauso el sonido
    }
  }
}
 
