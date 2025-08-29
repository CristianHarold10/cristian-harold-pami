let n1 = 2;
let n2 = 5;


//Pascal case = NomeVariavel (primeira letra da palavra)
// e semmpre maiuscula)
//Camel Case = nomeVarieavel (primeira letra da palavra é)
// minuscula e o restante comeca com maiuscula )
// Kebab Case = nome variavel (tanto faz se comeca com maiuscula ou minuscula o importante e separar por hifen)
// Snake Case = nome_variavel (tanto faz se comeca com maiuscula ou minuscula, o importante e separar por underline)
function Soma () {
    console.log(5+12);
}
Soma();
//funcão simples que nao recebe parametros 

function SomaComParametros (v1,v2){
    let resultado = v1 + v2 ;
    return resultado;
}
console.log(SomaComParametros (n1,n2));