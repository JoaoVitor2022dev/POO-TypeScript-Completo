"use strict";
// herança e polimorfidmo 
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(t, n, i) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }
    comunicar() {
        console.log("ola sou da metodo da class mae ");
    }
}
exports.default = Animal;
class Cachorro extends Animal {
    constructor(t, n, i, r) {
        super(t, n, i);
        this.raça = r;
    }
    latir() {
        super.comunicar(); // super significa que estamos pegando o metodo da class mae 
    }
}
class Pessoa extends Animal {
    constructor(t, n, i, c) {
        super(t, n, i);
        this.cor = c;
    }
    comunicar() {
        console.log("ola sou da metodo da class Pessoa ");
    }
}
let c1 = new Cachorro("cachorro", 'bob', 2, 'bull-dog');
c1.latir();
let p1 = new Pessoa('humano', 'vitor', 21, 'marom');
// private  - apenas ´para aquela class
// protect  - para todas as class derivadas dessa  class protecd
