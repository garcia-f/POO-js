class Animal {
    hacerSonido() {
        // console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau!");
    }
}

const animales = [new Perro(), new Gato(), new Animal()];
animales.forEach(animal => animal.hacerSonido());
