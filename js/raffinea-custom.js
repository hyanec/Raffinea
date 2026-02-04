// Fonction de filtrage des salons par ville
function filterSalons(city) {
    // Mise à jour des boutons actifs
    const buttons = document.querySelectorAll('.btn-group .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    if (window.event && window.event.target) {
        window.event.target.classList.add('active');
    }

    // Logique de filtrage (à implémenter selon vos besoins)
    console.log('Filtrage par ville:', city);

    // Exemple: afficher/masquer les salons selon la ville
    // Cette partie nécessiterait des attributs data-city sur les éléments
}

// Animation au scroll pour les cartes
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observer les cartes
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Smooth scroll pour la section FAQ
document.addEventListener('DOMContentLoaded', function() {
    const faqLink = document.querySelector('a[href="#faq"]');
    if (faqLink) {
        faqLink.addEventListener('click', function(e) {
            e.preventDefault();
            const faqSection = document.querySelector('.faq-section');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
