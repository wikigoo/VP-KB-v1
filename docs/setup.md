# Quick Setup Guide

Get your VP_KB_2 Knowledge Center up and running in minutes.

---

## Prerequisites

Before starting, ensure you have:

- ✅ GitHub account
- ✅ Git installed (optional, for local development)
- ✅ Python 3.8+ (optional, for local testing)
- ✅ Text editor (VS Code, Sublime, or similar)

---

## Option 1: GitHub-Only Setup (No Local Installation)

Perfect for quick deployment without local development.

### Step 1: Create Repository

1. Go to [GitHub](https://github.com)
2. Click **New Repository**
3. Name: `VP-KB-v1` (or your preferred name)
4. Set to **Public**
5. Initialize with README
6. Click **Create Repository**

### Step 2: Upload Files

1. **Download** the VP_KB_2 package
2. **Extract** all files
3. In your repository, click **Add file** > **Upload files**
4. **Drag and drop** all folders and files
5. **Commit** changes

### Step 3: Enable GitHub Pages

1. Go to **Settings** > **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/ (root)**
5. Click **Save**

### Step 4: Wait for Deployment

- First build: 2-5 minutes
- Check **Actions** tab for progress
- Your site URL will appear in Pages settings

---

## Option 2: Local Development Setup

Best for testing and customization before deployment.

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/VP-KB-v1.git
cd VP-KB-v1
```

### Step 2: Install Dependencies

```bash
pip install -r requirements.txt
```

Or install manually:

```bash
pip install mkdocs-material
pip install mkdocs-minify-plugin
```

### Step 3: Test Locally

```bash
mkdocs serve
```

Visit `http://127.0.0.1:8000`

### Step 4: Deploy

```bash
mkdocs gh-deploy
```

---

## Customization Guide

### Update Site Information

Edit `mkdocs.yml`:

```yaml
# Line 1-3: Basic Info
site_name: Your Site Name
site_description: Your description
site_author: Your Name

# Line 4-5: URLs
site_url: https://yourusername.github.io/your-repo
repo_url: https://github.com/yourusername/your-repo
```

### Add Custom Sidebar Links

In `mkdocs.yml`, find `extra.custom_links`:

```yaml
extra:
  custom_links:
    - name: Your Link Name
      url: /your-page/
      icon: "🔗"
```

**Available Emoji Icons:**
- 📚 Documentation
- 🎓 Tutorials  
- ⚙️ Settings
- 💬 Support
- 📊 Analytics
- 🔍 Search
- 📝 Blog

### Update Social Media Links

In `mkdocs.yml`, find `extra.social`:

```yaml
extra:
  social:
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/yourhandle
    - icon: fontawesome/brands/instagram
      link: https://instagram.com/yourhandle
    - icon: fontawesome/brands/telegram
      link: https://t.me/yourhandle
    - icon: fontawesome/brands/youtube
      link: https://youtube.com/@yourhandle
```

**Other Available Icons:**
- `fontawesome/brands/linkedin`
- `fontawesome/brands/github`
- `fontawesome/brands/facebook`
- `fontawesome/brands/tiktok`
- `fontawesome/brands/discord`

### Change Logo

1. Replace `docs/assets/logo.png` with your logo
2. Recommended size: **240×240px**
3. Format: PNG with transparency
4. Keep filename as `logo.png`

### Modify Colors

Edit `docs/stylesheets/extra.css`:

```css
:root {
  --md-primary-fg-color: #000000;      /* Header color */
  --md-primary-bg-color: #1a1a1a;      /* Background */
  --md-accent-fg-color: #448aff;       /* Accent color */
}
```

**Popular Color Schemes:**

**Blue Theme:**
```css
--md-primary-fg-color: #1976d2;
--md-accent-fg-color: #448aff;
```

**Green Theme:**
```css
--md-primary-fg-color: #388e3c;
--md-accent-fg-color: #66bb6a;
```

**Purple Theme:**
```css
--md-primary-fg-color: #7b1fa2;
--md-accent-fg-color: #ab47bc;
```

---

## Adding Content

### Create New Page

1. **Create file** in `docs/` folder:
   ```
   docs/your-section/new-page.md
   ```

2. **Add front matter:**
   ```markdown
   ---
   title: Page Title
   description: Brief description
   ---
   
   # Page Title
   
   Your content here...
   ```

3. **Update navigation** in `mkdocs.yml`:
   ```yaml
   nav:
     - Your Section:
         - Page Name: your-section/new-page.md
   ```

### Content Structure

Use this template for consistent pages:

```markdown
# Page Title

Brief introduction paragraph.

---

## Main Section

Content here...

### Subsection

More detailed content...

---

## Code Examples

\`\`\`python
def example():
    return "Hello World"
\`\`\`

---

## Best Practices

!!! tip "Pro Tip"
    Your helpful tip here

!!! warning "Warning"
    Important warning

!!! info "Information"
    Additional info

---

## Next Steps

- [Related Page 1](../link1.md)
- [Related Page 2](../link2.md)
```

---

## Troubleshooting

### Issue: Site Not Building

**Solution:**
```bash
# Check Python version
python --version

# Reinstall dependencies
pip install --upgrade mkdocs-material

# Clean build
mkdocs build --clean
```

### Issue: Custom Links Not Showing

**Solution:**
1. Check YAML indentation (use spaces, not tabs)
2. Verify syntax in `mkdocs.yml`
3. Clear browser cache
4. Rebuild: `mkdocs build --clean`

### Issue: 404 Errors

**Solution:**
1. Check file paths are correct
2. Ensure files exist in `docs/` folder
3. Verify navigation in `mkdocs.yml`
4. Check case sensitivity in filenames

### Issue: Theme Not Loading

**Solution:**
```bash
# Reinstall theme
pip uninstall mkdocs-material
pip install mkdocs-material

# Verify installation
pip show mkdocs-material
```

---

## Testing Checklist

Before deployment, verify:

- [ ] All pages load correctly
- [ ] Navigation links work
- [ ] Custom links appear in sidebar
- [ ] Social media icons link correctly
- [ ] Download buttons work
- [ ] Search functionality works
- [ ] Mobile responsive
- [ ] No 404 errors
- [ ] Images load properly
- [ ] Code blocks format correctly

---

## Deployment Checklist

- [ ] Site name updated
- [ ] Author information set
- [ ] Repository URL correct
- [ ] Social links configured
- [ ] Custom links added
- [ ] Logo replaced
- [ ] Colors customized
- [ ] Content added
- [ ] Navigation organized
- [ ] Tested locally
- [ ] GitHub Pages enabled
- [ ] First deployment successful

---

## Performance Optimization

### Enable Minification

Already configured in `mkdocs.yml`:

```yaml
plugins:
  - minify:
      minify_html: true
```

### Optimize Images

- Use WebP format when possible
- Compress images before upload
- Recommended max width: 1200px
- Use lazy loading for images

### Cache Configuration

GitHub Pages automatically handles caching. No additional configuration needed.

---

## Maintenance

### Regular Updates

```bash
# Update dependencies
pip install --upgrade mkdocs-material

# Check for security updates
pip list --outdated

# Update specific package
pip install --upgrade package-name
```

### Content Updates

1. Edit files in `docs/` folder
2. Test locally: `mkdocs serve`
3. Commit changes to Git
4. Push to GitHub
5. Automatic deployment via Actions

### Backup

1. Regular Git commits
2. GitHub automatically backs up
3. Export to ZIP periodically
4. Keep local copy synchronized

---

## Next Steps

✅ **Setup Complete!**

Now you can:

1. [Add Content](../documentation/) - Create your knowledge base
2. [Customize Design](../customization/) - Make it yours
3. [Optimize SEO](../seo/) - Improve discoverability
4. [Monitor Analytics](../analytics/) - Track performance

---

## Support

Need help?

- 📚 [Full Documentation](/)
- 💬 [GitHub Discussions](https://github.com/yourusername/VP-KB-v1/discussions)
- 🐛 [Report Issues](https://github.com/yourusername/VP-KB-v1/issues)
- 📧 Email: your-email@example.com

---

<div style="text-align: center; padding: 2rem 0;">
  <p><strong>Ready to start building?</strong></p>
  <a href="/" class="md-button md-button--primary">Back to Home</a>
</div>
