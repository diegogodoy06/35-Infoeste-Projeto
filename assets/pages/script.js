function ajustarAlturaSelect() {
  var select = document.getElementById('multiple-select-field');
  var numeroOpcoes = select.options.length;

  select.style.height = numeroOpcoes * 25 + 'px'; // Ajuste este valor conforme necessário
}


