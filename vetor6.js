let quantos_itens = parseInt(prompt(`Informe quantos itens será registrados.`))
let vetor_itens = []
let vetor_valor = []
let valor_total = 0
for(let c = 0; c < quantos_itens; c++)
{
    vetor_itens[c] = parseInt(prompt(`Informe o numero do item ${c}`))
    vetor_valor[c] = parseFloat(prompt(`Informe o valor do item ${c}`))
    valor_total += vetor_valor[c]
}
document.writeln(`<b>Lista de compra<b><br>`)
for(let c = 0; c < quantos_itens; c++)
{
    document.writeln(`Item: ${vetor_itens[c]}<br>`)
    document.writeln(`valor: ${vetor_valor[c]}<br>`)
    document.writeln(`Valor total da compra: ${valor_total}`)
}