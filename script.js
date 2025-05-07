// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Sticky Navigation
window.onscroll = function() {
    const nav = document.querySelector('.nav');
    if (window.pageYOffset > 100) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
  };
// Fade-in Page Load
window.addEventListener('load', () => {
    document.body.style.opacity = 1;
    document.body.style.transition = 'opacity 1s ease';
  });
      // Include all the JavaScript code provided above
