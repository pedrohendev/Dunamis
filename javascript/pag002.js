function calcular() {
    var largura = parseFloat(document.getElementById('largura').value)
    var comprimento = parseFloat(document.getElementById('comprimento').value)
    var tipoLimpeza = String(document.getElementById('tipoLimpeza').value)
    var area = largura * comprimento
    var precoLimpezaComum = 10;
    var precoLimpezaPosObra = 14;
    var total;
    if (tipoLimpeza == 'comum') {
        total = area * precoLimpezaComum
    } else if (tipoLimpeza == 'posObra') {
        total = area * precoLimpezaPosObra
    }
    res.style.currency = 'BRL'
    res.innerHTML = `A área é ${area} metros quadrados. O custo total para ${tipoLimpeza === 'comum' ? 'limpeza comum' : 'limpeza pós-obra'} é ${total.toFixed(2).replace('.', ',')}.`
}
