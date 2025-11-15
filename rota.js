let rota = prompt(`Informe em qual rota pegará:\n\nTELA DE ROTAS:\n1. Rota A: Hospital Força de Cristo.\n2. Rota B: Parque Ou Vai Ou Racha.\n3. Rota C: Escola Estadual Palacio de Jade.`)
switch (rota)
{
    case "1":
        alert("Hospital Força de Cristo.");
        break;

        case "2":
        alert("Parque Ou Vai Ou Racha.");
        break;

    case "3":
        alert("Escola Estadual Palacio de Jade.");
        break;

        default:
        alert("Rota não informada ou não disponivel")
}