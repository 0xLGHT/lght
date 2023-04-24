const menuIcon = document.getElementById('menuIcon');
const menuOverlay = document.getElementById('menuOverlay');

menuIcon.addEventListener('click', () => {
    menuOverlay.classList.toggle('hidden');
});
