let pessoas = parseInt(prompt(`Informe quantas pessoas irá se registra.`))
vetor_idade = []
idade_media = 0
for(let c = 0; c < pessoas; c++)
{
    vetor_idade[c] = parseInt(prompt(`Informe a sua idade, entrevistado ${c}.`))
    idade_media += vetor_idade[c]
}
document.writeln(`<br>Média de idade: ${idade_media/pessoas}<br>`)