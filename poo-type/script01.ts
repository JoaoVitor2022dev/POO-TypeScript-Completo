// // objetos e class 

// // parte 01 

 class Pessoa1 { 
    // name:string; 
    // idade:number; 
} 

 let pe1 = new Pessoa1(); 

// pe1.idade = 21 ; 
//pe1.name = 'vitor lima'; 



// // parte 2    // com functions construtora 




 class Pessoa2 { 
   constructor(n:string, i:number){
     this.nome = n; 
     this.idade = i; 
   }
     nome: string ; 
     idade: number ;
 }

 let p1 = new Pessoa2('vitor lima', 35 ); 

 console.log(`nome: ${p1.nome} e, idade: ${p1.idade}`); 



 

// parte 03  com classe sendo exportada 


 class Carro { 
     constructor(r: number, p: number, m: string){
         this.roda = r; 
         this.modelo = m; 
         this.porta = p; 
     }
     roda:number; 
     porta:number; 
     modelo:string;
 }

 let c1 = new Carro(4,4,'etios toyota');

 console.log(`meu carro é do modelo: ${c1.modelo} e tem a quantidade portas:${c1.porta}, e quantidade de rodas: ${c1.roda}`); 


export default class Paciente { 
    constructor(c: number, f: number , e: number, n: string , i: number ){ 
        this.coracao = c; 
        this.figado = f ;
        this.estomago = e;
        this.nome = n;
        this.idade = i; 
    }
    coracao: number ; 
    figado:  number; 
    estomago: number; 
    nome: string;  
    idade:number;
} 


let pa1 = new Paciente(1,1,1,'Tayane',26); 
let pa2 = new Paciente(2,2,3, 'vitor lima', 21); 

console.log(` Paciente tem ${pa1.coracao}- coração, e ${pa1.figado}- figado, e ${pa1.estomago} estamgo , e o nome da paciemte é ${pa1.nome} e sua idade é ${pa1.idade} anos`); 
console.log(` Paciente tem ${pa2.coracao}- coração, e ${pa2.figado}- figado, e ${pa2.estomago} estamgo , e o nome da paciemte é ${pa2.nome} e sua idade é ${pa2.idade} anos`); 
