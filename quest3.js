let lista = parseInt(prompt(`Informar quantos itens a lista terá`))
let numeros = []
let soma = 0
for(let c = 0; c < lista; c++)
{
    numeros[c] = parseFloat(prompt(`Informe os números.\nAtual: ${c}`))
}
for(let c = 0; c <= lista; c++)
{
    if(c % 2 == 1)
    {
        soma += numeros[c]
    }
}
alert(`Lista: ${numeros}`)
alert(`\nSoma dos números ímpares: ${soma}`)