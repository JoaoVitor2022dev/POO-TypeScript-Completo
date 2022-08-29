"use strict";
// classes Abstratas e interfaces  
Object.defineProperty(exports, "__esModule", { value: true });
class Jerry {
    constructor(n, i) {
        this.nome = n;
        this.idade = i;
    }
    fugir() {
        console.log('corre lá vem o tom');
    }
}
let r = new Jerry('Jerry', '2 anos');
r.idade = '2 anos';
console.log(r.idade);
console.log(r.nome);
// a clas nao obriga a usar o metho da class mae no filho 
// mais a interface origa a usar o methodo descrito acima; na mae... se nao o programa da erro
