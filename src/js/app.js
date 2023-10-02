import '../scss/app.scss';
// Fonction pour gérer le clic sur le bouton "Favoris"
function toggleFavorite() {
    // Trouvez le serveur parent de ce bouton
    const server = this.closest('.server');

    // Vérifiez si le serveur est favori ou non
    const isFavorite = server.classList.contains('favorite');

    // Inversez l'état "favori"
    if (!isFavorite) {
        server.classList.add('favorite');
        this.classList.add('favorited');
        alert('Serveur ajouté aux favoris!');
    } else {
        server.classList.remove('favorite');
        this.classList.remove('favorited');
        alert('Serveur supprimé des favoris!');
    }
}

// Sélectionnez les boutons "Favoris" existants et ajoutez des gestionnaires d'événements
const favButtons = document.querySelectorAll('.fav-button');

favButtons.forEach(button => {
    button.addEventListener('click', toggleFavorite);
});

// Sélectionnez le formulaire d'ajout de serveur
const addServerForm = document.getElementById('add-server-form');

// Gestionnaire d'événements pour le formulaire
addServerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Empêchez le formulaire de se soumettre normalement

    // Récupérez les valeurs des champs du formulaire
    const serverName = document.getElementById('server-name').value;
    const serverStatus = document.getElementById('server-status').value;
    const serverCPU = document.getElementById('server-cpu').value;
    const serverMemory = document.getElementById('server-memory').value;

    // Créez un nouvel élément de serveur avec les valeurs du formulaire
    const newServer = document.createElement('li');
    newServer.classList.add('server');
    newServer.innerHTML = `
        <span class="server-name">${serverName}</span>
        <span class="server-status">Status: ${serverStatus}</span>
        <span class="server-cpu">CPU: ${serverCPU}%</span>
        <span class="server-memory">Memory: ${serverMemory}%</span>
        <button class="fav-button">Favoris</button>
    `;

    // Ajoutez ce nouveau serveur à la liste
    const serverList = document.querySelector('.server-list');
    serverList.appendChild(newServer);

    // Réinitialisez le formulaire
    addServerForm.reset();

    // Ajoutez un gestionnaire d'événements au bouton "Favoris" pour le nouveau serveur
    const favButton = newServer.querySelector('.fav-button');
    favButton.addEventListener('click', toggleFavorite);

    // Affichez une notification pour indiquer que le serveur a été ajouté
    alert('Serveur ajouté avec succès!');
});
