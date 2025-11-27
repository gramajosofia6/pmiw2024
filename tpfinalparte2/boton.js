  //clase Boton dibuja un boton y detecta si fue presionado
   class Boton {
     constructor(texto, x, y, ancho, alto) {
     this.texto = texto; // texto que muestra el botón
     this.x = x;         // pos X
     this.y = y;         //pos Y
     this.ancho = ancho; // ancho del area del boton
      this.alto = alto;   // alto del área del botn
   }


    dibujar() {

    rectMode(CORNER);
    fill(135, 36, 119);
     stroke(205, 180, 95);
     strokeWeight(2);

     rect(this.x, this.y, this.ancho, this.alto, 10); 

    // estilo del texto
     fill(0);
     textSize(24);
     textAlign(CENTER, CENTER);

    // centra el texto dentro
     text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
  }

    fuePresionado(px, py) {
    // lógica de detección de clic
     return (
      px > this.x &&
      px < this.x + this.ancho &&
      py > this.y &&
      py < this.y + this.alto
      );
    }
  }   
