import { TypeError } from "../@types/errorType";

function media(vetor: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            if (vetor.length === 0) {
                reject({ error: "Vetor vazio" } as TypeError);
            }
            const total = vetor.reduce((acc, curr) => acc + curr, 0);
            resolve(total / vetor.length)

        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    })
}

function menor(vetor: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            if (vetor.length === 0) {
                reject({ error: "Vetor vazio" } as TypeError);
            }
            resolve(Math.min(...vetor))

        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    })
}


function maior(vetor: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            if (vetor.length === 0) {
                reject({ error: "Vetor vazio" } as TypeError);
            }
            resolve(Math.max(...vetor))
        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    })

}

export{media, maior, menor}
