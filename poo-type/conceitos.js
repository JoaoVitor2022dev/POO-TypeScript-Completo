"use strict";
// class e objetos .... 
'parte 1 - class e objets';
// class - 
/* class sao os projetos 'aquitetonicos'. ou seja, sao modelos de implementaçaõ que possuem
atributos (caracteristica) e metodos (ações); */
// objetos 
/* objetos sao os resultados das classes, nao existir uma objeto sem uma class.
é a 'materizaçaõ' de uma classe; */
'parte 2 '; // publico protegido privado; 
// atributos: sao informaçoes sobre class ; 
// metodos : sao açoes de uma classe; 
'abstração';
// é o poder de abstrair aquilo que não é importante. 
/* po exemplo, crie uma class/objeto, contato para nossa
agenda, precisamos saber se esse contao é brasiliro, ingles?
precisamos saber o que é impotante como numeros do telefone e email, que é
importante */
'polimorfismo - sobrescrita e sobrecarga';
// class e objetos .... 
//  sobreescrita
class animal {
    comunicar() {
        console.log('oi tudo bbem ? ');
    }
}
class gato extends animal {
    comicar() {
        console.log("miau miau");
    }
}
///  sobrecarga 
class calcular {
    somar(x, y) {
        return x + y;
    }
    somar02(x, y, z) {
        return x + y + z;
    }
    somar03(x, y, w, z) {
        return x + y + w + z;
    }
}
'composiçaõ'; /// 
/* a programação orientada a objeto nos oportuniza criar ujm objeto com
outros objetos. ou seja, voce pode criar um objeto sala de aula que tem um objeto professor e vario
alunos. tambem pode criar um objeto carro com varios outros objetos, vejamos*/
