import prompt from 'prompt-sync'
import { get_number, input } from './io_utils.js'
function main(){
     const momento_inicial = (input('Digite a hora do mometo inicial:')).split('/').map(Number)
     const momento_final = (input('Digite a hora do mometo final:')).split('/').map(Number)
     if (momento_final > momento_inicial){
          intervalo_de_tempo(momento_final, momento_inicial)
     }else{
          intervalo_de_tempo(momento_inicial, momento_final)
     }
}

function intervalo_de_tempo(momento1, momento2){
     const minutos_momento1 = momento1[0] * 60 + momento1[1] 
     const minutos_momento2 = momento2[0] * 60 + momento2[1] 
     const intervalo = minutos_momento1 - minutos_momento2
     const horas = Math.floor(intervalo / 60)
     const minutos = intervalo % 60 
     
     console.log(`O intervalo é de ${horas} horas e ${minutos} minutos.`)
}
main()