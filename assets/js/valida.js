
function validaform() {
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sobrenome').value.trim();
    var email = document.getElementById('email').value.trim();
    var ra = document.getElementById('ra').value.trim();
    var cidade = document.getElementById('cidade').value.trim();
    var cep = document.getElementById('cep').value.trim();
    var endereco = document.getElementById('endereco').value.trim();


    // Verificação de campo obrigatório
    if (nome === '' || sobrenome === '' || email === '' || ra === '' || cidade === '' || endereco === '' || cpf === '' || cep === '') {
        displayValidationMessage('Por favor, preencha todos os campos.');
        return false;
    }

    // Verificação de formato de e-mail, permitindo qualquer coisa após o ponto
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayValidationMessage('Por favor, insira um endereço de e-mail válido.');
        return false;
    }

    if (!validaCPF(cpf)) {
        displayValidationMessage('CPF inválido.');
        return false;
    }

    function displayValidationMessage(message) {
        // Criar elemento de popup
        var popup = document.createElement('div');
        popup.className = 'custom-popup';
        popup.textContent = message;

        // Adicionar popup ao corpo do documento
        document.body.appendChild(popup);

        // Remover popup após 3 segundos (você pode ajustar o tempo conforme necessário)
        setTimeout(function () {
            popup.remove();
        }, 3000);
    }


    // Adicione outras condições de validação conforme necessário
    //function displayValidationMessage(message) {
    //   var validationMessage = document.createElement('p');
    //   validationMessage.style.color = 'red';
    //validationMessage.textContent = message;
    //    document.body.appendChild(validationMessage);
    // }



    return true;
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
                    $('#cidade').val(''); // Limpar campos em caso de erro
                }
            },
            error: function () {
                displayValidationMessage('Erro ao consultar CEP. Verifique a conexão de internet.');
                $('#cidade').val(''); // Limpar campos em caso de erro
            }
        });
    } else {
        $('#cidade').val('');; // Limpar campos se o CEP não tiver 8 dígitos
    }

}

$(document).ready(function () {
    $('#cep').inputmask('99999-999', { reverse: true });

});

function mascaraCPF() {
    $('#cpf').inputmask('999.999.999-99', { reverse: true });
}

function validaCPFInput() {
    var cpf = $('#cpf').val().replace(/\D/g, ''); // Remover caracteres não numéricos

    // Verificar se todos os dígitos do CPF foram inseridos
    if (cpf.length === 11) {
        if (!validaCPF(cpf)) {
            displayValidationMessage('CPF inválido.');
        } else {
            clearValidationMessages(); // Limpar mensagens de validação se o CPF for válido
        }
    }
}

function displayValidationMessage(message) {
    // Criar elemento de popup
    var popup = document.createElement('div');
    popup.className = 'custom-popup';
    popup.textContent = message;

    // Adicionar popup ao corpo do documento
    document.body.appendChild(popup);

    // Remover popup após 3 segundos (você pode ajustar o tempo conforme necessário)
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

// Validação de e-mail à medida que o usuário digita (com atraso)
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
        clearValidationMessages(); // Limpar mensagens de validação se o e-mail for válido
    }
}