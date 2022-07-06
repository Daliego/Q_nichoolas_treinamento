import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function get_number(frase){
    const numero = Number(input(frase))
    return numero
}

function numero_aleatorio(maximo, minimo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo) 
}

export function ordenador_de_vetores(vetor){
    let auxiliar
    for (let i = vetor.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (vetor[j] > vetor[j+1]){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
    return vetor
}

export function maior_numero(maior, menor){
    return maior > menor
}

