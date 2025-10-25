# VP_KB_2 - AI Knowledge Center

A comprehensive, dark-themed knowledge base built with MkDocs Material, optimized for AI chatbot implementations across Gemini, ChatGPT, and Claude platforms.

## Features

✨ **Dark Theme by Default** - Professional slate theme optimized for extended reading  
🔗 **Custom Sidebar Links** - Easily add custom links above download buttons  
📱 **Social Media Footer** - Integrated Twitter, Instagram, Telegram, and YouTube icons  
📚 **Multi-Platform Support** - Optimized for Gemini-GEM, ChatGPT-GPT, and Claude-Project  
🔍 **Advanced Search** - Full-text search with suggestions and highlighting  
📦 **Download Options** - ZIP, TAR Ball, and direct GitHub access  
🎨 **Responsive Design** - Mobile-friendly and accessible  

## Quick Start

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/VP-KB-v1.git
cd VP-KB-v1

# Install MkDocs and dependencies
pip install mkdocs-material
pip install mkdocs-minify-plugin

# Serve locally
mkdocs serve
```

Visit `http://127.0.0.1:8000` to view your site.

### Deploy to GitHub Pages

```bash
# Build and deploy
mkdocs gh-deploy

# Or use GitHub Actions (recommended)
# See .github/workflows/ci.yml
```

## Customization

### 1. Update Site Configuration

Edit `mkdocs.yml`:

```yaml
site_name: Your Site Name
site_author: Your Name
repo_url: https://github.com/yourusername/your-repo
```

### 2. Add Custom Sidebar Links

In `mkdocs.yml`, modify the `extra.custom_links` section:

```yaml
extra:
  custom_links:
    - name: Documentation
      url: /documentation/
      icon: "📚"
    - name: API Reference
      url: /api/
      icon: "⚙️"
    - name: Support
      url: /support/
      icon: "💬"
```

### 3. Configure Social Media Links

Update the `extra.social` section:

```yaml
extra:
  social:
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/yourhandle
      name: Twitter
    - icon: fontawesome/brands/instagram
      link: https://instagram.com/yourhandle
      name: Instagram
    - icon: fontawesome/brands/telegram
      link: https://t.me/yourhandle
      name: Telegram
    - icon: fontawesome/brands/youtube
      link: https://youtube.com/@yourhandle
      name: YouTube
```

### 4. Customize Logo

Replace `docs/assets/logo.png` with your logo (recommended size: 240x240px).

### 5. Modify Theme Colors

Edit `docs/stylesheets/extra.css`:

```css
:root {
  --md-primary-fg-color: #000000;
  --md-accent-fg-color: #448aff; /* Change accent color */
}
```

## Project Structure

```
VP-KB-v1/
├── docs/
│   ├── index.md                    # Homepage
│   ├── assets/
│   │   ├── logo.png               # Site logo
│   │   └── favicon.png            # Favicon
│   ├── stylesheets/
│   │   └── extra.css              # Custom CSS
│   ├── javascripts/
│   │   └── extra.js               # Custom JavaScript
│   ├── chatbots/                  # Chatbot implementations
│   ├── categories/                # Content categories
│   ├── creative/                  # Creative content guides
│   ├── education/                 # Educational consultants
│   └── equipment/                 # Equipment guides
├── overrides/
│   └── main.html                  # Custom template
├── mkdocs.yml                     # Main configuration
└── README.md                      # This file
```

## Content Organization

### Chatbot Implementations
- **Gemini-GEM**: Google's Gemini platform
- **ChatGPT-GPT**: OpenAI's GPT models
- **Claude-Project**: Anthropic's Claude

### Categories
1. **AI Tools**
2. **Digital Investigation**
3. **Journalism**
4. **Podcast**
5. **Video Production**

### Content Types

**Creative Content Production:**
- Blog Post Writer
- Podcast Scripts & TTS
- News Writing & Editing
- AI Content Tools

**Educational Consultants:**
- Nature Photography
- Documentary Editing
- Deep Research
- Avid News Editor
- AI Journalism

**Equipment & Software:**
- News Video Production
- Adobe Premiere 2025
- Canon R8 Camera
- Sony Z90 Camera
- vMix Streaming

## Adding New Content

### Create a New Page

1. Create a Markdown file in the appropriate directory:
   ```bash
   docs/categories/new-category.md
   ```

2. Add front matter:
   ```markdown
   ---
   title: Your Page Title
   description: Brief description
   ---
   
   # Your Page Title
   
   Content goes here...
   ```

3. Update navigation in `mkdocs.yml`:
   ```yaml
   nav:
     - New Section:
         - Page Name: categories/new-category.md
   ```

### Content Guidelines

- Use clear, descriptive headings
- Include code examples in fenced blocks
- Add admonitions for tips, warnings, and notes
- Keep sections focused and concise
- Use consistent formatting

## Features Breakdown

### Dark Theme
- Optimized slate color scheme
- Reduced eye strain for extended reading
- Professional appearance
- Consistent across all pages

### Custom Sidebar
- Logo placement at top
- Custom links section (configurable)
- Download buttons (ZIP, TAR, GitHub)
- Category navigation
- Collapsible sections

### Enhanced Footer
- Social media icon integration
- Copyright information
- Last updated timestamp
- Responsive layout

### Advanced Search
- Full-text search
- Search suggestions
- Result highlighting
- Keyboard shortcuts (Ctrl/Cmd + K)

## Keyboard Shortcuts

- `Ctrl/Cmd + K` - Open search
- `ESC` - Close search
- `Ctrl + Click` - Open link in new tab

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## Troubleshooting

### Site Not Building

```bash
# Check Python version
python --version  # Should be 3.8+

# Reinstall dependencies
pip install --upgrade mkdocs-material
```

### Custom Links Not Showing

- Verify `mkdocs.yml` syntax
- Check indentation (use spaces, not tabs)
- Clear browser cache
- Rebuild site: `mkdocs build --clean`

### Social Icons Missing

- Ensure Font Awesome is loaded
- Check icon names in `extra.social`
- Verify Material theme version

## Development

### Local Development

```bash
# Start development server with live reload
mkdocs serve

# Build static site
mkdocs build

# Clean build artifacts
mkdocs build --clean
```

### Testing

- Test on multiple browsers
- Check mobile responsiveness
- Verify all links work
- Test search functionality
- Check social media links

## Deployment

### GitHub Pages (Recommended)

1. **Manual Deploy:**
   ```bash
   mkdocs gh-deploy
   ```

2. **Automatic Deploy (GitHub Actions):**
   
   Create `.github/workflows/ci.yml`:
   ```yaml
   name: ci
   on:
     push:
       branches:
         - main
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-python@v2
           with:
             python-version: 3.x
         - run: pip install mkdocs-material
         - run: mkdocs gh-deploy --force
   ```

### Custom Domain

1. Add `CNAME` file to `docs/` directory
2. Configure DNS settings
3. Enable HTTPS in GitHub Pages settings

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test locally
5. Submit pull request

## License

Some rights reserved 2025©

## Maintainer

**wikigoo**

## Support

- GitHub Issues: [Report bugs](https://github.com/yourusername/VP-KB-v1/issues)
- Documentation: [Full docs](https://yourusername.github.io/VP-KB-v1)

## Changelog

### Version 2.0.0
- ✨ Dark theme implementation
- 🔗 Custom sidebar links
- 📱 Social media footer
- 🎨 Enhanced CSS styling
- 📦 Download button integration
- 🔍 Advanced search features

---

Built with [MkDocs](https://www.mkdocs.org/) and [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
