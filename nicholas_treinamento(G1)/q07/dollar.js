import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()
function main(){
     const cotacao_dolar = Number(input('Digite a contação atual do dólar: '))
     const qtd_dolares = Number(input('Digite a quantidade de dólares que vão ser comprados: '))
     const iof = Number(input('Digite a taxa do iof: '))

     const preço = (cotacao_dolar * qtd_dolares)
     const preço_total = preço + iof/100 * preço

     console.log(`O preço total a ser pago é R$${preço_total.toFixed(2)} reais`)
}



main()