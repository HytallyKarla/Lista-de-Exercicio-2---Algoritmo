/*5. Faça um algoritmo que receba 5 números e para cada um deles exibir na tela qual o
resultado da sua multiplicação pelos próximos 5 números em sequência.*/


var numerodatabuada = 0 

for (var contador = 0; contador < 5; contador++) {
    numerodatabuada = parseInt(prompt("Qual numero da tabuada você deseja?"))

    for (var multiplicador = numerodatabuada +1; multiplicador <= numerodatabuada + 5; multiplicador++){
        console.log(numerodatabuada, " * ", multiplicador, " = ", numerodatabuada * multiplicador)
    }
    }