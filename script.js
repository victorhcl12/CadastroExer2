
let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let CPF = document.getElementById('CPF').value;
  let RG = document.getElementById('RG').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let dataNascimento = document.getElementById('dataNascimento').value;
  let sexo = document.querySelector('input[name="sexo"]:checked').value;
 let estado = document.getElementById('estado').value;
let cidade = document.getElementById('cidade').value;
let bairro = document.getElementById('bairro').value;
let rua = document.getElementById('rua').value;
let numero = document.getElementById('numero').value;
let complemento = document.getElementById('complemento').value;
  let atividades = document.querySelectorAll('input[type="checkbox"]:checked');
  let fotoPerfil = document.getElementById('fotoPerfil').files[0];

  let atividadesSelecionadas = [];

  atividades.forEach((atividade) => {
    atividadesSelecionadas.push(atividade.nextElementSibling.textContent);
  });

  let dadosFormulario = {
    nome,
    sobrenome,
    CPF,
    RG,
    dataNascimento,
    email,
    telefone,
    sexo,
    estado,
    cidade,
    bairro,
    rua,
    numero,
    complemento,
    atividades: atividadesSelecionadas,

  };

  let reader = new FileReader();

  reader.addEventListener('load', () => {
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = `
      <h2>Resultado:</h2>
      <p>Nome: ${dadosFormulario.nome}</p>
      <p>Sobrenome: ${dadosFormulario.sobrenome}</p>
      <p>CPF: ${dadosFormulario.CPF}</p>
      <p>RG: ${dadosFormulario.RG}</p>
      <p>Data de Nascimento: ${dadosFormulario.dataNascimento}</p>
      <p>E-mail: ${dadosFormulario.email}</p>
      <p>Telefone: ${dadosFormulario.telefone}</p>
      <p>Sexo: ${dadosFormulario.sexo}</p>
    <p>Estado: ${dadosFormulario.estado}</p>
    <p>Cidade: ${dadosFormulario.cidade}</p>
    <p>Bairro: ${dadosFormulario.bairro}</p>
    <p>Rua: ${dadosFormulario.rua}</p>
    <p>Número: ${dadosFormulario.numero}</p>
    <p>Complemento: ${dadosFormulario.complemento}</p>
      <p>Preferencia de Contato: ${dadosFormulario.atividades.join(', ')}</p>
      <h2><img src="${reader.result}" alt="Sua foto" style="max-width: 100%; height: 100%;"><h2>
    `;
  });

  reader.readAsDataURL(fotoPerfil);

  formulario.reset();
});
