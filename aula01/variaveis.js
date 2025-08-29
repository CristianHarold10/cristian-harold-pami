// Comentario 
// javascript é uma linguagem fracamente tipada!
var texto = "Ola" //contém sempre uma string
let texto2 = "mundo" // ponto e virgula é opcionaç
const texto3 = "!" // aspas simples também serve para string!

console.log(texto, texto2, texto3)
// virgula concatena com espaco, enquanto o sinal de + deixa tudo junto 

text = 'Hello' 
let msg = `${texto} ${texto2} ${texto3}`
// use a crase junto de ${}  para concatenar 
// tambem
console.log(msg)


// texto 3 = teste 
// o exemplo acima mostra que e impossivel reatribuir um novo valor 
// a uma constante 
let numero = 4
console.log(typeof numero)

let obj = {nome:"harold", idade: 23}

console.log("nome da pessoa", obj.nome, "| idade do meliante:", obj.idade)
console.log(typeof obj)
//objeto e sempre uim elemento chave / valor
let arr = ['cristian', 'c','h','harold']
console.log(arr[2])
console.log(typeof arr)