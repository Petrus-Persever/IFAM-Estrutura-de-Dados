let paginas = prompt(`Quantas páginas o seu livro possui`) 
let dias = prompt(`Informe em quantos dias deseja termina-lo`)
let media = paginas/dias
alert(`Você podera termina-lo se ler em media ${Math.ceil(media)} páginas por dia.`)