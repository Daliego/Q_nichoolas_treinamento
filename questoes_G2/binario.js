import {get_number} from "./io_utils.js";
import {readFileSync} from 'fs'
function main(){
    const mensagem = receber_mensagem_binaria()
    verificar_mensagem(mensagem)
}

function receber_mensagem_binaria(){
    const lines = readFileSync('numeros_binarios.txt', 'utf-8').split('-')
    return lines
}

function verificar_mensagem(mensagem){
    for (let i = 0; i < mensagem.length; i++){
        if (mensagem[i].length !== 8){
            return console.log('Mensagem corrompida: Sequência de bits inválida.')
        }
    }
    if (eh_correta(mensagem)){
        console.log('Sequência de bits OK.') 
    }else{
        console.log('Mensagem corrompida: Caracteres inválidos.')
    }
}

function eh_correta(mensagem){
    for (let i = 0; i < mensagem.length; i++){
        if (!(eh_minuscula(mensagem[i]) || eh_numeros_de_0_9(mensagem[i]) 
            || eh_espaço(mensagem[i]))){
            return false
        }
    }
    return true
}

function eh_minuscula(binario){
    let decimal = transformar_em_decimal(binario)
        return (decimal >= 97 && decimal <= 122)
}



function eh_numeros_de_0_9(binario){
    let decimal = transformar_em_decimal(binario)
        return (decimal >= 48 && decimal <=57)
}

function transformar_em_decimal(binario){
    let decimal
    let numero_decimal = 0
    let j = binario.length - 1
        for (let i = 0; i < binario.length; i++){
            decimal = Number(binario[i]) * 2**j
            numero_decimal += decimal
            j--
        }
    return numero_decimal
}

function eh_espaço(binario){
    let decimal = transformar_em_decimal(binario)
    return (decimal === 32)
}

main()