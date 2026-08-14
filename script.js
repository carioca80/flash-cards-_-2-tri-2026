document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        // Alterna a classe ao clicar (para funcionar bem em mobile e desktop)
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped');
        });

        // Permite girar a carta usando as teclas Enter ou Espaço no teclado (Acessibilidade)
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('is-flipped');
            }
        });
    });
});