import { TypeError } from "../@types/errorType"

function caculateAge (aniversario:Date):Promise<number|TypeError>{
    return new Promise((resolve, reject)=>{
        try {
            const hoje = new Date()
            let age = hoje.getFullYear() - aniversario.getFullYear()

            const birthMonth = aniversario.getMonth();
            const birthDay = aniversario.getDate();

            const mesAtual = hoje.getMonth();
            const diaAtual = hoje.getDate();

            if(mesAtual < birthMonth || (mesAtual === birthMonth && diaAtual < birthDay)){
                resolve(age-1)
            }

            resolve(age)

        } catch (error) {
            reject({ error: "Algo deu errado" } as TypeError);
        }
    })
}

export {caculateAge}