document.addEventListener("DOMContentLoaded", () => {
    // --- LOADING SCREEN LOGIC ---
    const loader = document.getElementById('loader-wrapper');
    
    // Add a slight delay (800ms) to ensure the loader is seen before fading out
    setTimeout(() => {
      if (loader) {
        loader.classList.add('fade-out');
        
        // Remove from DOM entirely after the 500ms fade transition
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500); // Matches the CSS transition duration
      }
    }, 800); 
  });