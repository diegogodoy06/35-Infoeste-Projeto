
function validaform() {

        var campos = ['nome', 'sobrenome'];
    
        for (var campo of campos) {
            var valor = document.getElementById(campo).value.trim();
    
            if (valor === '') {
                displayValidationMessage('Por favor, preencha todos os campos.');
                return false; 
            }
        }
    
        return true; 
    
}

function obterPalestraSelecionado() {

    var selectElement = document.getElementById('multiple-select-palastra');

    var selectedValues = [];

    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];

 
        if (option.selected) {

            selectedValues.push(option.value);
        }
    }
    console.log('Valores selecionados:', selectedValues);
}

function obterEventoSelecionado() {

    var selectElement = document.getElementById('multiple-select-evento');


    var selectedValues = [];


    for (var i = 0; i < selectElement.options.length; i++) {
        var option = selectElement.options[i];

        if (option.selected) {

            selectedValues.push(option.value);
        }
    }
    console.log('Valores selecionados:', selectedValues);
}


console.log('Valores selecionados:', selectedValues);

function obterMetodoPagamentoSelecionado() {

    var opcoesPagamento = document.getElementsByName('paymentMethod');

    // Itera sobre os elementos de radio para encontrar o selecionado
    for (var i = 0; i < opcoesPagamento.length; i++) {
        if (opcoesPagamento[i].checked) {
            var metodoSelecionado = opcoesPagamento[i].id;
            console.log('Método de pagamento selecionado:', metodoSelecionado);
            return metodoSelecionado;
        }
    }

    // Se nenhum estiver selecionado, você pode lidar com isso aqui
    console.log('Nenhum método de pagamento selecionado.');
    return null;
}

function obterCursosSelecionados() {

    var cursosSelecionados = [];

    // Elementos checkbox
    var checkboxes = document.querySelectorAll('.custom-control-input');

    // Itera sobre os checkboxes
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {

            cursosSelecionados.push(checkbox.id);
        }
    });

    // Exibe os resultados no console 
    console.log('Cursos selecionados:', cursosSelecionados);

    // Retorna os resultados
    return cursosSelecionados;
}

function consultaCEP() {
    var cep = $('#cep').val().replace(/\D/g, ''); // Remover caracteres não numéricos

    // Verificar se o CEP tem 8 dígitos
    if (cep.length === 8) {
        // Consultar a API do ViaCEP
        $.ajax({
            url: 'https://viacep.com.br/ws/' + cep + '/json/',
            dataType: 'json',
            success: function (data) {
                if (!data.erro) {
                    $('#cidade').val(data.localidade); // Preencher o campo de cidade
                    $('#uf').val(data.uf);

                    if (data.bairro === "") {
                        $('#bairro').val('N/A');
                    }
                    else {
                        $('#bairro').val(data.bairro);
                    }
                } else {
                    displayValidationMessage('Erro ao consultar CEP. Verifique se o CEP é válido.');
                    $('#cidade').val(''); 
                }
            },
            error: function () {
                displayValidationMessage('Erro ao consultar CEP. Verifique a conexão de internet.');
                $('#cidade').val(''); 
            }
        });
    } else {
        $('#cidade').val('');; 
    }

}

$(document).ready(function () {
    $('#cep').inputmask('99999-999', { reverse: true });

});

function mascaraCPF() {
    $('#cpf').inputmask('999.999.999-99', { reverse: true });
}

function validaCPFInput() {
    var cpf = $('#cpf').val().replace(/\D/g, ''); 

    console.log(cpf);
    // Verificar se todos os dígitos do CPF foram inseridos
    if (cpf.length === 11) {
        if (!validaCPF(cpf)) {
           
            displayValidationMessage('CPF inválido.');
        } else {
            clearValidationMessages(); 
        }
    }
}

function displayValidationMessage(message) {
    // Criar elemento de popup
    var popup = document.createElement('div');
    popup.className = 'custom-popup';
    popup.textContent = message;


    document.body.appendChild(popup);

    // Remover popup após 3 segundos 
    setTimeout(function () {
        popup.remove();
    }, 3000);
}

function clearValidationMessages() {
    var validationMessages = document.querySelectorAll('p');
    validationMessages.forEach(function (message) {
        message.remove();
    });
}

function apenasNum(inputElement) {
    inputElement.value = inputElement.value.replace(/\D/g, '');
}

function restrictToNumbers(inputElement) {

    // Remover caracteres não numéricos
    inputElement.value = inputElement.value.replace(/\D/g, '');

    // Limitar o comprimento para no máximo 9 caracteres
    if (inputElement.value.length > 9) {
        inputElement.value = inputElement.value.slice(0, 9);
    }
}

function debounce(func, delay) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Validação de e-mail
const debouncedValidaEmailInput = debounce(() => {
    validaEmailInput();
}, 1500);

// Validação de e-mail
function validaEmailInput() {
    var email = $('#email').val().trim();

    // Verificar se o e-mail é válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayValidationMessage('E-mail inválido.');
    } else {
        clearValidationMessages(); 
    }
}

function validaNumeric(element) {
    element.value = element.value.replace(/\D/g, '');

}

function mascaraTelefone(element) {
    Inputmask('(99) 99999-9999').mask(element);

}

function mascaraTelefone2(element) {
    Inputmask('(99) 99999999').mask(element);
}

function mascaraVal(element) {
    Inputmask('99/99').mask(element);

}

function mascaraValicc(element) {
    Inputmask('99 9999').mask(element);
}

function mascaraCC() {
    Inputmask('9999 9999 9999 9999 9999').mask(element);
}

function validarNumero() {
    var numeroInput = document.getElementById('numero');
    var numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero < 0 || numero > 99999) {
        
        numeroInput.value = '';
    }
}


function atualizarValor() {
    var select = document.getElementById('categoria');
    var valorSelecionado = select.options[select.selectedIndex].value;
    document.getElementById('valor-total').textContent = valorSelecionado;
}


function validaCC() {

    
    var num_cc = $('#cc-number').text().replace(/\D/g, '');


    if (num_cc.length === 0) {
        limparImagemBandeira();
        return;
    }

    var cartoes = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})/,
        Mastercard: /^5[1-5][0-9]{14}/,
        Amex: /^3[47][0-9]{13}/,
        DinersClub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    };

    var ccBrandIcon = document.getElementById('cc-brand');
    var validationMessage = document.getElementById('cc-validation-message');

    var brand = testarCC(num_cc, cartoes);

    if (brand) {
        ccBrandIcon.style.backgroundImage = 'url("' + obterURLDaBandeira(brand) + '")';
        
    } else {
        ccBrandIcon.style.backgroundImage = 'none';  
        if(num_cc.length > 15)
            displayValidationMessage('Número do cartão inválido');
        
    }

    function testarCC(nr, cartoes) {
        for (var cartao in cartoes) {
            if (nr.match(cartoes[cartao])) {
                return cartao;
            }
        }
        return false;
    }

    function obterURLDaBandeira(brand) {
       
        var urlBandeiras = {
            Visa: 'https://cdn.4devs.com.br/imagens/cc/logo_visa.jpg',
            Mastercard: 'https://cdn.4devs.com.br/imagens/cc/logo_master.jpg',
            Amex: 'https://cdn.4devs.com.br/imagens/cc/logo_amex.jpg',
            DinersClub: 'https://cdn.4devs.com.br/imagens/cc/logo_diners.jpg',
            Discover: 'https://cdn.4devs.com.br/imagens/cc/logo_discover.jpg',
        };

        return urlBandeiras[brand] || '';
    }

    function limparImagemBandeira() {
        ccBrandIcon.style.backgroundImage = 'none';  
        validationMessage.textContent = ''; 
    }
}


function apenasNum() {
    var num_cc = $('#cc-number').text().replace(/\D/g, '');
    $('#cc-number').text(num_cc);
}


