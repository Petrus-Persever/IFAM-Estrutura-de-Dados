const pedido = prompt("Ola, bem-vindo.\nNo momento temos 3 frutas diferentes no cadárpio.\nO senhor(a) pode pedir elas pela numeração que está no cadárpio.\nQuando quiser pedir é só me chamar\n \nCADÁRPIO:\n1. Laranja.\n2. Mangas.\n3. Papayas. ")
switch (pedido)
 {
  case "1":
    alert("As laranjas custam $2.50 a unidade.");
    break;
  case "2":
    alert("As mangas custam $2.00 a unidade.")
  case "3":
    alert("As papayas custam $3.00 a unidade.");
    break;
  default:
    alert(`Descupe, temos isso.`);
}