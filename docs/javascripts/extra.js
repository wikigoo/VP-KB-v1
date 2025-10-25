// Custom JavaScript for VP_KB_2

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
  
  // Add smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add external link indicators
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      
      // Add visual indicator for external links
      if (!link.querySelector('.external-link-icon')) {
        const icon = document.createElement('span');
        icon.className = 'external-link-icon';
        icon.innerHTML = ' ↗';
        icon.style.fontSize = '0.8em';
        icon.style.opacity = '0.6';
        link.appendChild(icon);
      }
    }
  });

  // Enhanced search functionality
  const searchInput = document.querySelector('.md-search__input');
  if (searchInput) {
    searchInput.setAttribute('placeholder', 'Search knowledge base...');
  }

  // Add copy button functionality to code blocks
  document.querySelectorAll('pre code').forEach((block) => {
    if (!block.parentElement.querySelector('.copy-button')) {
      const button = document.createElement('button');
      button.className = 'copy-button';
      button.textContent = 'Copy';
      button.style.cssText = `
        position: absolute;
        top: 5px;
        right: 5px;
        padding: 5px 10px;
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 3px;
        color: rgba(255,255,255,0.7);
        cursor: pointer;
        font-size: 12px;
        transition: all 0.2s;
      `;
      
      button.addEventListener('click', () => {
        const code = block.textContent;
        navigator.clipboard.writeText(code).then(() => {
          button.textContent = 'Copied!';
          button.style.background = 'rgba(76, 175, 80, 0.3)';
          setTimeout(() => {
            button.textContent = 'Copy';
            button.style.background = 'rgba(255,255,255,0.1)';
          }, 2000);
        });
      });
      
      button.addEventListener('mouseenter', () => {
        button.style.background = 'rgba(255,255,255,0.2)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.background = 'rgba(255,255,255,0.1)';
      });
      
      block.parentElement.style.position = 'relative';
      block.parentElement.appendChild(button);
    }
  });

  // Add last updated timestamp
  const footer = document.querySelector('.md-footer-copyright');
  if (footer) {
    const lastUpdated = document.createElement('div');
    lastUpdated.style.cssText = `
      margin-top: 10px;
      font-size: 0.8em;
      opacity: 0.6;
    `;
    lastUpdated.textContent = `Last updated: ${new Date().toLocaleDateString()}`;
    footer.appendChild(lastUpdated);
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const searchButton = document.querySelector('[data-md-component="search-query"]');
      if (searchButton) {
        searchButton.focus();
      }
    }
    
    // ESC to close search
    if (e.key === 'Escape') {
      const searchInput = document.querySelector('.md-search__input');
      if (searchInput && document.activeElement === searchInput) {
        searchInput.blur();
      }
    }
  });

  // Analytics placeholder (add your analytics code here)
  console.log('VP_KB_2 Knowledge Base loaded successfully');
  
  // Add version indicator
  const version = '2.0.0';
  console.log(`Version: ${version}`);
});

// Custom link tracking (optional)
function trackCustomLink(linkName) {
  console.log('Custom link clicked:', linkName);
  // Add your analytics tracking here
}

// Utility function for theme switching (if needed in future)
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('light-theme');
  localStorage.setItem('theme', body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme preference
(function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
  }
})();
