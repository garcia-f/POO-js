class Dispositivo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    encender() {
        throw new Error("El método 'encender' debe ser implementado");
    }
}

class Telefono extends Dispositivo {
    encender() {
        console.log(`El telefono ${this.marca} ${this.modelo} está encendido.`);
    }
}

const miTelefono = new Telefono('Apple', 'iPhone 12');
miTelefono.encender();
