// Script para o formulário de contato e Menu Mobile

// 1. Validação e Envio do Formulário
function validarFormulario(event) {
    event.preventDefault(); // Impede o envio padrão para validar antes

    // Pega os valores
    let nome = document.getElementsByName('name')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let mensagem = document.getElementsByName('message')[0].value;
    let form = document.getElementById('formContato'); 

    // Validações simples
    if (nome.trim() === "") {
        alert("Por favor, digite seu nome.");
        return;
    }
    if (email.trim() === "") {
        alert("Precisamos do seu e-mail para responder.");
        return;
    }
    if (mensagem.trim() === "") {
        alert("Escreva uma mensagem para a Professora Alê.");
        return;
    }

    // Feedback visual e envio
    alert("Obrigada, " + nome + "! Sua mensagem será enviada agora.");
    form.submit(); // Envia para o FormSubmit
}

// Vincula o botão (caso o onclick no HTML falhe, isso garante o funcionamento)
const btnEnviar = document.getElementById('btnEnviar');
if(btnEnviar) {
    btnEnviar.addEventListener('click', validarFormulario);
}


// 2. Menu Mobile (Hambúrguer)
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const menu = document.querySelector('.menu');

if(mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        menu.classList.toggle('active');
        // Troca ícone barras <-> X
        const icon = mobileMenuIcon.querySelector('i');
        if (menu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
}

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        const icon = mobileMenuIcon.querySelector('i');
        if(icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-xmark');
        }
    });
});