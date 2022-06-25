import {input} from './io_utils.js'

function main(){
     let atual = Number(input('Digite um numero: '))
     let sucessor = Number(input('Digite um numero: '))
     let par = 0
     let impar = 0
     let positivo = 0 
     let negativo = 0

     if (eh_par(atual)){
          par++
     }else{
          impar++
     }

     if (eh_positivo(atual)){
          positivo++
     }else{
          negativo++
     }
     if (eh_par(sucessor)){
          par++
     }else{
          impar++
     }

     if (eh_positivo(sucessor)){
          positivo++
     }else{
          negativo++
     }

     while (!eh_multiplo(atual, sucessor)){
          atual = sucessor
          sucessor = Number(input('Digite um numero: '))
          if (eh_par(sucessor)){
               par++
          }else{
               impar++
          }
          
          if (eh_positivo(sucessor)){
               positivo++
          }else{
               negativo++
          }
          
     }
     console.log(`A quantidade de numeros positivos é ${positivo}, de negativos ${negativo}, de pares ${par} e de impares ${impar}`)
}

function eh_multiplo(numero1, numero2){
     if (numero1 % numero2 === 0 || numero2 % numero1 === 0){
          return true
     }else{
          return false
     }
}

function eh_par(numero){
     if (numero % 2 === 0){
          return true
     }else{
          return false
     }
}

function eh_positivo(numero){
     if (numero > 0){
          return true
     }else if (numero < 0){
          return false
     }
}

main()