let elemento, elemento2
const copas = [1958, 1962, 1970, 1994, 2002]

let adicionar = prompt(`Gostaria de inserir um elemento ao inicio do array?\nSim\nNão`)
adicionar == "sim" ? (elemento = prompt(`Informe qual é o elemento irá inserir`), copas.unshift(elemento)) : ""
let remover = prompt(`Gostaria de remover um elemento ao inicio do array?\nSim\nNão`)
remover == "sim" ? copas.shift() : ""
let adicionar2 = prompt(`Gostaria de inserir um elemento ao final do array?\nSim\nNão`)
adicionar2 == "sim" ? (elemento2 = prompt(`Informe qual é o elemento irá inserir`), copas.push(elemento2)) : ""
let remover2 = prompt(`Gostaria de remover um elemento ao final do array?\nSim\nNão`)
remover2 == "sim" ? copas.pop() : ""
document.writeln(`<b>Elementos do array:<b>`)
for(let c = 0; c < copas.length; c++)
{
    document.writeln(`<br>${copas[c]} [${c}]`)
}
document.writeln(`<br>O array tem ${copas.length} posições.`)