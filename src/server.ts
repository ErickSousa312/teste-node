import { calcAreaRetangulo } from "./functions/CalcRetangulos";
import { TypeRetangulo } from "./@types/retagulos";
import { awaitCalcFatorial, calcFatorial } from "./functions/CalcFatorial";
import { caculateAge } from "./functions/CalcAge";
import { maior, media, menor } from "./functions/CalcNotas";
import { arrayManipu } from "./functions/Arrays";

// 1 Questão
const dimensoesRetangulo:TypeRetangulo = {
    altura: 15,
    largura:15
}
calcAreaRetangulo(dimensoesRetangulo)
  .then((response) => {
    console.log('A área do retângulo é:', (response));
  })
  .catch((error) => {
    console.error('Erro ao calcular a área:', error.message);
  });


// 2 questão
const numFatorial = 5
awaitCalcFatorial(numFatorial)//esse await foi um teste
    .then((response) => {
        console.log(`o fatorial de ${numFatorial} é: ` , response);
    })
    .catch((error) => {
        console.error('Erro ao calcular a área:', error.message);
    });


// 3 questão
const DataAniversário = '2001-06-16'
caculateAge(new Date(DataAniversário))
.then((response) => {
    console.log(`Sua idade é: `, (response));
})
.catch((error) => {
    console.error('Erro ao calcular a área:', error.message);
});


// 4 questão 

const notas: number[] = [5, 7, 9, 5, 10, 3];

media(notas)
    .then((response) => {
        console.log(`Média: `, (response));
    })
    .catch((error) => {
        console.error('Erro ao calcular a área:', error.message);
    });


menor(notas)
    .then((response) => {
        console.log(`menor nota: `, (response));
    })
    .catch((error) => {
        console.error('Erro ao calcular a área:', error.message);
    });

maior(notas)
    .then((response) => {
        console.log(`maior nota: `, (response));
    })
    .catch((error) => {
        console.error('Erro ao calcular a área:', error.message);
    });

// 5 questão ta no arquivo Arrays.ts

const numeros = [10, 5, 3, 8, 2, 10, 5];
arrayManipu(numeros)