document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.navbar .menu');
    const menuLinks = document.querySelectorAll('.navbar .menu a');
  
    /* TOGGLE MENU AND HAMBURGER BUTTON STATE WHEN THE BUTTON IS CLICKED */
    hamburgerButton.addEventListener('click', function () {
      hamburgerButton.classList.toggle('active');
      menu.classList.toggle('scaled');
    });
  
    /* REMOVE ACTIVE AND SCALED CLASSES WHEN A MENU LINK IS CLICKED */
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburgerButton.classList.remove('active');
        menu.classList.remove('scaled');
      });
    });
  });
  
  