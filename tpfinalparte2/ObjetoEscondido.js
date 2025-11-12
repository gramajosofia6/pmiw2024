/**
 * Clase ObjetoEscondido
 * Define el área de clic de cada ítem escondido y su estado (encontrado/no encontrado).
 */
class ObjetoEscondido {
    constructor(x, y, ancho, alto, nombre) {
        this.x = x;         // Posición X donde el objeto está ESCONDIDO
        this.y = y;         // Posición Y
        this.ancho = ancho; 
        this.alto = alto;
        this.nombre = nombre;
        this.encontrado = false; // Estado crucial
    }
    
    // Método para verificar si el clic ocurrió dentro de su área
    fueClickeado(px, py) {
        // Solo puede ser clicado si todavia no fue encontrado
        if (!this.encontrado) {
             return (
                px > this.x && 
                px < this.x + this.ancho &&
                py > this.y && 
                py < this.y + this.alto
            );
        }
        return false; 
    }
    
    // cuadrados rojos para posicionar los objetos (esto se cambia dspues para poner las imagenes de los objetos
    dibujarArea() {
        if (!this.encontrado && juego.estado === "JUGANDO") {
            noFill();
            stroke(255, 0, 0, 150); 
            strokeWeight(2);
            rect(this.x, this.y, this.ancho, this.alto);
        }
    }
}
