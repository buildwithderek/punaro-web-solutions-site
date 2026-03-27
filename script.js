/* ========== FAQ ACCORDION ========== */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const wasOpen = item.classList.contains('open');
  
      // Close all FAQ items
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  
      // Toggle the clicked item (open it if it wasn't already open)
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });