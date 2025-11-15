let produto = parseFloat(prompt(`Informe o valor do produto`)) 
let acresc = parseFloat(prompt(`Informe o acrescimo a ele`))
let result  = produto+((produto/100)*acresc)
alert(`O acrescimo de ${acresc} será de ${result.toFixed(2)}`)