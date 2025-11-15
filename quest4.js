let disciplina_contagem = prompt(`Quantas disciplinas tem.`)
let disciplinas = []
let nota = []
let media = 0
for(let c = 0; c < disciplina_contagem; c++)
{
    disciplina[c] = prompt(`Quantas disciplinas tem.`)
}

for(let c = 0; c < disciplina_contagem; c++)
{
    nota[c] = parseFloat(prompt(`Informe a nota da disciplina`))
    media += nota[c]
}
document.writeln(`Disciplinas: ${disciplinas[c]}<br>Média: ${nota[c]}`)