function validaCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    // Verifica se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que torna o CPF inválido
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Calcula os dígitos verificadores
    var v1 = 0;
    for (var i = 0; i < 9; i++) {
        v1 += parseInt(cpf.charAt(i)) * (10 - i);
    }
    v1 = (v1 % 11) % 10;

    var v2 = 0;
    for (var j = 0; j < 10; j++) {
        v2 += parseInt(cpf.charAt(j)) * (11 - j);
    }
    v2 = (v2 % 11) % 10;

    // Verifica se os dígitos verificadores calculados coincidem com os dígitos reais
    if ((v1 !== parseInt(cpf.charAt(9))) || (v2 !== parseInt(cpf.charAt(10)))) {
        return false;
    }

    return true;
}