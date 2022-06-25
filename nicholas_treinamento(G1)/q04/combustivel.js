import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()
function main(){
     const redimendo_alcool = get_number()
     const redimendo_gasolina = get_number()
     const distancia = Number(input('Digite a distância a ser percorrida em km: '))
     const preco_gasolina = Number(input('Digite o preço da gasolina: '))
     const preco_alcool = Number(input('Digite o preço do alcool: '))

     const litros_de_alcool = redimendo_alcool * distancia
     const litros_de_gasolina = redimendo_gasolina * distancia

     const valor_total_alcool = litros_de_alcool * preco_alcool
     const valor_total_gasolina = litros_de_gasolina * preco_gasolina

     console.log(`O valor se usar gasolina é ${valor_total_gasolina},00 
     reais e se usar alcool é ${valor_total_alcool},00 reais `)
}


main()