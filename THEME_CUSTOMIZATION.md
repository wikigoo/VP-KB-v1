# Theme Customization Guide

This guide explains how to customize the optimized dark theme template for VP-KB-v1.

## Features

### 1. Dark Theme (Default)
The site now includes a beautiful dark theme that is:
- Easy on the eyes
- Optimized for readability
- Fully responsive
- Accessible with proper contrast ratios
- Supports system preference detection

### 2. Theme Toggle
A theme toggle button appears in the top-right corner of every page:
- Click to switch between dark and light themes
- Your preference is saved in browser localStorage
- Automatically respects system preferences if no manual selection is made
- Smooth transitions between themes

### 3. Social Media Footer
Display social media icons in the footer for:
- Twitter
- Instagram
- Telegram
- YouTube

### 4. Custom Sidebar Links
Add custom links in the sidebar that appear:
- Under the logo
- Above the download buttons (ZIP/TAR/GitHub)

## Configuration

### Setting Up Social Media Links

Edit `_config.yml` and update the `social_media` section:

```yaml
social_media:
  twitter: https://twitter.com/your_username
  instagram: https://instagram.com/your_username
  telegram: https://t.me/your_channel
  youtube: https://youtube.com/@your_channel
```

**Note:** Only configured platforms will be displayed. Remove or comment out any platforms you don't want to show.

### Adding Custom Sidebar Links

Edit `_config.yml` and update the `custom_links` section:

```yaml
custom_links:
  - title: Documentation
    url: /docs/
    icon: fas fa-book
    external: false
  - title: Community Forum
    url: https://github.com/wikigoo/VP-KB-v1/discussions
    icon: fas fa-comments
    external: true
  - title: Report Issue
    url: https://github.com/wikigoo/VP-KB-v1/issues
    icon: fas fa-bug
    external: true
```

**Parameters:**
- `title`: The link text to display
- `url`: The URL (relative or absolute)
- `icon`: Font Awesome icon class (optional)
- `external`: Set to `true` to open in a new tab

**Available Icons:**
The template uses Font Awesome 6.5.1. You can use any icon from:
- https://fontawesome.com/icons

Common icon classes:
- `fas fa-book` - Book/Documentation
- `fas fa-comments` - Forum/Discussion
- `fas fa-bug` - Bug/Issue
- `fas fa-hands-helping` - Contribution
- `fas fa-link` - Generic link
- `fas fa-external-link-alt` - External link
- `fas fa-info-circle` - Information
- `fas fa-question-circle` - Help/FAQ

### Changing Default Theme

Edit `_config.yml` and set the `theme_mode`:

```yaml
theme_mode: dark  # Options: dark, light
```

## File Structure

```
VP-KB-v1/
├── _layouts/
│   └── default.html          # Main template with dark theme
├── assets/
│   ├── css/
│   │   ├── dark-theme.css    # Dark theme styles
│   │   └── style.scss        # Main stylesheet
│   └── js/
│       ├── theme-toggle.js   # Theme switching logic
│       └── scale.fix.js      # Original scaling fix
└── _config.yml               # Site configuration
```

## Customizing Colors

To customize the dark theme colors, edit `/assets/css/dark-theme.css`:

### Light Theme Colors
```css
:root {
  --bg-color: #ffffff;
  --text-color: #727272;
  --heading-color: #222222;
  --link-color: #267CB9;
  /* ... more variables ... */
}
```

### Dark Theme Colors
```css
[data-theme="dark"] {
  --bg-color: #0d1117;
  --text-color: #c9d1d9;
  --heading-color: #f0f6fc;
  --link-color: #58a6ff;
  /* ... more variables ... */
}
```

## Browser Compatibility

The dark theme is compatible with:
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Opera 74+

### Fallbacks
- Older browsers will use the light theme
- CSS custom properties with fallback values
- Progressive enhancement approach

## Accessibility Features

1. **Color Contrast**: All text meets WCAG AA standards
2. **Keyboard Navigation**: Theme toggle is keyboard accessible
3. **Screen Readers**: Proper ARIA labels on all interactive elements
4. **Reduced Motion**: Respects `prefers-reduced-motion` setting
5. **High Contrast**: Enhanced borders in high contrast mode

## Troubleshooting

### Theme toggle not working
- Ensure `/assets/js/theme-toggle.js` is loaded
- Check browser console for JavaScript errors
- Clear localStorage: `localStorage.removeItem('vp-kb-theme')`

### Social media icons not showing
- Verify Font Awesome CDN is loaded
- Check `social_media` configuration in `_config.yml`
- Ensure URLs are properly formatted

### Custom links not appearing
- Verify `custom_links` section in `_config.yml`
- Check YAML indentation (use spaces, not tabs)
- Rebuild the site after config changes

### Colors not changing
- Ensure `dark-theme.css` is loaded after `style.css`
- Clear browser cache
- Check CSS custom property support in browser

## Advanced Customization

### Adding More Social Platforms

1. Edit `_layouts/default.html`
2. Add a new social media block in the footer:

```html
{% if site.social_media.linkedin %}
<a href="{{ site.social_media.linkedin }}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="social-icon">
  <i class="fab fa-linkedin"></i>
</a>
{% endif %}
```

3. Add the URL to `_config.yml`:

```yaml
social_media:
  linkedin: https://linkedin.com/in/your_profile
```

### Customizing Link Sections

You can create multiple custom link sections by:
1. Duplicating the custom links block in `default.html`
2. Using different config keys (e.g., `resource_links`, `tool_links`)
3. Styling with custom CSS classes

## Support

For issues or questions:
- Open an issue: https://github.com/wikigoo/VP-KB-v1/issues
- Check documentation: https://wikigoo.github.io/VP-KB-v1/

## Credits

- Theme based on: [jekyll-theme-minimal](https://github.com/pages-themes/minimal)
- Icons by: [Font Awesome](https://fontawesome.com)
- Color scheme inspired by: GitHub Dark Theme
