document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const menu = document.querySelector('.navbar .menu');
    const menuLinks = document.querySelectorAll('.navbar .menu a');
  
    /* Toggle menu and hamburger button state when the button is clicked */
    
    hamburgerButton.addEventListener('click', function () {
      hamburgerButton.classList.toggle('active');
      menu.classList.toggle('scaled');
    });
  
    /* Remove active and scaled classes when a menu link is clicked */

    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburgerButton.classList.remove('active');
        menu.classList.remove('scaled');
      });
    });
  });
  
  