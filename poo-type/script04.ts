// classes Abstratas e interfaces  

// conceito de abstraçaõ -  é só pegar o que importa para nós;  exemplo o meu gato nasceu em qual bairro ? /-/- isso nao é importate apenas o peso e a idade dele sao relevante


      //  class abstratas

// abstract class Gato { 
//     nome: string; 
//     cor: string; 

//     constructor(nome: string , cor: string){
//         this.nome = nome; 
//         this.cor = cor; 
//     }
 
//     miar(){
//         console.log('miau'); 
//     }
// }

// class Andromeda extends Gato {
//     idade: number; 
    
//     constructor(nome: string , cor: string , idade: number){
//       super(nome,cor); 
//       this.idade = idade; 
//     }
// }

// let gato01 = new Andromeda('Andromeda', 'branca', 1 );

// console.log(Gato);
// console.log(Andromeda); 

// console.log(gato01);

// gato01.miar(); // esse aqui estava na class mae e foi para o miar na class extendida gato...


                              //  interfaces 

 // tem como usar o (?) para mostra que é opcional  mais pode usar tambem o (  string | number ) 


  export default interface Rato {
       nome: string; 
    // idade?: number | string;  // tambem pode ser usado
       idade: number | string;  
       fugir(): void; 
  }



  class Jerry implements Rato {
    nome: string; 
     // idade?: number | string;  // tambem pode ser usado
    idade: number | string; 

    constructor(n: string , i: number | string ) {
       this.nome = n; 
       this.idade = i; 
    }

    fugir(): void {
        console.log('corre lá vem o tom'); 
    }
  }

  let r = new Jerry('Jerry', '2 anos'); 

 r.idade = '2 anos'
 console.log(r.idade);
 console.log(r.nome); 



 // a clas nao obriga a usar o metho da class mae no filho 

 // mais a interface origa a usar o methodo descrito acima; na mae... se nao o programa da erro
 