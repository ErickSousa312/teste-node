const lodash = require('lodash');


function arrayManipu(numeros:number[]):void{
// Fui fazer tarde e tava sem tempo professor 
    const numerosOrdenados = lodash.sortBy(numeros);
    console.log('Array ordenado:', numerosOrdenados);
    
    const numerosSemDuplicatas = lodash.uniq(numeros);
    console.log('Array sem duplicatas:', numerosSemDuplicatas);
    
    const numerosPares = lodash.filter(numeros, (num:number) => num % 2 === 0);
    console.log('Números pares:', numerosPares);
    
    const numerosDobrados = lodash.map(numeros, (num:number) => num * 2);
    console.log('Números dobrados:', numerosDobrados);
    
    const somaElementos = lodash.sum(numeros);
    console.log('Soma dos elementos:'+ somaElementos+ "\n\n");
}

export {arrayManipu}
