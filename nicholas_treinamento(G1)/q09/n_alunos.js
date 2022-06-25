import prompt from 'prompt-sync'
import { get_number } from './io_utils.js'
import { readFileSync } from 'fs'
const input = prompt()

function main(){
     const alunos_notas = readFileSync('arquivos.txt', 'utf-8').split('\r\n')
     let contador = 0 
     let nota1, nota2, nota3
     let aluno 
     let media = 0 
     let aprovados = 0
     let reprovados = 0
     let prova_final = 0
     let reprovado_por_falta = 0
     let soma_de_notas = 0

     while (alunos_notas.length > contador){
          aluno = alunos_notas[contador].split(';')
          nota1 = Number(aluno[1])
          nota2 = Number(aluno[2])
          nota3 = Number(aluno[3])
          media = media_ponderada(nota1, nota2, nota3)
          //eh_aprovado(media, aluno[4], aprovados, prova_final, reprovados, reprovado_por_falta)
          const faltas = aluno[4].split('/').map(Number)
          const porcentagem_faltas = (faltas[0]/faltas[1])*100

     if (media >= 7){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               aprovados++
          }
     }else if (media >= 4){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               prova_final++
          }
     }else if (media < 4){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               reprovados++
          }
     }
          /* if (aprovacao === 'Aprovado'){
               aprovados++
          }else if (aprovacao === ''){
               reprovados++
          }else if (aprovacao === 'em_prova_final'){
               prova_final++
          }else if (aprovacao === 'reprovado_falta'){
               reprovado_por_falta++
          } */
          soma_de_notas += media
          contador++
          console.log(media.toFixed(2))
     }
     let media_classe = media_notas_classe(soma_de_notas, alunos_notas.length)
     
     let menu = `A média da classe é ${media_classe.toFixed(2)}, `
     menu += `O número de aprovados é ${aprovados.toFixed(2)}, `
     menu += `O número de reprovados é ${reprovados.toFixed(2)}, `
     menu += `O número de alunos em prova final é ${prova_final.toFixed(2)}, `
     menu += `O número de alunos reprovados por falta é ${reprovado_por_falta.toFixed(2)}.`

     console.log(menu)

}

function media_ponderada(nota1, nota2, nota3){
     const media_ponderada = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3))/6
     return media_ponderada
}

function eh_aprovado(media, aluno, aprovados, prova_final, reprovados, reprovado_por_falta){
     const faltas = aluno.split('/').map(Number)
     const porcentagem_faltas = (faltas[0]/faltas[1])*100

     if (media >= 7){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               aprovados++
          }
     }else if (media >= 4){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               prova_final++
          }
     }else if (media < 4){
          if (porcentagem_faltas > 25){
               reprovado_por_falta++
          }else{
               reprovados++
          }
     }
}

function media_notas_classe(soma_de_notas, qtd_alunos){
     const media = soma_de_notas/qtd_alunos
     return media
}
main()