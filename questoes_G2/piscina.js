import { get_number} from './io_utils.js'
import { readFileSync } from 'fs'

const lines = readFileSync('dimecoes.txt', 'utf-8').split('\r\n')
function main(){
    const [largura, comprimento, altura] = lines[0].split(' ').map(Number)
    const volume = (largura * comprimento * altura)/1000
    const volume_recomendavel = 85/100 * volume
    const preço_agua = lines[1]
    const gasto_enchendo = encher_piscina(preço_agua, volume_recomendavel)
    const gasto_mensal = gasto_todo_mes(preço_agua, volume_recomendavel)

    console.log(`O volume recomedável é ${volume_recomendavel}`)
    console.log(`O gasto para encher é ${gasto_enchendo}.00 reais`)
    console.log(`O gasto mensal é ${gasto_mensal}.00 reais`)

}

function encher_piscina(preço_agua, volume_recomendavel){
    if (volume_recomendavel <= 1000){
        return preço_agua 
    }else{
        return (preço_agua * Math.floor(volume_recomendavel/1000)) + preço_agua 
    }
}

function gasto_todo_mes(preço_agua, volume_recomendavel){
    if ((10/100 * volume_recomendavel) <= 1000){
        return preço_agua 
    }else{
        return (preço_agua * Math.floor(10/100 * volume_recomendavel/1000)) + preço_agua 
    }
}

main()