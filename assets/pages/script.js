function ajustarAlturaSelect() {
  var select = document.getElementById('multiple-select-field');
  var numeroOpcoes = select.options.length;

  // Definir a altura do <select> com base no número de opções
  select.style.height = numeroOpcoes * 25 + 'px'; // Ajuste este valor conforme necessário
}

// Initialize multiple select on your regular select
$("multiple-select-field").multipleSelect({
  filter: true
});