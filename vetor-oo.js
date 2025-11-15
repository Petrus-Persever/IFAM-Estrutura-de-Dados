var vetor = new Array();
vetor[0] = "Olá";
vetor[9] = "estudo"
vetor[99] = "IFAM";
//mesmo os espaços entre 0 e 99 estejam vazio eles foram reservados
//if (vetor.length == 100) alert("O length é 100.");
//Por apenas 2 espaços estarem ocupados eles são considerados os primeiro
//ate que os espaços reservados sejam preenchidos. Ou seja, [0] = "Olá" e como só à "IFAM" em [99] ele sai de [99]
// para [1] 
//alert(vetor[vetor.length - 1])

/*vetor.forEach(function (item, indice, array) {
  alert(item, indice);
});
// Olá 0
// IFAM 1
vetor.shift()*/
vetor.unshift("Estrutura de Dados!")
vetor.forEach(function (item, indice, array) {
  alert(item, indice);
});


