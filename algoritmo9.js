let produto = parseFloat(prompt(`Informe o valor do produto`))
let descont = parseFloat(prompt(`Informe o desconto`))
let valorfinal = produto-((produto/100)*descont)
alert(`O produto com desconto de ${descont} tem o valor final de ${valorfinal.toFixed(2)}`)