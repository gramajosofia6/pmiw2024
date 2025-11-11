function dibujarBoton(posX, posY, ancho, alto, dialogos) {
  fill(35,208,229); 
  stroke (250,200,18);
  strokeWeight(2); 
  rect(posX, posY, ancho, alto, 5);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  noStroke();
  text(dialogos, posX + ancho / 2, posY + alto / 2);
}
function clickEnBoton(posX, posY, ancho, alto) { //return devuelve verdadero o falso, dependiendo si el mouse esta posicionado sobre las coordenadas que definimos para el boton
  return mouseX > posX && mouseX < posX + ancho && mouseY > posY && mouseY < posY + alto;
}
