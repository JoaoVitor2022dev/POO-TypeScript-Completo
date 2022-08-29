// encapsulamento  

class Carro { 
   private cor: string; 
   private ano: number; 
   private valor: number; 

    constructor(c: string , a: number , v: number ){
         this.cor = c; 
         this.ano = a; 
         this.valor = v; 
    }

    public getValor() { // esse aqui é so para obter os valores 
       return  this.valor;  
    }

    public setValor (valor: number) { // esse aqui é para modificar 
        this.valor = valor; 
    }

    public getLog(){
        console.log('segue o log desta informação'); 
        this.getInfo();
    }

    private getInfo(){
        console.log(`${this.cor} , ${this.ano} , ${this.getValor()}`); 
    }
}

// getters - obter os valores dos nossos atrubutos 
// e setters  - para modificar os valores dos nossos atributos 


let c = new Carro('preto', 2020 , 20000); 

console.log(c.getLog());  


// public - todo mundo tem acesso, e todos podem alterar; 

// proteced - só a sua class pode usar e suas subsclass; 

// private - somente que extancia pode utilizar essa valor; 

