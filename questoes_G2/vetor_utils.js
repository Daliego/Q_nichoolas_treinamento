//import { maior_numero } from './io_utils.js'
export function criar_vetor(){
    const tamanho = Number(input('Digite o tamanho do vetor: '))
    return new Array(tamanho)
}

export function vetor_com_numeros_aleatorios(vetor){
    const maximo = get_number('Digite o valor máximo do vetor')
    const minimo = get_number('Digite o valor minimo do vetor')
    for (let i = 0; i < vetor.length; i++){
        vetor[i] = numero_aleatorio(maximo, minimo)
    }
}

export function ordenar_vetores(vetor){
    let auxiliar
    for (let i = vetor.length; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (maior_numero(vetor[j], vetor[j+1])){
                auxiliar = vetor[j+1]
                vetor[j+1] = vetor[j]
                vetor[j] = auxiliar
            }
        }
    }
}

function maior_numero(maior, menor){
    return maior > menor
}

