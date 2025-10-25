/**
 * Theme Toggle Script for VP-KB-v1
 * Handles dark/light theme switching with localStorage persistence
 */

(function() {
  'use strict';

  const THEME_KEY = 'vp-kb-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // Get theme toggle button
  const themeToggle = document.getElementById('theme-toggle');

  if (!themeToggle) {
    console.warn('Theme toggle button not found');
    return;
  }

  /**
   * Get the current theme from localStorage or system preference
   * @returns {string} 'dark' or 'light'
   */
  function getCurrentTheme() {
    // Check localStorage first
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme) {
      return savedTheme;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }

    // Default to dark theme as specified in requirements
    return THEME_DARK;
  }

  /**
   * Apply theme to the document
   * @param {string} theme - 'dark' or 'light'
   */
  function applyTheme(theme) {
    const html = document.documentElement;
    const icon = themeToggle.querySelector('i');

    // Update data-theme attribute
    html.setAttribute('data-theme', theme);

    // Update icon
    if (theme === THEME_DARK) {
      icon.className = 'fas fa-sun'; // Show sun icon in dark mode
    } else {
      icon.className = 'fas fa-moon'; // Show moon icon in light mode
    }

    // Save to localStorage
    localStorage.setItem(THEME_KEY, theme);

    // Update aria-label for accessibility
    themeToggle.setAttribute('aria-label',
      theme === THEME_DARK ? 'Switch to light theme' : 'Switch to dark theme'
    );
  }

  /**
   * Toggle between dark and light themes
   */
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    applyTheme(newTheme);

    // Add a subtle animation effect
    document.body.style.transition = 'none';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 10);
  }

  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
  }

  // Initialize theme immediately to prevent flash
  initTheme();

  // Add click event listener to toggle button
  themeToggle.addEventListener('click', toggleTheme);

  // Add keyboard support (Enter and Space keys)
  themeToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleTheme();
    }
  });

  // Listen for system theme changes
  if (window.matchMedia) {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Modern browsers
    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', function(e) {
        // Only auto-switch if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
    // Older browsers
    else if (darkModeQuery.addListener) {
      darkModeQuery.addListener(function(e) {
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }

  // Expose theme functions to global scope for debugging
  window.vpkbTheme = {
    toggle: toggleTheme,
    set: applyTheme,
    get: getCurrentTheme,
    reset: function() {
      localStorage.removeItem(THEME_KEY);
      initTheme();
    }
  };

  console.log('VP-KB Theme Toggle initialized. Current theme:', getCurrentTheme());
})();
