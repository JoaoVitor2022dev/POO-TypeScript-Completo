// herança e polimorfidmo 


export default class Animal {  
    tipo: string; 
    nome: string; 
    idade: number; 

  constructor (t: string, n: string , i: number ) { 
    this.tipo = t; 
    this.nome = n; 
    this.idade = i; 
  }

  protected comunicar(): void{
     console.log("ola sou da metodo da class mae "); 
  }

}


class Cachorro extends Animal {
    raça: string; 
  
    constructor(t: string, n: string , i: number , r: string ){
      super(t,n,i); 
      this.raça = r; 
    }

    public latir() {
      super.comunicar(); // super significa que estamos pegando o metodo da class mae 
    }
}


class Pessoa extends Animal { 
    cor: string; 

    constructor(t: string, n: string , i: number , c: string){
      super(t,n,i); 
      this.cor = c; 
    }

    public comunicar(): void{
        console.log("ola sou da metodo da class Pessoa "); 
     }
}


let c1 = new Cachorro("cachorro", 'bob', 2 , 'bull-dog'); 
c1.latir(); 

let p1 = new Pessoa('humano', 'vitor', 21 , 'marom'); 
 
// private  - apenas ´para aquela class

// protect  - para todas as class derivadas dessa  class protecd