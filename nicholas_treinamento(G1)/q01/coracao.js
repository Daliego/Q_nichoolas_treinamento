import prompt from 'prompt-sync'
const input = prompt()
function main(){
    const fc_atual = Number(input('Digite a sua fc atual: '))
    const idade = Number(input('Digite a sua idade: '))
    const fc_max = 220 - idade
    const fc_porcentagem = (fc_atual/fc_max) * 100
    const zona = zonas_fc(fc_porcentagem)
    console.log(`A zona é ${zona}`)
    limites_zonas(fc_max) 
}


function zonas_fc(fc_porcentagem){
     if (fc_porcentagem > 50 && fc_porcentagem < 60){
          return 'Atividade Moderada'
     }else if (fc_porcentagem < 70){
          return 'Controle de peso'
     }else if (fc_porcentagem < 80){
          return 'Aeróbica'
     }else if (fc_porcentagem < 90){
          return 'Anaeróbica'
     }else if (fc_porcentagem <100){
          return 'Esforço máximo'
     }
}


function limites_zonas(fc_max){
     const atividade_moderada = 60/100 * fc_max
     const controle_peso = 70/100 * fc_max
     const aerobico = 80/100 * fc_max
     const anaeróbica = 90/100 * fc_max
     const esforço_max =  fc_max
     console.log(atividade_moderada, controle_peso, aerobico, anaeróbica, esforço_max)
}
main()