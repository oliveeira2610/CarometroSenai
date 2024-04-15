

// Variáveis para os elementos HTML
var fieldsets = document.querySelectorAll("fieldset");
var progressbar = document.getElementById("progressbar").querySelectorAll("li");

// Variáveis de controle
var current_fs = 0;
var animating = false;

// Função para avançar para o próximo campo
function nextFieldset() {
    if (animating || current_fs >= fieldsets.length - 1) return false;
    animating = true;

    var next_fs = fieldsets[current_fs + 1];

    // Ativar o próximo passo na barra de progresso
    progressbar[current_fs + 1].classList.add("active");

    // Ocultar o fieldset atual
    fieldsets[current_fs].style.display = "none";

    // Mostrar o próximo fieldset
    next_fs.style.display = "block";

    // Atualizar o índice do fieldset atual
    current_fs++;

    // Resetar a flag de animação
    animating = false;
}

// Função para voltar para o fieldset anterior
function previousFieldset() {
    if (animating || current_fs <= 0) return false;
    animating = true;

    var previous_fs = fieldsets[current_fs - 1];

    // Desativar o passo atual na barra de progresso
    progressbar[current_fs].classList.remove("active");

    // Ocultar o fieldset atual
    fieldsets[current_fs].style.display = "none";

    // Mostrar o fieldset anterior
    previous_fs.style.display = "block";

    // Atualizar o índice do fieldset atual
    current_fs--;

    // Resetar a flag de animação
    animating = false;
}

// Event listeners para os botões de próxima e anterior
document.querySelectorAll(".next").forEach(function(button) {
    button.addEventListener("click", nextFieldset);
});

document.querySelectorAll(".previous").forEach(function(button) {
    button.addEventListener("click", previousFieldset);
});

const cadastro = document.getElementById('voltar-login')

cadastro.addEventListener('click',()=>{
    window.location.href = "login.html"
});


////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {

	var nextButtons = document.querySelectorAll('.next');
    nextButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var activeFieldset = document.querySelector('fieldset.active');
            if (activeFieldset.nextElementSibling === null) {
                // Estamos no último fieldset, então enviamos o formulário
                document.getElementById('msform').submit();
            } else {
                // Não estamos no último fieldset, então movemos para o próximo
                activeFieldset.classList.remove('active');
                activeFieldset.nextElementSibling.classList.add('active');
                
            }
            
        });
    });
});

    function limpa_formulário_cep() {
        document.getElementById('rua').value = "";
        document.getElementById('bairro').value = "";
        document.getElementById('cidade').value = "";
        document.getElementById('estado').value = "";
    }

    document.getElementById('cep').addEventListener('blur', function () {

        var cep = this.value.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if (validacep.test(cep)) {

                document.getElementById('rua').value = "...";
                document.getElementById('bairro').value = "...";
                document.getElementById('cidade').value = "...";
                document.getElementById('estado').value = "...";

                fetch(`https://viacep.com.br/ws/${cep}/json/`)
                    .then(response => response.json())
                    .then(dados => {
                        if (!("erro" in dados)) {
                            document.getElementById('rua').value = dados.logradouro;
                            document.getElementById('bairro').value = dados.bairro;
                            document.getElementById('cidade').value = dados.localidade;
                            document.getElementById('estado').value = dados.uf;
                        } else {
                            limpa_formulário_cep();
                            alert("CEP não encontrado.");
                        }
                    })
                    .catch(() => alert("Erro ao buscar CEP."));
            } else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } else {
            limpa_formulário_cep();
        }
});

/////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    var fieldsets = Array.from(document.querySelectorAll('fieldset'));
    var currentFieldsetIndex = 0;

    var nextButtons = document.querySelectorAll('.next');
    nextButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            if (index === currentFieldsetIndex) {
                currentFieldsetIndex++;

                if (currentFieldsetIndex === fieldsets.length - 1) {
                    var nome = document.querySelector('input[name="name"]').value;
                    var email = document.querySelector('input[name="email"]').value;
                    var cep = document.querySelector('input[name="cep"]').value;
                    var rua = document.querySelector('input[name="logradouro"]').value;
                    var bairro = document.querySelector('input[name="bairro"]').value;
                    var cidade = document.querySelector('input[name="cidade"]').value;
                    var estado = document.querySelector('input[name="estado"]').value;
                    var numero = document.querySelector('input[name="numero"]').value;

                    document.getElementById('resumo').innerHTML = 
						'Nome: ' + nome + '<br>' +
						'Email: ' + email + '<br>' +
						'CEP: ' + cep + '<br>' +
						'Rua: ' + rua + '<br>' +
						'Bairro: ' + bairro + '<br>' +
						'Cidade: ' + cidade + '<br>' +
						'Estado: ' + estado + '<br>' +
						'Número: ' + numero;
                }

                if (currentFieldsetIndex < fieldsets.length) {
                    fieldsets[currentFieldsetIndex].style.display = 'block';
                }
            }
        });
    });

    var previousButtons = document.querySelectorAll('.previous');
    previousButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            if (index === currentFieldsetIndex - 1) {
                fieldsets[currentFieldsetIndex].style.display = 'none';
                currentFieldsetIndex--;
            }
        });
    });
});








