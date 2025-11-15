let idade = parseInt(prompt(`Informe sua idade `))
if(idade < 16)
    alert(`Não pode votar.`)
else if(idade >= 16 && idade < 18)
    alert("Você pode vota mas é opcional.")
else
    alert("Você é obrigado a votar.")