import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()
function main(){
     const numero1 = get_number()
     const numero2 = get_number()
     let contador = 1
     while (!(eh_divisivel(contador, numero1) && eh_divisivel(contador, numero2))){
          contador++
     }
     console.log(`O mmc do ${numero1} e do ${numero2} é ${contador}`)

}

function eh_divisivel(numero1, numero2){
     if (numero1 % numero2 === 0){
          return true
     }
     return false
}

main()