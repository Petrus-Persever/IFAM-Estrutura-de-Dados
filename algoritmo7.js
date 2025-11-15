let valor = parseFloat(prompt(`Informe o valor`))
let porcentagem = parseFloat(prompt(`Informe a porcentagem da gorjeta`))
let gorjeta = (valor/100)*porcentagem
alert(`O valor da gorjeta é ${gorjeta.toFixed(2)}`)
// 400 - 19%
//400/100 = 4
//4x19 = 76