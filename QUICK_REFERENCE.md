# VP_KB_2 - Quick Reference Card

Your one-page guide to getting started fast.

---

## 🚀 5-Minute Setup

### 1. Upload to GitHub
```
1. Create repo → VP-KB-v1 (Public)
2. Upload all files
3. Settings → Pages → Enable
4. Wait 5 minutes → Done!
```

### 2. Essential Edits
**File:** `mkdocs.yml`
```yaml
Line 1:   site_name: Your Name Here
Line 3:   site_author: Your Name
Line 4:   site_url: https://username.github.io/repo
Line 6:   repo_url: https://github.com/username/repo
```

### 3. Add Social Links
**File:** `mkdocs.yml` (around line 25)
```yaml
extra:
  social:
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/YOURHANDLE
```

---

## 📁 Key Files

| File | What to Do |
|------|-----------|
| `mkdocs.yml` | ✏️ Edit: Lines 1-5, 25-42 |
| `docs/index.md` | ✏️ Customize homepage |
| `docs/assets/logo.png` | 📷 Replace with your logo |
| `overrides/main.html` | ❌ Don't edit unless needed |
| `docs/stylesheets/extra.css` | 🎨 Edit colors if desired |

---

## 🎨 Quick Customizations

### Change Colors
**File:** `docs/stylesheets/extra.css`
```css
:root {
  --md-primary-fg-color: #000000;    /* Header */
  --md-accent-fg-color: #448aff;     /* Accent */
}
```

### Add Custom Link
**File:** `mkdocs.yml`
```yaml
custom_links:
  - name: Your Link
    url: /your-page/
    icon: "🔗"
```

### Add Social Icon
**File:** `mkdocs.yml`
```yaml
social:
  - icon: fontawesome/brands/linkedin
    link: https://linkedin.com/in/you
```

---

## 📝 Create New Page

1. **Create file:** `docs/section/page.md`
2. **Add content:**
   ```markdown
   # Page Title
   
   Content here...
   ```
3. **Update nav in mkdocs.yml:**
   ```yaml
   nav:
     - Section:
         - Page: section/page.md
   ```

---

## 🔍 Common Issues

| Problem | Solution |
|---------|----------|
| Site not building | Check YAML syntax, wait 5 min |
| Links not showing | Fix indentation in mkdocs.yml |
| 404 errors | Check file paths, case-sensitive |
| Theme wrong | Clear cache, rebuild |

---

## ⌨️ Keyboard Shortcuts

- `Ctrl/Cmd + K` - Search
- `ESC` - Close search
- `Ctrl + Click` - Open in new tab

---

## 📊 Directory Structure

```
VP-KB-v1/
├── mkdocs.yml          ← Configure here
├── docs/
│   ├── index.md        ← Homepage
│   ├── assets/
│   │   └── logo.png    ← Your logo
│   ├── stylesheets/
│   │   └── extra.css   ← Colors
│   └── [your pages]
└── overrides/
    └── main.html       ← Template
```

---

## ✅ Pre-Launch Checklist

- [ ] Site name updated
- [ ] URLs correct
- [ ] Social links added
- [ ] Logo replaced
- [ ] Content added
- [ ] All pages work
- [ ] Mobile tested
- [ ] Search works

---

## 🎯 Priority Actions

**Do First (Required):**
1. Upload files to GitHub
2. Enable GitHub Pages
3. Edit mkdocs.yml lines 1-5
4. Add your logo

**Do Next (Important):**
1. Add social media links
2. Add custom sidebar links
3. Customize homepage
4. Create content pages

**Do Later (Optional):**
1. Change colors
2. Add custom features
3. Optimize performance
4. Add analytics

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview |
| `IMPLEMENTATION_GUIDE.md` | Detailed setup |
| `FILE_STRUCTURE.md` | File explanations |
| `docs/setup.md` | Setup guide |

---

## 🔗 Important Links

- **Your Site:** `https://username.github.io/repo`
- **Repository:** `https://github.com/username/repo`
- **Actions:** `https://github.com/username/repo/actions`
- **Settings:** `https://github.com/username/repo/settings/pages`

---

## 💡 Pro Tips

1. **Test locally first:** `mkdocs serve`
2. **Use spaces, not tabs** in YAML files
3. **Clear cache** if changes don't show
4. **Check Actions tab** for build errors
5. **Commit often** to save work

---

## 🆘 Quick Help

**Syntax Error in YAML:**
```yaml
# Wrong:
-name: Test              # Missing space after dash
  url: /test/

# Correct:
- name: Test             # Space after dash
  url: /test/
```

**Colors Not Changing:**
1. Edit `extra.css`
2. Hard refresh: `Ctrl + Shift + R`
3. Clear browser cache
4. Check browser console for errors

**Page Not Found:**
1. Check file exists in `docs/`
2. Check path in `mkdocs.yml` nav
3. Check case-sensitive filenames
4. Rebuild site

---

## 🎉 You're Ready!

1. **Upload** → 2 minutes
2. **Configure** → 3 minutes  
3. **Deploy** → 5 minutes
4. **Live!** → Total: 10 minutes

**Start here:** Open `IMPLEMENTATION_GUIDE.md` for step-by-step instructions.

---

<div style="text-align: center; padding: 1rem 0; background: rgba(68, 138, 255, 0.1); border-radius: 8px;">
  <strong>Need help?</strong> Check IMPLEMENTATION_GUIDE.md or open a GitHub Issue
</div>
