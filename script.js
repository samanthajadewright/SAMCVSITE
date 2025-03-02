document.addEventListener('DOMContentLoaded', () => {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        // Toggle display
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    });
  });
  