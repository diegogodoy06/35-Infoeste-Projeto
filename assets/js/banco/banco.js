function carregarDadosPalestra() {
    $.getJSON('../js/banco/palestra.json', function (dados) {
        var selectElement = document.getElementById("multiple-select-field");

        dados.forEach(function (item) {
            var optionElement = document.createElement("option");
            optionElement.className = "text-center font-weight-bolder";
            optionElement.style.fontSize = "16px";
            optionElement.text = item.label;
            optionElement.value = item.value;
            selectElement.add(optionElement);
        });

        // Remova a inicialização do multiselect aqui

        // Inicialize o plugin após carregar os dados
        new MultiSelectTag('multiSelectContainer');
    });
}