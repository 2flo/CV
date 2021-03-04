const containerMenu = document.querySelector('.container-menu');
const btnMenu = document.querySelector('.btn-menu');

//On crée une fonction pour activer ou désactiver un événement lorsqu'on clique sur le bouton menu

btnMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('active')
})