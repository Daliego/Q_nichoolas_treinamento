import { get_number, input } from "./io_utils.js"

function main(){
    const salario = get_number('Digite o seu salário: ')
    const porcentagem = get_number('Digite a porcentagem que será investida mensalmente: ')
    const investimento_mesal = salario * porcentagem/100
    const juros_mensais = receber_juros(0.01, 1.00)
    const objetivo = input('Digite qual o objetivo em investir o dinheiro: ')
    const total_monetario = get_number('Digite o valor necessário para completar o objetivo: ')

    const tempo = tempo_necessario(total_monetario, juros_mensais, investimento_mesal)
    console.log(`O tempo necessário para atingir o objetivo é ${tempo}`)
}

function receber_juros(min, max){
    let juros = get_number('Digite a porcentagem de juros: ')
    while (juros < min && juros > max){
        console.log('Você digitou uma porcentagem fora do limite.')
        juros = get_number('Digite a porcentagem de novamente: ')
    }
}

function tempo_necessario(objetivo, porcentagem_juros, investimento){
    let total = investimento + (investimento * porcentagem_juros/100)
    let contador = 1
    while (total < objetivo){
        total = (total + investimento) + porcentagem_juros * (total + investimento)
        contador++
    }
    if (contador <= 12){
        return `${contador + 1} mes(es)`
    }else{
        return `${Math.floor(contador / 12)} anos e ${contador % 12} anos.`
    }
}

main()