
 // define el area de clic de cada ítem escondido y su estado ,encontrado ono encontrado
 
     class ObjetoEscondido {
         constructor(x, y, ancho, alto, nombre,indiceImagen) { //empezamos a poner los atributos a las clases
          this.x = x;         // pos X donde el objeto esta escondido
          this.y = y;         // pos Y
          this.ancho = ancho; 
           this.alto = alto;
          this.nombre = nombre;
           this.indiceImagen = indiceImagen;
          this.encontrado = false; 
    }
    
    // mettodo para verificar si el clic ocurrio dentro de su area
         fueClickeado(px, py) {
        // solo puede ser clicado si todavia no fue encontrado
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
    
  
    }
