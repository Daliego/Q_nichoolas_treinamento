import prompt from 'prompt-sync'
import {get_number} from './io_utils.js'
const input = prompt()
function main(){
     const peso = get_number('Digite seu peso: ')
     const altura = get_number('Digite a sua altura: ')
     const imc = peso / altura**2
     if (imc > 24.9){
          console.log('Você está sobrepeso!')
          sequência_para_perder_peso(peso, altura)
          
     }else if (imc < 19.8){
          console.log('Você está acima do peso!')
          para_ganhar_peso(peso, altura)

     }else{
          console.log('Não é necessário mudanças de dieta ou de exercícios!')
     }
}

function sequência_para_perder_peso(peso, altura){
     const peso_alvo = 24.9 * altura**2
     const peso_para_perder = peso - peso_alvo
     console.log(`Você deve perder ${peso_para_perder.toFixed(2)}kg em 90 dias.`)
     const calorias = get_number('Quantas calorias você injere diariamente? ')
     const deficit_calorico = (peso_para_perder * 7000)/22 * 3
     console.log(`Você deve ter em dias normais um gasto de ${deficit_calorico.toFixed(2)} calorias.`)
     console.log(`Você deve ter em sábados um gasto de ${(deficit_calorico/2).toFixed(2)} calorias.`)
}

function para_ganhar_peso(peso, altura){
     const peso_alvo = 19.8 * altura**2
     const peso_para_ganhar = peso_alvo - peso
     console.log(`Você deve ganhar ${peso_para_ganhar.toFixed(2)}kg em 90 dias.`)
     const ganho_diario = (peso_para_ganhar*7000)/22*3
     console.log(`Você deve ter em dias normais um ganho de ${ganho_diario.toFixed(2)} calorias.`)

}
main()