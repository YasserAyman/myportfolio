menuCollapse = document.querySelector('.menu-collapse');
menuButton = document.getElementById('menu-button');

menuButton.onclick = function() {
    menuCollapse.classList.toggle('active');
}