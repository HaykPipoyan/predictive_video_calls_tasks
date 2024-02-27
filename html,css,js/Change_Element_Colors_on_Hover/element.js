document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
      item.addEventListener('mouseover', function() {
        this.style.color = '#f00'; // Change color on mouseover
      });
      
      item.addEventListener('mouseout', function() {
        this.style.color = '#000'; // Change color back on mouseout
      });
    });
  });
  