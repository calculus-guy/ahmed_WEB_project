    function toggleMenu() {
      const overlay = document.getElementById('overlay');
      const menuIcon = document.querySelector('.menu-icon');

      overlay.classList.toggle('show');
      menuIcon.classList.toggle('open');
    }