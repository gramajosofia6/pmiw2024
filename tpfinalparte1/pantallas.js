
function dibujarP (numP) { //funcion con parametros para dibujar todas las pantallas de la aventura grafica
  if (estado < imagenes.length) {
    image(imagenes[estado], 0, 0, 640,480);
  } //portada/inicio
  if (numP == 0) {
    fill(255);
    stroke(247,200,25);
    strokeWeight(2);
    textSize(45);
    textAlign(CENTER, CENTER);
    text("La lámpara de Aladino", width/2, height/5);
    textSize(20);  
    fill(59, 17, 99);
      stroke(255);
      strokeWeight (2);
    text("Presiona la tecla 'ENTER' para activar sonido ", 322, 420);
    text("Presiona la tecla 'P' para pausar sonido", 320, 450);
    
    dibujarBoton(500, 420, 90, 30, "Comenzar");
    dibujarBoton(50, 420, 90, 30, "Creditos");
    
  } else if (numP === 100) {
    creditos(); //mostrar pantalla creditos
    // Botón de Volver de Créditos
    dibujarBoton(500, 420, 90, 30, "Volver"); 

    // pantallas del 1 a 19
  } else if (numP >= 1 && numP <= 19) {
    // PANTALLAS DE DECISIÓN: Tienen botones en posiciones diferentes
    if (numP === 4) {
      dibujarBoton(100, 410, 180, 30, "entregar la lampara");
      dibujarBoton(400, 410, 180, 30, "negarse a entregarla");
    } else if (numP === 8) {
      dibujarBoton(200, 410, 90, 30, "si");
      dibujarBoton(400, 410, 180, 30, "negarse por las dudas");
    } else if (numP === 11) {
      dibujarBoton(100, 410, 180, 30, "riquezas desmedidas");
      dibujarBoton(400, 410, 180, 30, "prosperidad moderada");
    } else if (numP === 15) {
      dibujarBoton(100, 410, 180, 30, "enfrentarlo con violencia");
      dibujarBoton(400, 410, 180, 30, "engañarlo con astucia");
    } 

    // POSIBLES FINALES (10, 12, 18, 19): Tienen botones Reiniciar y Créditos
    else if (numP == 10 || numP == 12 || numP == 18 || numP == 19) {
      dibujarBoton(200, 410, 90, 30, "Reiniciar");
      dibujarBoton(400, 410, 90, 30, "Creditos"); // Añadido el botón Créditos aquí
    }
  }
  
  // LÓGICA DE DIÁLOGOS
  // DIBUJAR DIÁLOGO (Aparece en todas las pantallas de historia 1-19)
  if (numP >= 1 && numP <= 19) {
    dibujarDialogo(dialogos[numP]);
  }

  // BOTÓN SIGUIENTE
  // Se dibuja si NO es Decisión, NO es Final, y NO es la Portada/Créditos.
  if (
    numP >= 1 && numP <= 19 &&
    numP !== 4 && numP !== 8 && numP !== 11 && numP !== 15 && // Excluye Decisiones
    numP !== 10 && numP !== 12 && numP !== 18 && numP !== 19 // Excluye Finales
    ) {
    dibujarBoton(500, 420, 90, 30, "Siguiente");
  }
}







function dibujarDialogo(texto) { //funcion con parametros para mostrar los textos de cada pantalla de la aventura
  // Si el texto para este estado no existe (es una línea vacía en el .txt) no hace nada
  if (!texto) return;
  // coordeanadas para la cajita que contiene los textos
  let posX = 45;
  let posY = height - 210;
  let widthh = width - 100;
  let heightt = 110;
  // estilo de la caja
  fill(0, 0, 0, 200); // negro semi-transparente
  rect(posX, posY, widthh, heightt, 10); // el 10 se agrego para dar el efecto de esquinas redondeadas
  fill(255);
  textSize(18);
  // LEFT, TOP así se lee de izquierda a derecha
  textAlign(LEFT, TOP);
  // esto es para dibujar el texto dentro de la caja con un margen interno
  let margen = 15;
  text(texto,
    posX + margen,
    posY + margen,
    widthh - margen * 2,
    heightt - margen * 2 // puse un límite para el texto
    );
}

function reiniciarPrograma() {
  estado = 0; //comienza desde la portada
  sonido.stop(); //detiene el sonido
}





































 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
