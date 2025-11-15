/*let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let vetor3 = []
for(let c = 1; c < vetor1.length; c++)
{
    
    document.writeln(`${vetor1[c]}x${vetor2[c]} = ${vetor3[c] = vetor1[c]*vetor2[c]}<br>`)
}*/
const vetorA = [], vetorB = [], vetorC = []
for(let c = 0; c < 2; c++)
{
    vetorA[c] = parseInt(prompt(`Informe o 10 numeros.\nAtual: ${c}`))
}
for(let c = 0; c < 2; c++)
{
    vetorB[c] = parseInt(prompt(`Informe o 10 numeros.\nAtual: ${c}`))
}
for(let c = 0; c < 2; c++)
{
    vetorC[c] = vetorA[c]*vetorB[c]
}
for(let c = 0; c < 2; c++)
{
    document.writeln(vetorC[c])
}