import '../scss/app.scss';
// Sélectionnez les boutons "Favoris" et ajoutez des gestionnaires d'événements
const favButtons = document.querySelectorAll('.fav-button');

favButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Marquez le serveur comme favori
        const server = button.closest('.server');
        server.classList.toggle('favorite');

        // Changez la couleur du bouton
        button.classList.toggle('favorited');

        // Affichez une notification
        if (server.classList.contains('favorite')) {
            alert('Serveur ajouté aux favoris!');
        } else {
            alert('Serveur supprimé des favoris!');
        }
    });
});
