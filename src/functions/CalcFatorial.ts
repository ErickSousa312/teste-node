import { TypeError } from "../@types/errorType";

async function calcFatorial(numero: number): Promise<number | TypeError> {
    return new Promise((resolve, reject) => {
        try {
            if (numero === 0 || numero === 1) {
                resolve(1);
            } else {
                calcFatorial(numero - 1)
                    .then((resultadoFatorialAnterior) => {
                        if (typeof resultadoFatorialAnterior === 'number') {
                            const resultado = numero * resultadoFatorialAnterior;
                            resolve(resultado);
                        } else {
                            reject({ error: "Algo deu errado" } as TypeError);
                        }
                    })
                    .catch((error) => {
                        reject({ error: "Algo deu errado" } as TypeError);
                    });
            }
        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    });
}

async function awaitCalcFatorial(number:number) {
    const res = await calcFatorial(number)
    return res;
}

export { calcFatorial , awaitCalcFatorial};
