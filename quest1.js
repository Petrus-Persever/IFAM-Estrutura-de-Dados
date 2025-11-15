let quanto = parseInt(prompt(`Quantos numeros irá informar`))
let numeros = []
let soma = 0
for(let c = 0; c < quanto; c++)
{
    numeros[c] = parseInt(prompt(`Informe os numeros`))
    soma += numeros[c]
}
soma > 100 ? document.writeln(`A soma de todos os numeros informados resulta em ${soma}`) : ""