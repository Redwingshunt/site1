


const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.add('hold-cursor');
  });

  document.addEventListener('mouseup', () => {
    document.body.classList.remove('hold-cursor');
  });

  // Optional: for touch devices (long press)
  document.addEventListener('touchstart', () => {
    document.body.classList.add('hold-cursor');
  });

  document.addEventListener('touchend', () => {
    document.body.classList.remove('hold-cursor');
  });

