class CuentaBancaria {
    #saldo; // propiedad privada

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(cantidad) {
        this.#saldo += cantidad;
    }

    obtenerSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria('Juan', 1000);
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 1500
