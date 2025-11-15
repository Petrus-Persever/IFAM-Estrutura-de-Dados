let vetor = [1958, 1962, 1970, 1994, 2002];
let menu = parseInt(prompt(`1.Inserir no inicío (unshift)\n2.Remover do inicío (shift)\n3.Inserir no final (push)\n4.Remover do final (pop)\n5.Informar tamanho (length)`))

let exibirVetor = true

switch(menu)
{
    case 1:
        let elemento = parseInt(prompt(`Informe o elemento`))
        vetor.unshift(elemento)
        break;

    case 2:
        vetor.shift()
        break;
        
    case 3:
        let elemento2 = parseInt(prompt(`Informe o elemento`))
        vetor.push(elemento2)
        break;
        
    case 4:
        vetor.pop()
        break;
        
    case 5:
        document.writeln(`Tamanho do vetor: ${vetor.length}<br>`)
        break;
        
    default:
        alert(`ERRO`)
        exibirVetor = false
}

if (exibirVetor) 
{
    document.writeln("Vetor resultante:<br>")
    for(let c = 0; c < vetor.length; c++)
    {
        document.writeln(`${vetor[c]} (índice ${c})<br>`)
    }
}