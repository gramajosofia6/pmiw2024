//Clase Boton (Clase de Objeto BÁSICA) - Dibuja un botón y detecta si fue presionado.
 
class Boton {
    constructor(texto, x, y, ancho, alto) {
        this.texto = texto; // Texto que muestra el botón
        this.x = x;         // Posición X
        this.y = y;         // Posición Y
        this.ancho = ancho; // Ancho del área del botón
        this.alto = alto;   // Alto del área del botón
    }

    /**
     * Dibuja el botón 
     */
    dibujar() {
        // Estilo del boton
          rectMode(CORNER);
          fill(135,36,119); 
          stroke(205,180,95);        
          strokeWeight(2);
        
        // Dibuja el rectángulo del botón
         rect(this.x, this.y, this.ancho, this.alto, 10); // 10 para esquinas redondeadas

        // Estilo del texto
         fill(0);           // Color negro para el texto
         textSize(24);
          textAlign(CENTER, CENTER);
        
        // Dibuja el texto centrado dentro del rectángulo
        text(this.texto, this.x + this.ancho / 2, this.y + this.alto / 2);
    }

  
    fuePresionado(px, py) {
        // Lógica de detección de clic (COLISIÓN BÁSICA)
        return (
            px > this.x && 
            px < this.x + this.ancho &&
            py > this.y && 
            py < this.y + this.alto
        );
    }
}
