import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
import { readFileSync } from 'fs'
const input = prompt()

function main(){
     const frase = input('Digite uma frase: ').split(' ')
     const qtd_caracteres = caracteres(frase)
     const pares = palavras_pares(frase)
     const impares = palavras_impares(frase)
     console.log(`A frase possui ${qtd_caracteres} caracterere`)
     console.log(`A frase possui ${impares} palavras impares`)
     console.log(`A frase possui ${pares} palavras pares`)
}

function caracteres(frase){
     let contador = 0
     let tamanho = 0
     while (contador < frase.length){
          tamanho += frase[contador].length 
          contador++
     }
     return tamanho
}

function palavras_pares(frase){
     let contador = 0
     let atual = 0
     let pares = 0
     while (contador < frase.length){
          atual = frase[contador].length
          if (atual % 2 === 0){
               pares++
          }
          contador++
     }
     return pares
}

function palavras_impares(frase){
     let contador = 0
     let atual = 0
     let impar = 0
     while (contador < frase.length){
          atual = frase[contador].length
          if (atual % 2 === 1){
               impar++
          }
          contador++
     }
     return impar
}
main()