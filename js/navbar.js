document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.navbar .menu');
    const hamburgerButton = document.querySelector('.hamburger-button');
  
    hamburgerButton.addEventListener('click', function () {
      menu.classList.toggle('scaled');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger-button');
  
    hamburgerButton.addEventListener('click', function () {
      hamburgerButton.classList.toggle('active');
    });
  });
  