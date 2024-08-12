class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);
        this.puertas = puertas;
    }

    abrirPuertas() {
        console.log(`Abriendo las ${this.puertas} puertas.`);
    }
}

const miCoche = new Coche('Toyota', 'Corolla', 4);
miCoche.encender();
miCoche.abrirPuertas();
