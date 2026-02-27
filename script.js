// Função para validar e ENVIAR
function validarFormulario(event) {
    // Impede o envio imediato para podermos validar antes
    if(event) event.preventDefault();

    // 1. Pegar os elementos
    let nome = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let mensagem = document.getElementsByName('message')[0].value;
    let form = document.getElementById('formContato'); 

    // 2. Validação simples
    if (nome.trim() === "") {
        alert("Ops! Você esqueceu de digitar seu nome.");
        return;
    }

    if (email.trim() === "") {
        alert("Por favor, informe seu e-mail para contato.");
        return;
    }

    if (mensagem.trim() === "") {
        alert("Escreva uma mensagem explicando sua necessidade.");
        return;
    }

    // 3. Feedback e ENVIO REAL
    alert("Tudo certo, " + nome + "! Você será redirecionado para o sistema de envio seguro.");
    
    // Dispara o formulário HTML para o FormSubmit
    form.submit();
}

// Vincula a função ao clique do botão
document.getElementById('btnEnviar').addEventListener('click', validarFormulario);

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');

mobileMenuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    // Muda o ícone de barras para um "X" quando aberto
    const icon = mobileMenuIcon.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        const icon = mobileMenuIcon.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
    });
});