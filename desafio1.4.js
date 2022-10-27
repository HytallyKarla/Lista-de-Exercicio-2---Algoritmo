/*4. Desenvolva um programa que receba a nota, de 0 a 10, e o sexo de 10 alunos,
usando a estrutura FOR. No final, exiba no console:
a. A média geral dos alunos
b. Quantos homens enviaram as notas
c. Quantas mulheres tiveram nota acima de 7
d. Qual a maior nota entre os homens
Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de
alunos!*/


var nota 
var sexo = ""
var homem = 0
var mulher = 0
var mulher7 = 0
var media = 0
var somaNota = 0
var maiornota = 0

for (var contador = 1; contador <= 10; contador++) {
    nota = parseInt(prompt("nota de 0 a 10"))
    sexo = prompt("sexo dos alunos")

    console.log ("Aluno", contador, " - ", nota, " - ", sexo)

    somaNota = somaNota + nota

    if(sexo == "Homem" || sexo == "Homem"){
        homem++
    }if (sexo == "Mulher" || sexo == "Mulher"){
        mulher ++
    }
    
    if(sexo == "Mulher" && nota > 7 ){
        mulher7++
    }if(sexo == "Homem" && nota > maiornota){
        maiornota = nota
    }
}

media = somaNota / 10 
console.log("A média da turma é:", media)
console.log("Quantidade de alunos homens:", homem)
console.log("Quantidade de mulheres que tiraram nota acima de 7:", mulher7)
console.log("A maior nota entre os homens foi:", maiornota)
