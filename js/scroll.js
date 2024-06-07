document.addEventListener('DOMContentLoaded', (event) => {
    const headerBg = document.querySelector('.header-bg');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
       
        headerBg.classList.add('scrolled');
      } else {
        
        headerBg.classList.remove('scrolled');
      }
      lastScrollY = window.scrollY;
    });
  });