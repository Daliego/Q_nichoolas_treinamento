import prompt from 'prompt-sync'

export const input = prompt({
    sigint: false
})

export function print(mensagem, ...optionalParams){
    console.log(mensagem, ...optionalParams)
}

export function get_number(){
    const numero = Number(input('Digite um numero: '))
    return numero
}