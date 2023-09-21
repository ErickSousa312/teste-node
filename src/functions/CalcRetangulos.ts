import { TypeRetangulo } from "../@types/retagulos";
import { TypeError } from "../@types/errorType";

function calcAreaRetangulo(dimensoes: TypeRetangulo): Promise<number| TypeError> {
    return new Promise((resolve, reject) => {
        try {
            if (dimensoes.altura <= 0 || dimensoes.largura <= 0) {
                reject({ error: "Erro nas dimensoes" } as TypeError);
            }
            const area:number = dimensoes.altura * dimensoes.largura;
            resolve(area);

        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    })
}

export {calcAreaRetangulo}