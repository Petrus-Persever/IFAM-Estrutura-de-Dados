let par = 0
let quanto = prompt(`Quantos números irá informar.`)
const numeros = [] 
for(let c = 0; c < quanto; c++)
{
    numeros[c] = parseInt(prompt(`Informe os números.`))
    numeros[c] % 2 == 0 ? par++ : "ERRO"
}
document.writeln(`<b>Números informados<b>`)
for(let c = 0; c < quanto; c++)
{
    document.writeln(`<br>${numeros[c]}<br>`)
}
document.writeln(`<b>Quantidade de pares informados:<b> ${par}<br>`)