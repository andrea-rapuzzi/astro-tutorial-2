/* Event listener per il burger menu. La prima riga di codice definisce il trigger */
document.querySelector('.hamburger').addEventListener('click', () => {
document.querySelector('.nav-links').classList.toggle('expanded');
});