import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()
function main(){
     const qtd_parcelas = parcelas()
     const valor_emprestimo = emprestimo()
     const iof = 0.38/100 * valor_emprestimo + 0.0082/100 * valor_emprestimo * qtd_parcelas * 2
     const valor_total = iof + valor_emprestimo
     const selic = taxa_de_selic(qtd_parcelas)
     const juros = valor_total * qtd_parcelas * selic/100
     const renda_mensal = Number(input('Digite a sua renda mensal: '))
     const montante = juros + valor_total
     const valor_parcelas = montante/qtd_parcelas

     console.log(`O valor do IOF é ${iof.toFixed(2)}`)
     console.log(`O valor do juros a pagar é ${juros.toFixed(2)} reais`)
     console.log(`O valor total a pagar é ${montante.toFixed(2)} reais`)
     console.log(`O valor total das parcelas é ${qtd_parcelas}x de ${valor_parcelas.toFixed(2)} reais`)
     console.log(`O empréstimo foi ` + eh_aprovado(valor_parcelas, renda_mensal))
}

function emprestimo(){
     let valor = Number(input('Digite o valor do empréstimo: '))
     while (valor < 1212.00){
          valor = Number(input('Digite o valor do empréstimo: '))
     }
     return valor
}

function parcelas(){
     let parcelas = Number(input('Digite a quantidade de parcelas: '))
     while (parcelas < 2 || parcelas > 24){
          parcelas = Number(input('Digite a quantidade de parcelas: '))     
     }
     return parcelas
}

function taxa_de_selic(numero){
     const taxa = Number(input('Digite a taxa se selic: '))
     if (numero <= 6){
          return 50/100 * taxa
     }else if (numero < 12){
          return 75/100 * taxa
     }else if (numero < 18){
          return taxa
     }else{
          return 130/100 * taxa
     }
}

function eh_aprovado(valor, renda){
     const porcentagem_renda = renda * 40/100
     if (valor > porcentagem_renda){
          return 'Reprovado'
     }else{
          return 'Aprovado'
     }
}
main()