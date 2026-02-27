/* script.js - Versão Final Otimizada
   Contém: Menu Mobile, Validação de Form e Rastreamento de ADS 
*/

// 1. RASTREAMENTO (Definido fora do DOMContentLoaded para carregar imediatamente)
window.trackConversion = function(label) {
    // Verifica se o Google Analytics/Ads (gtag) está carregado
    if (typeof gtag === 'function') {
        gtag('event', 'conversion', {
            'send_to': 'AW-SEU_CODIGO_ADS', // <--- IMPORTANTE: Confirme se este ID está igual ao do HTML
            'event_category': 'WhatsApp',
            'event_label': label
        });
        console.log('Google Ads disparado: ' + label);
    } else {
        console.log('Tag do Google não detectada (provavelmente bloqueador de anúncios ou ID não configurado).');
    }
    
    // Verifica se o Bing Ads (UET) está carregado
    if (window.uetq) {
        window.uetq.push('event', 'WhatsAppClick', {'event_label': label});
        console.log('Bing Ads disparado: ' + label);
    }
}

// 2. LÓGICA DE INTERFACE (Carrega após o HTML estar pronto)
document.addEventListener('DOMContentLoaded', () => {

    // --- MENU MOBILE ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const menu = document.querySelector('.menu');
    
    // Verifica se o elemento existe para evitar erros em páginas futuras
    if (mobileMenuIcon && menu) {
        const icon = mobileMenuIcon.querySelector('i');

        mobileMenuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
            
            // Troca ícone (Hamburguer <-> X)
            if (menu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Fecha menu ao clicar nos links
        document.querySelectorAll('.menu a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-xmark');
            });
        });
    }

    // --- VALIDAÇÃO E ENVIO DO FORMULÁRIO ---
    const btnEnviar = document.getElementById('btnEnviar');
    
    if (btnEnviar) {
        btnEnviar.addEventListener('click', function(event) {
            event.preventDefault(); // Impede comportamento padrão

            // Seleção dos campos
            const nomeInput = document.getElementsByName('name')[0];
            const emailInput = document.getElementsByName('email')[0];
            const msgInput = document.getElementsByName('message')[0];
            const form = document.getElementById('formContato'); 

            // Valores limpos (sem espaços extras nas pontas)
            const nome = nomeInput.value.trim();
            const email = emailInput.value.trim();
            const mensagem = msgInput.value.trim();

            // Validações
            if (nome === "") {
                alert("Por favor, digite seu nome ou da sua empresa.");
                nomeInput.focus();
                return;
            }

            if (email === "" || !email.includes('@')) {
                alert("Por favor, informe um e-mail válido.");
                emailInput.focus();
                return;
            }

            if (mensagem === "") {
                alert("Por favor, escreva como podemos te ajudar.");
                msgInput.focus();
                return;
            }

            // --- DISPARO DE CONVERSÃO DE LEAD (Formulário) ---
            if (typeof gtag === 'function') {
                gtag('event', 'generate_lead', {
                    'event_category': 'Formulario',
                    'event_label': 'Contato_Site'
                });
            }

            // Feedback visual e envio
            btnEnviar.innerText = "Enviando...";
            btnEnviar.disabled = true; // Evita clique duplo
            
            alert("Obrigado, " + nome + "! Redirecionando para envio seguro...");
            form.submit();
        });
    }
});