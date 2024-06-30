document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado

    // Obtém os valores de largura, comprimento e tipo de limpeza
    const width = parseFloat(document.getElementById('width').value);
    const length = parseFloat(document.getElementById('length').value);
    const tipoLimpeza = document.getElementById('tipoLimpeza').value;

    // Calcula a área
    const area = width * length;

    // Define os preços fixos por metro quadrado
    const precoLimpezaComum = 10;
    const precoLimpezaPosObra = 14;

    // Calcula o custo total com base no tipo de limpeza
    let totalCost;
    if (tipoLimpeza === 'comum') {
        totalCost = area * precoLimpezaComum;
    } else if (tipoLimpeza === 'posObra') {
        totalCost = area * precoLimpezaPosObra;
    }

    // Exibe o resultado
    document.getElementById('result').textContent = `A área é ${area} metros quadrados. O custo total para ${tipoLimpeza === 'comum' ? 'limpeza comum' : 'limpeza pós-obra'} é R$ ${totalCost.toFixed(2)}.`;
});
