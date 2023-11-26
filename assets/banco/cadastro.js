

// Adicione um ouvinte de evento 'submit' ao formulário
document.getElementById('cadastro-form').addEventListener('submit', function (event) {
  // Evita o comportamento padrão de enviar o formulário
  event.preventDefault();

  const vetorInformacoes = JSON.parse(localStorage.getItem('vetorInformacoes')) || [];
  
  // Obter os valores dos campos do formulário
  const campoNome = document.getElementById('nome').value;
  const campoSobrenome = document.getElementById('sobrenome').value;
  const campoEmail = document.getElementById('email').value;
  const campoRa = document.getElementById('ra').value;
  const campoCpf = document.getElementById('cpf').value;
  const campoTel1 = document.getElementById('telefone1').value;
  const campoTel2 = document.getElementById('telefone2').value;
  const campoTelF = document.getElementById('telefoneres').value;
  const campoCep = document.getElementById('cep').value;
  const campoCidade = document.getElementById('cidade').value;
  const campoBairro = document.getElementById('bairro').value;
  const campoUf = document.getElementById('uf').value;
  const campoRua = document.getElementById('endereco').value;
  const campoNumEnd = document.getElementById('numero').value;
  const campoPalestra = document.getElementById('multiple-select-palestra').value;
  const campoEvento = document.getElementById('multiple-select-evento').value;
  //const campoCurso = document.getElementById('campo1').value; /////////////////////////////////////////////////
  const campoCatPert = document.getElementById('categoria').value;
  //const campoCc = document.getElementById('credit').value; ////////////////////////////
  const campoNomeCc = document.getElementById('cc-name').value;
  const campoNumCc = document.getElementById('cc-number').value;
  const campoValCc = document.getElementById('cc-expiration').value;
  const campoCvv = document.getElementById('cc-cvv').value;
  const campoValor = document.getElementById('valor-total').value;

 

  // ... obter outros valores ...

  // Criar um objeto com os dados do formulário
const dadosFormulario = {
    nome: campoNome,
    sobrenome: campoSobrenome,
    email: campoEmail,
    ra: campoRa,
    cpf: campoCpf,
    telefone1: campoTel1,
    telefone2: campoTel2,
    telefoneres: campoTelF,
    cep: campoCep,
    cidade: campoCidade,
    bairro: campoBairro,
    uf: campoUf,
    endereco: campoRua,
    numero: campoNumEnd,
    palestra: campoPalestra,
    evento: campoEvento,
    curso: campoCurso,
    categoria: campoCatPert,
    credit: campoCc,
    ccName: campoNomeCc,
    ccNumber: campoNumCc,
    ccExpiration: campoValCc,
    ccCvv: campoCvv,
    valorTotal: campoValor,
  };

  // Adicionar os dados do formulário ao vetor
  vetorInformacoes.push(dadosFormulario);

  localStorage.setItem('vetorInformacoes', JSON.stringify(vetorInformacoes));

  // Exemplo: Exibir no console
  console.log('Vetor de informações:', vetorInformacoes);
});