function calcular() {
  var precoLimpezaComum = 10
  var precoLimpezaPosObra = 14
  var tipoLimpeza = String(document.getElementById("tipoLimpeza").value);
  var metro = Number(document.getElementById('metro').value)
  if (tipoLimpeza == "comum") {
    total = metro * precoLimpezaComum;
  } else if (tipoLimpeza == "posObra") {
    total = metro * precoLimpezaPosObra;
  }
  res.style.currency = "BRL";
  res.innerHTML = `A área é ${metro} metros quadrados. O custo total para ${
    tipoLimpeza === "comum" ? "limpeza comum" : "limpeza pós-obra"
  } é ${total.toFixed(2).replace(".", ",")}.`;
}
