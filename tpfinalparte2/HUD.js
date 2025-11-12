

class HUD {
    constructor() {
        this.yBarra = height - 70; // Posición fija en la parte inferior
        this.altoBarra = 70;
    }

   
    dibujar(tiempoRestante, objetos) {
        //  Fondo de la barra
        fill(196,57,247); 
        stroke(247,229,57);
        strokeWeight(2);
        rect(0, this.yBarra, width, this.altoBarra);

        let centroY = this.yBarra + this.altoBarra / 2;

        // 2. Mostrar el TIEMPO (Izquierda)
        fill(255, 255, 0); 
        textSize(30);
        textAlign(LEFT, CENTER);
        text(`${tiempoRestante}s`, 20, centroY);
        
        // 3. Mostrar la lista de objetos a encontrar (Centro)
        let xPos = 120; // Posición inicial
        textSize(16);
        textAlign(LEFT, CENTER);
        
        // Itera sobre el arreglo de ObjetoEscondido 
        for (let obj of objetos) {
            // El color cambia si el objeto fue encontrado
            let colorTexto = obj.encontrado ? color(0, 255, 0) : color(255); 
            fill(colorTexto);
            text(obj.nombre, xPos, centroY);
            
            xPos += textWidth(obj.nombre) + 20; // Espaciado
        }
    }
}
