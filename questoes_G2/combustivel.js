import { input, get_number } from "./io_utils.js";

function main(){
    const preço_gasolina = get_number('Digite o preço da gasolina: ')
    let petrobras = 0.36 * preço_gasolina
    let icms = 0.27 * preço_gasolina
    let etanol_anidro = 0.13 * preço_gasolina
    let revenda_distribuiçao = 0.14 * preço_gasolina
    let paseps_cofins = 0.10 * preço_gasolina
    console.log(`O valor de cada imposto é: 
                \n Petrobras: ${petrobras.toFixed(2)} 
                \n ICMS: ${icms.toFixed(2)}
                \n Etanol Anidro: ${etanol_anidro.toFixed(2)}
                \n Distribuição e revenda: ${revenda_distribuiçao.toFixed(2)}
                \n Variados: ${paseps_cofins.toFixed(2)}`)
    const reajuste = get_number('Digite o percentual de reajuste(padrão:20/100 = 20%): ')
    const novo_preço_gasolina = (preço_gasolina * 0.73 + reajuste/100 * preço_gasolina) + (0.23 * preço_gasolina)
    petrobras = 0.36 * novo_preço_gasolina
    icms = 0.27 * novo_preço_gasolina
    etanol_anidro = 0.13 * novo_preço_gasolina
    revenda_distribuiçao = 0.14 * novo_preço_gasolina
    paseps_cofins = 0.10 * novo_preço_gasolina
    console.log(`O valor de cada imposto com os valores atualizados é: 
                \n Petrobras: ${petrobras.toFixed(2)} 
                \n ICMS: ${icms.toFixed(2)}
                \n Etanol Anidro: ${etanol_anidro.toFixed(2)}
                \n Distribuição e revenda: ${revenda_distribuiçao.toFixed(2)}
                \n Variados: ${paseps_cofins.toFixed(2)}`)
    console.log(`O novo valor da gasolina é ${novo_preço_gasolina.toFixed(2)},00 reais e o 
    seu percentual de aumento é de ${novo_preço_gasolina/preço_gasolina * 100}%`)
}

main()