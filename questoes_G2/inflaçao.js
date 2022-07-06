import { get_number, input } from "./io_utils.js"

function main(){
    const salario_antigo = get_number('Digite o valor do salário a 12 meses: ')
    const inflaçao = get_number('Digite a porcentagem da inflação: ')
    const novo_salario = aumento_salarial(salario_antigo, inflaçao)
    console.log(`O salário após o aumento inflacionário é ${novo_salario},00 reais`)
}

function aumento_salarial(salario, inflaçao){
    const aumento = inflaçao/100 * salario
    let novo_salario = salario
    while (novo_salario < (salario + aumento)){
        menubar()
        let cedula = receber_cedula()
        novo_salario += cedula
    }
    return novo_salario
}

function menubar(){
    let menu = '*****CÉDUALAS*****'
    menu += '\n2.00 reais'
    menu += '\n5.00 reais'
    menu += '\n10.00 reais'
    menu += '\n20.00 reais'
    menu += '\n50.00 reais'
    menu += '\n100.00 reais'
    menu += '\n200.00 reais'
    console.log(menu)
}

function receber_cedula(){
    let cedula = get_number('Digite uma cédula para adicionar ao salário: ')
    while(!eh_cedula(cedula)){
        console.clear
        console.log('Você digitou uma cédula inexistente.')
        menubar()
        cedula = get_number('Digite uma nova cédula para adicionar ao salário: ') 
    }
    return cedula
}

function eh_cedula(cedula){
    if (cedula === 2 || cedula === 5 || cedula === 10 || cedula === 20 || cedula === 50 || cedula === 100 || cedula === 200){
        return true
    }
    return false
}

main()