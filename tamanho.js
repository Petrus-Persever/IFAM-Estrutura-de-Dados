const vetor = [8, 2, 3, 4]
alert(vetor.length)
for(let c = 0; c < vetor.length; c++)
{
    vetor[c] = c * 5;
}
for(let c = 0; c < vetor.length; c++)
{
    document.writeln(vetor[c])
}