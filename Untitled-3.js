// Validação do formulário
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = this.nome.value.trim();
    const email = this.email.value.trim();
    const mensagem = this.mensagem.value.trim();

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    this.reset(); // Limpa o formulário após o envio
});