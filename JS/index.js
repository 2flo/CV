const containerMenu = document.querySelector('.container-menu');
const btnMenu = document.querySelector('.btn-menu');
const faBars = document.getElementsByClassName('.fa-bars');

//On crée une fonction pour activer ou désactiver un événement lorsqu'on clique sur le bouton menu

btnMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('active');
    faBars.src = '<i class="fas fa-times"></i>';
})