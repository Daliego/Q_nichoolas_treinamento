import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
const input = prompt()
function main(){
     const frase = input('Digite uma frase que contenha entr 60 e 180 caractere: ')
     const palavras = frase.split(' ')
     console.log(`A frase contém ${palavras.length} palavras`)
}

main()