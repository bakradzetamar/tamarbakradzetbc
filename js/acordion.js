document.querySelectorAll('.accordion-title').forEach(title => {
    title.addEventListener('click', () => {
      const container = title.parentElement;
      container.classList.toggle('active');
    });
  });