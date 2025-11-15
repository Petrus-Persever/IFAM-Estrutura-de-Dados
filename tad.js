var vetor = new Array();
vetor[0] = "Estrutura de Dados"

vetor.push("Professor")// variavel.push incrementa mais um elemento ao final do array
vetor.pop()//Remove um elemento do final do array

vetor.unshift("Gilmar")//Adiciona um elemento ao inicio do array
vetor.shift()

alert(vetor.length)//Mostra quantos elementos tem o array
alert(vetor[vetor.length - 1])//Mostra qual o elemento esta na posição informada
//-----vetor.forEach(function (item, indice, array) { alert(item, indice); })