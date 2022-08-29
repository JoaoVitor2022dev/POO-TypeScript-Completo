"use strict";
// encapsulamento  
class Carro {
    constructor(c, a, v) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }
    getValor() {
        return this.valor;
    }
    setValor(valor) {
        this.valor = valor;
    }
    getLog() {
        console.log('segue o log desta informação');
        this.getInfo();
    }
    getInfo() {
        console.log(`${this.cor} , ${this.ano} , ${this.getValor()}`);
    }
}
// getters - obter os valores dos nossos atrubutos 
// e setters  - para modificar os valores dos nossos atributos 
let c = new Carro('preto', 2020, 20000);
console.log(c.getLog());
// public - todo mundo tem acesso, e todos podem alterar; 
// proteced - só a sua class pode usar e suas subsclass; 
// private - somente que extancia pode utilizar essa valor; 
