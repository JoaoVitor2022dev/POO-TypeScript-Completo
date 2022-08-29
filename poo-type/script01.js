"use strict";
// // objetos e class 
Object.defineProperty(exports, "__esModule", { value: true });
// // parte 01 
class Pessoa1 {
}
let pe1 = new Pessoa1();
// pe1.idade = 21 ; 
//pe1.name = 'vitor lima'; 
// // parte 2    // com functions construtora 
class Pessoa2 {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
}
let p1 = new Pessoa2('vitor lima', 35);
console.log(`nome: ${p1.nome} e, idade: ${p1.idade}`);
// parte 03  com classe sendo exportada 
class Carro {
    constructor(r, p, m) {
        this.roda = r;
        this.modelo = m;
        this.porta = p;
    }
}
let c1 = new Carro(4, 4, 'etios toyota');
console.log(`meu carro é do modelo: ${c1.modelo} e tem a quantidade portas:${c1.porta}, e quantidade de rodas: ${c1.roda}`);
class Paciente {
    constructor(c, f, e, n, i) {
        this.coracao = c;
        this.figado = f;
        this.estomago = e;
        this.nome = n;
        this.idade = i;
    }
}
exports.default = Paciente;
let pa1 = new Paciente(1, 1, 1, 'Tayane', 26);
let pa2 = new Paciente(2, 2, 3, 'vitor lima', 21);
console.log(` Paciente tem ${pa1.coracao}- coração, e ${pa1.figado}- figado, e ${pa1.estomago} estamgo , e o nome da paciemte é ${pa1.nome} e sua idade é ${pa1.idade} anos`);
console.log(` Paciente tem ${pa2.coracao}- coração, e ${pa2.figado}- figado, e ${pa2.estomago} estamgo , e o nome da paciemte é ${pa2.nome} e sua idade é ${pa2.idade} anos`);
