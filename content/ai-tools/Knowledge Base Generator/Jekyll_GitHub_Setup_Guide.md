# Complete Jekyll Setup Guide for GitHub Pages
## AI Chatbot Knowledge Center Implementation

---

## Table of Contents

### I. Knowledge Center Hosting: GitHub & Jekyll Setup (No Local CLI)
- I.A. GitHub Repository Creation
- I.B. Jekyll Activation
- I.C. Initial Site Cleanup
- I.D. Creating the Core Navigation

### II. Information Architecture and Filing
- II.A. Directory Structure for Knowledge
- II.B. Setting Up Cross-Linking (Relative Paths)
- II.C. General Knowledge Base Classification

### III. Knowledge Document Creation and Templating
- III.A. Core Document Types
- III.B. Structural Optimization for LLMs
- III.C. Content Length Guidelines

### IV. Search and Discovery Implementation
- IV.A. Basic SEO for GitHub Pages
- IV.B. Internal Search Implementation (Static Method)

### V. Maintenance and Scaling
- V.A. Template for New Assistant Creation
- V.B. Simple Content Update Workflow

---

## I. Knowledge Center Hosting: GitHub & Jekyll Setup (No Local CLI)

### I.A. GitHub Repository Creation

**Step 1: Create New Repository**

1. Navigate to [github.com](https://github.com) and log in
2. Click the **+** icon (top-right) → Select **New repository**
3. Configure repository settings:
   - **Repository name**: `ai-knowledge-center` (or your preferred name)
   - **Description**: "AI Chatbot Knowledge Center for LLM Training"
   - **Visibility**: **Public** (required for free GitHub Pages)
   - **Initialize**: ✅ Check "Add a README file"
4. Click **Create repository**

**Step 2: Verify Repository Settings**

1. Navigate to repository **Settings** tab
2. In left sidebar, click **Pages** (under "Code and automation")
3. Confirm repository is public
4. Note the URL format that will be generated

**Important URL Structure:**
- Standard project: `https://username.github.io/repository-name/`
- User/org site: `https://username.github.io/` (requires repo name: `username.github.io`)

---

### I.B. Jekyll Activation

**Step 1: Enable GitHub Pages**

1. In repository, go to **Settings** → **Pages**
2. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**
   - **Branch**: Select **main** (or **master**)
   - **Folder**: Select **/ (root)**
3. Click **Save**

**Step 2: Verify Activation**

1. Wait 1-5 minutes for initial build
2. Check **Actions** tab for workflow status
3. Return to **Settings** → **Pages**
4. Click the generated site URL to verify deployment

**Step 3: Create Jekyll Configuration File**

1. Go to **Code** tab (repository main page)
2. Click **Add file** → **Create new file**
3. Name the file: `_config.yml`
4. Add this configuration:

### `_config.yml`

```yaml
# Site Settings
title: AI Knowledge Center
description: Specialized knowledge base for AI chatbot training and prompt engineering
url: "https://yourusername.github.io"
baseurl: "/repository-name"  # Use "" if repo name is username.github.io

# Build Settings
markdown: kramdown
kramdown:
  parse_block_html: true
  input: GFM
  syntax_highlighter: rouge

# Permalink Style
permalink: pretty

# Plugins (GitHub Pages Compatible)
plugins:
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-feed
  - jekyll-relative-links

# Relative Links Configuration
relative_links:
  enabled: true
  collections: true

# Jekyll SEO Tag Settings
social:
  name: Your Name
  links:
    - https://github.com/yourusername

# Site Features
show_downloads: true
show_excerpts: true

# Collections (for organized content)
collections:
  creative_prompts:
    output: true
    permalink: /:collection/:name/
  consultant_manuals:
    output: true
    permalink: /:collection/:name/

# Defaults
defaults:
  - scope:
      path: ""
      type: "pages"
    values:
      layout: "default"
  - scope:
      path: ""
      type: "creative_prompts"
    values:
      layout: "default"
      category: "creative"
  - scope:
      path: ""
      type: "consultant_manuals"
    values:
      layout: "default"
      category: "consultant"

# Include/Exclude Files
include:
  - _pages
  - .htaccess

exclude:
  - Gemfile
  - Gemfile.lock
  - node_modules
  - vendor/
  - .sass-cache/
  - .jekyll-cache/
  - LICENSE
  - README.md

# Sass/SCSS Settings
sass:
  style: compressed
  sass_dir: _sass

# Timezone
timezone: America/New_York

# Search Configuration
search_enabled: true

# Footer Configuration
footer_content: >
  AI Knowledge Center © 2025. Creative Content & Educational Resources for AI Assistants.

# GitHub Pages Specific
github:
  repository_url: https://github.com/yourusername/repository-name
  is_project_page: true

# Liquid Settings
liquid:
  error_mode: strict
  strict_filters: true
```

5. Scroll down → Commit message: "Add Jekyll configuration"
6. Click **Commit changes**

---

### I.C. Initial Site Cleanup

**Step 1: Remove Default Theme**

1. Open `_config.yml` (click pencil icon to edit)
2. Look for and **DELETE** any line containing `theme:` (e.g., `theme: jekyll-theme-minimal`)
3. Commit with message: "Remove default theme"

**Step 2: Delete Default Boilerplate**

Delete these files/folders if they exist:
- `_posts/` directory
- `about.md`
- Any auto-generated blog content

**How to delete:**
1. Click on file/folder name
2. Click trash can icon (🗑️)
3. Commit with message: "Remove default content"

**Step 3: Verify Clean Slate**

1. Visit your GitHub Pages URL
2. Should show blank page or basic file listing
3. Confirms no theme interference

---

### I.D. Creating the Core Navigation

**Step 1: Create Default Layout**

1. Click **Add file** → **Create new file**
2. Name: `_layouts/default.html`
3. Add this content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ page.title | default: site.title }}</title>
    <meta name="description" content="{{ page.description | default: site.description }}">
    
    {% if site.plugins contains "jekyll-seo-tag" %}
        {% seo %}
    {% endif %}
    
    <style>
        /* Minimal CSS for clean layout */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        header {
            background: #0366d6;
            color: white;
            padding: 20px 0;
            margin-bottom: 30px;
        }
        header h1 {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        nav {
            max-width: 1200px;
            margin: 10px auto 0;
            padding: 0 20px;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin-right: 20px;
            padding: 5px 10px;
            border-radius: 3px;
            transition: background 0.3s;
        }
        nav a:hover {
            background: rgba(255,255,255,0.2);
        }
        main {
            padding: 20px 0;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 20px 0 10px;
            color: #24292e;
        }
        h1 { font-size: 2em; border-bottom: 2px solid #e1e4e8; padding-bottom: 10px; }
        h2 { font-size: 1.5em; border-bottom: 1px solid #e1e4e8; padding-bottom: 8px; }
        h3 { font-size: 1.25em; }
        p, ul, ol { margin-bottom: 15px; }
        a { color: #0366d6; text-decoration: none; }
        a:hover { text-decoration: underline; }
        code {
            background: #f6f8fa;
            padding: 2px 6px;
            border-radius: 3px;
            font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
        }
        pre {
            background: #f6f8fa;
            padding: 15px;
            border-radius: 5px;
            overflow-x: auto;
            margin-bottom: 15px;
        }
        pre code {
            background: none;
            padding: 0;
        }
        footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #e1e4e8;
            text-align: center;
            color: #586069;
            font-size: 0.9em;
        }
        .knowledge-section {
            margin: 30px 0;
            padding: 20px;
            background: #fafbfc;
            border: 1px solid #e1e4e8;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <header>
        <h1>{{ site.title }}</h1>
        <nav>
            <a href="{{ '/' | relative_url }}">Home</a>
            <a href="{{ '/creative-prompts/' | relative_url }}">Creative Content</a>
            <a href="{{ '/consultant-manuals/' | relative_url }}">Educational Consultants</a>
            <a href="{{ '/search/' | relative_url }}">Search</a>
        </nav>
    </header>
    
    <div class="container">
        <main>
            {{ content }}
        </main>
        
        <footer>
            {{ site.footer_content }}
        </footer>
    </div>
</body>
</html>
```

4. Commit with message: "Add default layout"

**Step 2: Create Homepage**

1. Click **Add file** → **Create new file**
2. Name: `index.md`
3. Add this content:

```markdown
---
layout: default
title: AI Knowledge Center - Home
description: Comprehensive knowledge base for AI chatbot training and prompt engineering
---

# Welcome to AI Knowledge Center

## Purpose
This knowledge center provides structured, LLM-optimized documentation for training specialized AI chatbot assistants across creative content production and educational consulting domains.

## Knowledge Domains

### Creative Content Production Assistants
Specialized prompts, templates, and samples for content generation:

- [Blog Post Writer]({{ '/creative-prompts/blog-post-writer/' | relative_url }})
- [Podcast Script Writer]({{ '/creative-prompts/podcast-script-writer/' | relative_url }})
- [News Article Writer]({{ '/creative-prompts/news-article-writer/' | relative_url }})
- [Text-to-Image Prompt Generator]({{ '/creative-prompts/text-to-image-prompt/' | relative_url }})

### Educational Consultants
In-depth manuals and reference guides for specialized consultants:

- [Nature Photography Consultant]({{ '/consultant-manuals/nature-photography/' | relative_url }})
- [Documentary Editing Consultant]({{ '/consultant-manuals/documentary-editing/' | relative_url }})
- [Deep Internet Research Consultant]({{ '/consultant-manuals/deep-research/' | relative_url }})
- [News Video Production Guide]({{ '/consultant-manuals/news-production/' | relative_url }})

## How to Use This Knowledge Base

1. **Browse by Category**: Navigate using the menu above
2. **Search**: Use the search function to find specific topics
3. **LLM Training**: Copy entire document sections for chatbot training
4. **Templates**: Use provided templates to create new assistants

## Getting Started

- New to AI knowledge centers? Start with [Creative Content Production]({{ '/creative-prompts/' | relative_url }})
- Looking for technical guides? Check [Educational Consultants]({{ '/consultant-manuals/' | relative_url }})
- Need to find something specific? Try [Search]({{ '/search/' | relative_url }})
```

4. Commit with message: "Add homepage"

---

## II. Information Architecture and Filing

### II.A. Directory Structure for Knowledge

**Standard Directory Structure:**

```
repository-root/
├── _config.yml
├── _layouts/
│   └── default.html
├── index.md
├── creative-prompts/
│   ├── index.md
│   ├── blog-post-writer/
│   │   ├── index.md
│   │   ├── prompt-template.md
│   │   ├── consultant-manual.md
│   │   └── output-sample.md
│   ├── podcast-script-writer/
│   └── news-article-writer/
├── consultant-manuals/
│   ├── index.md
│   ├── nature-photography/
│   ├── documentary-editing/
│   └── deep-research/
├── assets/
│   ├── css/
│   │   └── style.scss
│   └── js/
│       └── search.js
└── search.md
```

**Step-by-Step Directory Creation:**

**Create Creative Prompts Section:**

1. Create file: `creative-prompts/index.md`

```markdown
---
layout: default
title: Creative Content Production Assistants
description: Prompt templates, manuals, and samples for creative content generation
---

# Creative Content Production Assistants

This section contains specialized knowledge for AI assistants focused on creative content production.

## Available Assistants

### Writing Assistants
- [Blog Post Writer]({{ '/creative-prompts/blog-post-writer/' | relative_url }}) - Professional blog content creation
- [Podcast Script Writer]({{ '/creative-prompts/podcast-script-writer/' | relative_url }}) - Engaging audio content scripts
- [News Article Writer]({{ '/creative-prompts/news-article-writer/' | relative_url }}) - Journalistic content production

### AI Content Tools
- [Text-to-Image Prompt Generator]({{ '/creative-prompts/text-to-image-prompt/' | relative_url }}) - Optimized prompts for image generation
- [Video Script Writer]({{ '/creative-prompts/video-script-writer/' | relative_url }}) - Video content scripting

## Document Types

Each assistant includes:
1. **Prompt Template** - Ready-to-use prompts for the assistant
2. **Consultant Manual** - Detailed operational guidelines
3. **Output Sample** - Example outputs demonstrating quality standards
```

**Create Educational Consultants Section:**

2. Create file: `consultant-manuals/index.md`

```markdown
---
layout: default
title: Educational Consultant Manuals
description: Comprehensive reference guides for specialized educational AI consultants
---

# Educational Consultant Manuals

In-depth reference documentation for specialized educational consultants.

## Available Consultants

### Photography & Video Production
- [Nature Photography Consultant]({{ '/consultant-manuals/nature-photography/' | relative_url }})
- [Documentary Editing Consultant]({{ '/consultant-manuals/documentary-editing/' | relative_url }})
- [News Video Production Guide]({{ '/consultant-manuals/news-production/' | relative_url }})

### Research & Analysis
- [Deep Internet Research Consultant]({{ '/consultant-manuals/deep-research/' | relative_url }})
- [AI Journalism Tools]({{ '/consultant-manuals/ai-journalism/' | relative_url }})

### Equipment Guides
- [Adobe Premiere 2025]({{ '/consultant-manuals/adobe-premiere/' | relative_url }})
- [Canon R8 Camera]({{ '/consultant-manuals/canon-r8/' | relative_url }})
- [Sony Z90 Camera]({{ '/consultant-manuals/sony-z90/' | relative_url }})
- [vMix Streaming Software]({{ '/consultant-manuals/vmix/' | relative_url }})

## Manual Structure

Each manual includes:
- Technical specifications
- Best practices
- Step-by-step workflows
- Troubleshooting guides
```

---

### II.B. Setting Up Cross-Linking (Relative Paths)

**Relative Link Syntax:**

**Same Directory:**
```markdown
[Output Sample](./output-sample.md)
[Manual](output-sample.html)  <!-- For Jekyll-processed pages -->
```

**Sibling Directory:**
```markdown
[Nature Photography Manual](../consultant-manuals/nature-photography/consultant-manual.md)
```

**Root Reference:**
```markdown
[Home](/)
[Search](/search/)
```

**Using Jekyll Liquid Tags (Recommended):**
```markdown
[Blog Writer]({{ '/creative-prompts/blog-post-writer/' | relative_url }})
[Search]({{ '/search/' | relative_url }})
```

**Best Practices:**
- Always use `relative_url` filter in Liquid tags
- Link to `.html` extension for Jekyll-processed Markdown files
- Test all links after committing changes
- Use descriptive link text for accessibility

---

### II.C. General Knowledge Base Classification

**File Naming Conventions:**

**1. Index Pages:**
- Format: `index.md`
- Purpose: Landing page for each section/subsection
- Example: `creative-prompts/blog-post-writer/index.md`

**2. Core Document Types:**
- Prompt Template: `prompt-template.md`
- Consultant Manual: `consultant-manual.md`
- Output Sample: `output-sample.md`

**3. Descriptive File Names:**
- Use lowercase
- Separate words with hyphens
- Be descriptive but concise
- Examples:
  - `video-production-workflow.md`
  - `camera-settings-guide.md`
  - `editing-best-practices.md`

**4. Asset Organization:**
```
assets/
├── images/
│   ├── screenshots/
│   ├── diagrams/
│   └── logos/
├── css/
│   └── style.scss
└── js/
    └── search.js
```

---

## III. Knowledge Document Creation and Templating

### III.A. Core Document Types

**1. Prompt Template Document**

Create file: `creative-prompts/blog-post-writer/prompt-template.md`

```markdown
---
layout: default
title: Blog Post Writer - Prompt Template
description: Professional blog post generation prompt template
category: creative
---

# Blog Post Writer - Prompt Template

## Purpose
This template provides a structured prompt for generating professional blog posts across various topics and industries.

## Prompt Structure

### System Prompt
```
You are a professional blog post writer with expertise in:
- SEO optimization
- Engaging storytelling
- Clear, concise communication
- Industry-specific knowledge
- Audience analysis

Your writing style is:
- Professional yet approachable
- Data-driven when appropriate
- Engaging and reader-focused
- Optimized for web readability
```

### User Prompt Template
```
Create a blog post on [TOPIC] with the following parameters:

**Target Audience:** [Define audience]
**Word Count:** [Number] words
**Tone:** [Professional/Casual/Technical/etc.]
**Key Points to Cover:**
- [Point 1]
- [Point 2]
- [Point 3]

**SEO Requirements:**
- Primary Keyword: [Keyword]
- Secondary Keywords: [Keywords]
- Meta Description: [Optional]

**Structure Requirements:**
- Include engaging headline
- Add subheadings every 200-300 words
- Include call-to-action
- Add relevant examples or case studies
```

## Usage Instructions

1. Replace bracketed placeholders with specific information
2. Copy entire prompt into AI assistant
3. Review and edit output as needed
4. Verify SEO elements are properly incorporated

## Example Usage

**Input:**
```
Create a blog post on sustainable living with the following parameters:

**Target Audience:** Environmentally conscious millennials
**Word Count:** 1200 words
**Tone:** Inspirational and practical
**Key Points to Cover:**
- Benefits of sustainable living
- Easy sustainable habits to start today
- Common sustainability myths debunked
```

**Expected Output:** [Link to output sample]
```

**2. Consultant Manual Document**

Create file: `consultant-manuals/nature-photography/consultant-manual.md`

```markdown
---
layout: default
title: Nature Photography Consultant Manual
description: Comprehensive guide for nature photography techniques and best practices
category: consultant
---

# Nature Photography Consultant Manual

## Table of Contents
1. [Equipment Fundamentals](#equipment)
2. [Technical Settings](#technical-settings)
3. [Composition Techniques](#composition)
4. [Lighting Conditions](#lighting)
5. [Wildlife Photography](#wildlife)
6. [Landscape Photography](#landscape)
7. [Post-Processing](#post-processing)
8. [Best Practices](#best-practices)

---

## Equipment Fundamentals {#equipment}

### Essential Camera Bodies
- **Full-Frame DSLRs/Mirrorless**: Canon R8, Nikon Z6, Sony A7
- **APS-C Options**: Canon R7, Fujifilm X-T5
- **Key Features**: Fast autofocus, high ISO performance, weather sealing

### Lens Selection
**Wide-Angle (14-35mm):**
- Landscapes, expansive scenes
- Environmental portraits

**Standard Zoom (24-70mm):**
- Versatile for various nature scenarios
- General wildlife and landscapes

**Telephoto (70-200mm, 100-400mm):**
- Wildlife from distance
- Bird photography
- Compressed landscapes

**Super-Telephoto (400mm+):**
- Distant wildlife
- Bird photography
- Safari/wildlife reserves

### Support Equipment
- **Tripod**: Carbon fiber for weight/stability balance
- **Monopod**: Wildlife mobility
- **Remote Shutter**: Minimize camera shake
- **Lens Filters**: Polarizer, ND, graduated ND

---

## Technical Settings {#technical-settings}

### Exposure Triangle Basics

**Aperture:**
- Landscapes: f/8-f/16 for deep depth of field
- Wildlife portraits: f/4-f/5.6 for subject isolation
- Macro: f/11-f/16 for adequate depth

**Shutter Speed:**
- General rule: 1/(focal length) minimum
- Wildlife action: 1/1000s or faster
- Water movement: 1/4s-1s for blur effect
- Star trails: 15-30 seconds

**ISO:**
- Base ISO (100-200) in good light
- Raise as needed for proper exposure
- Modern cameras handle ISO 3200+ well
- Noise reduction in post-processing

### Focus Techniques
- **Single Point AF**: Precise subject focus
- **Zone/Dynamic AF**: Moving subjects
- **Continuous AF**: Wildlife tracking
- **Back-Button Focus**: Separate focus from shutter

---

## Composition Techniques {#composition}

### Rule of Thirds
- Place key elements at intersection points
- Horizon on upper or lower third
- Creates dynamic, balanced images

### Leading Lines
- Use natural paths, rivers, fences
- Guide viewer's eye through image
- Create depth and dimension

### Framing
- Use natural elements (trees, rocks)
- Create frame within frame
- Draw attention to subject

### Foreground Interest
- Add depth to landscapes
- Include rocks, flowers, water
- Create layered composition

### Symmetry and Patterns
- Reflections in water
- Repeating natural patterns
- Break pattern for interest point

---

## Lighting Conditions {#lighting}

### Golden Hour (Sunrise/Sunset)
- Warm, soft, directional light
- Long shadows create depth
- Ideal for landscapes and wildlife

### Blue Hour (Before sunrise/after sunset)
- Cool, even light
- Great for landscapes
- Requires longer exposures

### Midday Harsh Light
- Use for high-contrast scenes
- Photograph in shaded areas
- Utilize polarizing filter

### Overcast/Cloudy
- Soft, even lighting
- Ideal for forest scenes
- Good for wildlife portraits

### Backlighting
- Creates silhouettes
- Rim lighting on subjects
- Use exposure compensation

---

## Wildlife Photography {#wildlife}

### Approach and Ethics
- Maintain safe distance
- Never disturb or bait wildlife
- Respect habitat and nesting areas
- Follow park regulations

### Camera Settings
- Continuous shooting mode
- Fast shutter speed (1/1000s+)
- Continuous autofocus (AI Servo/AF-C)
- Higher ISO as needed

### Behavior and Timing
- Study animal behavior
- Anticipate action
- Be patient and observant
- Early morning/late evening activity

### Bird Photography
- Fast shutter speeds (1/1600s+)
- Eye-level perspective
- Focus on the eye
- Capture in-flight action

---

## Landscape Photography {#landscape}

### Planning and Research
- Scout locations beforehand
- Check weather forecasts
- Use apps for sun/moon position
- Plan for optimal conditions

### Camera Settings
- Aperture: f/8-f/16
- Low ISO for quality
- Tripod for stability
- Use timer or remote

### Depth of Field
- Focus 1/3 into scene
- Hyperfocal distance for maximum sharpness
- Focus stacking for macro landscapes

### Long Exposures
- Use ND filters
- Smooth water movement
- Cloud movement
- Remove moving elements

---

## Post-Processing {#post-processing}

### Basic Workflow
1. Import and cull images
2. Basic exposure adjustments
3. White balance correction
4. Contrast and clarity
5. Color adjustments
6. Sharpening and noise reduction
7. Export for intended use

### Key Adjustments

**Exposure and Contrast:**
- Adjust overall brightness
- Increase/decrease contrast
- Use tone curve for fine control

**Color Correction:**
- White balance adjustment
- Vibrance for subtle enhancement
- Saturation for intensity
- HSL for specific color control

**Detail Enhancement:**
- Sharpening for clarity
- Noise reduction for high ISO
- Clarity for mid-tone contrast
- Texture for surface detail

**Creative Edits:**
- Dodging and burning
- Graduated filters
- Radial filters for vignettes
- Color grading for mood

---

## Best Practices {#best-practices}

### Ethical Photography
- Minimize environmental impact
- Respect wildlife and habitats
- Follow Leave No Trace principles
- Obtain necessary permits

### Technical Excellence
- Shoot in RAW format
- Use histogram for exposure check
- Regular equipment maintenance
- Backup images immediately

### Continuous Learning
- Study other photographers' work
- Practice regularly
- Experiment with techniques
- Join photography communities

### Legal Considerations
- Know location photography rules
- Respect private property
- Commercial vs. personal use
- Model releases for people

---

## Additional Resources

### Recommended Reading
- "The Nature Photographer's Complete Guide"
- "Understanding Exposure" by Bryan Peterson
- Camera-specific user manuals

### Online Communities
- Nature Photographers Network
- Camera manufacturer forums
- Social media photography groups

### Software Tools
- Adobe Lightroom/Photoshop
- Capture One
- DxO PhotoLab
- ON1 Photo RAW

---

## Conclusion

Nature photography combines technical skill, artistic vision, and patience. Master the fundamentals, respect nature, and continuously refine your craft through practice and learning.

For related guides, see:
- [Canon R8 Camera Guide]({{ '/consultant-manuals/canon-r8/' | relative_url }})
- [Adobe Premiere Editing]({{ '/consultant-manuals/adobe-premiere/' | relative_url }})
```

**3. Output Sample Document**

Create file: `creative-prompts/blog-post-writer/output-sample.md`

```markdown
---
layout: default
title: Blog Post Writer - Output Sample
description: Example output demonstrating quality standards for blog post generation
category: creative
---

# Blog Post Writer - Output Sample

## Metadata
- **Topic**: Sustainable Living Habits
- **Word Count**: 1,200 words
- **Target Audience**: Environmentally conscious millennials
- **Tone**: Inspirational and practical
- **SEO Keywords**: sustainable living, eco-friendly habits, green lifestyle

---

## Sample Output

# 10 Simple Sustainable Living Habits You Can Start Today

*Transform your lifestyle and reduce your environmental impact with these easy, actionable steps*

---

In an era where climate change dominates headlines and plastic waste clogs our oceans, many people feel overwhelmed about how to make a real difference. The good news? Sustainable living doesn't require a complete lifestyle overhaul or breaking the bank. Small, consistent changes in your daily routine can create a meaningful impact on the planet—and often improve your health and save money in the process.

Whether you're just beginning your sustainability journey or looking to deepen your eco-friendly practices, these ten habits offer practical starting points that anyone can implement today.

## 1. Embrace Reusable Alternatives

The average American uses 365 plastic bags per year, with most ending up in landfills or oceans. Making the switch to reusable items represents one of the simplest yet most effective sustainable habits.

**Start here:**
- Keep reusable shopping bags in your car
- Carry a refillable water bottle
- Switch to cloth napkins instead of paper
- Use beeswax wraps instead of plastic wrap
- Invest in a quality reusable coffee cup

**Impact**: These small switches can eliminate hundreds of single-use plastic items from your annual consumption.

## 2. Reduce Food Waste Strategically

Approximately 40% of food in the United States goes to waste. Reducing food waste not only helps the environment but also saves the average family $1,500 annually.

**Practical steps:**
- Plan meals before grocery shopping
- Store produce properly to extend freshness
- Use the "first in, first out" method in your pantry
- Freeze excess food before it spoils
- Compost fruit and vegetable scraps

**Pro tip**: Download a meal planning app to track what you already have and avoid duplicate purchases.

## 3. Choose Sustainable Transportation

Transportation accounts for nearly 30% of U.S. greenhouse gas emissions. Even small changes in how you commute can significantly reduce your carbon footprint.

**Options to consider:**
- Bike or walk for short trips
- Use public transportation when available
- Carpool with colleagues or neighbors
- Combine errands into single trips
- Consider an electric or hybrid vehicle for your next car purchase

**Did you know?** Walking or biking just 2 miles a day instead of driving can save over 1,500 pounds of CO2 annually.

## 4. Rethink Your Shopping Habits

Consumer habits drive production, meaning your purchasing decisions directly influence environmental impact.

**Sustainable shopping strategies:**
- Buy quality items that last longer
- Choose secondhand when possible
- Support companies with sustainable practices
- Avoid fast fashion
- Repair before replacing

**Mindset shift**: Ask yourself, "Do I need this, or do I want this?" before each purchase. This simple question can dramatically reduce unnecessary consumption.

## 5. Reduce Energy Consumption at Home

Residential energy use contributes significantly to carbon emissions. Simple adjustments can lower both your environmental impact and utility bills.

**Easy energy-saving tactics:**
- Switch to LED bulbs (75% less energy than incandescent)
- Unplug devices when not in use
- Use a programmable thermostat
- Wash clothes in cold water
- Air-dry dishes instead of using heated dry
- Seal windows and doors to prevent air leaks

**Investment tip**: While upfront costs exist, energy-efficient appliances save money over time and significantly reduce environmental impact.

## 6. Embrace Plant-Based Meals

You don't need to become fully vegetarian to make a difference. Simply reducing meat consumption—especially beef—can dramatically decrease your carbon footprint.

**Getting started:**
- Try "Meatless Mondays"
- Replace meat with plant-based proteins twice a week
- Explore international cuisines naturally rich in plant-based dishes
- Experiment with plant-based meat alternatives
- Join online communities for recipe inspiration

**The numbers**: Producing 1 pound of beef requires 1,800 gallons of water, compared to just 39 gallons for 1 pound of vegetables.

## 7. Practice Mindful Water Usage

While the U.S. has abundant freshwater, conservation remains crucial for sustainability.

**Water-saving habits:**
- Fix leaky faucets promptly
- Install low-flow showerheads
- Turn off water while brushing teeth
- Run full loads in dishwasher and washing machine
- Collect rainwater for plants
- Consider drought-resistant landscaping

**Impact**: Low-flow showerheads alone can save 2,900 gallons of water annually per person.

## 8. Support Local and Seasonal

Food transportation contributes significantly to carbon emissions. Choosing local, seasonal produce reduces this impact substantially.

**How to source locally:**
- Shop at farmers' markets
- Join a Community Supported Agriculture (CSA) program
- Grow your own herbs and vegetables
- Choose restaurants using local ingredients
- Learn what's in season in your area

**Bonus**: Local, seasonal produce often tastes better and retains more nutrients than food shipped long distances.

## 9. Reduce Digital Waste

Digital sustainability often gets overlooked, but data centers consume massive amounts of energy.

**Digital decluttering:**
- Delete unnecessary emails
- Unsubscribe from unused mailing lists
- Turn off auto-play on streaming services
- Download content to watch offline
- Clear cloud storage regularly

**Surprising fact**: The world's data centers use more electricity than the entire United Kingdom.

## 10. Educate and Inspire Others

Personal changes create ripples. Sharing your sustainability journey can inspire others to take action.

**Ways to spread awareness:**
- Share tips on social media authentically
- Lead by example without preaching
- Participate in community clean-ups
- Support environmental organizations
- Vote for policies supporting sustainability

**Remember**: Progress, not perfection, drives real change. Every action matters.

---

## Making It Stick: Your Sustainable Living Action Plan

Transforming habits takes time. Rather than attempting everything simultaneously, choose 2-3 habits to focus on initially. Once these become second nature, add more to your routine.

**Your 30-day challenge:**
1. Week 1: Choose three habits from this list
2. Week 2: Implement these habits daily
3. Week 3: Track your progress and adjust
4. Week 4: Add two more habits

Sustainable living isn't about achieving perfection—it's about making conscious choices that align your values with your actions. Each small change contributes to a larger movement toward a healthier planet.

What sustainable habit will you start today? Share your commitment in the comments below and join a community of individuals working toward a more sustainable future.

---

**Related Reading:**
- The Hidden Environmental Cost of Fast Fashion
- Zero Waste Kitchen: A Beginner's Guide
- Understanding Your Carbon Footprint: Where to Start

**About the Author:** [Standard author bio would go here]

---

## Quality Standards Demonstrated

This sample demonstrates:
- ✅ Engaging headline with benefit
- ✅ Clear structure with descriptive subheadings
- ✅ Specific, actionable advice
- ✅ Data and statistics for credibility
- ✅ Appropriate word count (1,200 words)
- ✅ Natural keyword integration
- ✅ Call-to-action (30-day challenge)
- ✅ Conversational yet professional tone
- ✅ Practical tips in scannable format
- ✅ Related content suggestions
```

---

### III.B. Structural Optimization for LLMs

**Markdown Formatting Best Practices:**

**1. Use Clear Heading Hierarchy**
```markdown
# Main Title (H1) - Only one per document
## Major Sections (H2)
### Subsections (H3)
#### Detailed Points (H4)
```

**2. Structured Lists**
```markdown
**Ordered Lists:**
1. First item
2. Second item
3. Third item

**Unordered Lists:**
- Main point
  - Sub-point
  - Sub-point
- Main point
```

**3. Code Blocks with Language Specification**
```markdown
```python
def example_function():
    return "Hello World"
```
```

**4. Tables for Structured Data**
```markdown
| Feature | Description | Value |
|---------|-------------|-------|
| Item 1  | Details     | 100   |
| Item 2  | Details     | 200   |
```

**5. Emphasis and Highlighting**
```markdown
**Bold** for important terms
*Italic* for emphasis
`Code` for technical terms
> Blockquote for key takeaways
```

**6. Links and Cross-References**
```markdown
[Descriptive Link Text]({{ '/path/to/page/' | relative_url }})
[External Link](https://example.com)
```

---

### III.C. Content Length Guidelines

**Document Type Standards:**

**Prompt Templates:**
- **Minimum**: 500 words
- **Recommended**: 800-1,200 words
- **Maximum**: 2,000 words
- **Includes**: System prompt, user prompt template, usage instructions, examples

**Consultant Manuals:**
- **Minimum**: 2,000 words
- **Recommended**: 3,000-5,000 words
- **Maximum**: 10,000 words
- **Includes**: Comprehensive technical details, step-by-step procedures, best practices

**Output Samples:**
- **Minimum**: 300 words
- **Recommended**: 500-1,500 words (matches expected output length)
- **Maximum**: 3,000 words
- **Includes**: Full example output with quality annotations

**Index Pages:**
- **Minimum**: 200 words
- **Recommended**: 300-500 words
- **Maximum**: 800 words
- **Includes**: Overview, navigation links, brief descriptions

---

## IV. Search and Discovery Implementation

### IV.A. Basic SEO for GitHub Pages

**Step 1: Enable Jekyll SEO Plugin**

Already included in `_config.yml`:
```yaml
plugins:
  - jekyll-seo-tag
```

**Step 2: Add SEO to Layout**

In `_layouts/default.html`, already included:
```html
{% if site.plugins contains "jekyll-seo-tag" %}
    {% seo %}
{% endif %}
```

**Step 3: Optimize Page Frontmatter**

For each page, include:
```markdown
---
layout: default
title: Specific Page Title - AI Knowledge Center
description: Concise, keyword-rich description (150-160 characters)
keywords: keyword1, keyword2, keyword3
author: Your Name
image: /assets/images/social-share.png
---
```

**Step 4: Create Robots.txt**

Create file: `robots.txt`
```
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/repository-name/sitemap.xml
```

**Step 5: Add Structured Data**

Create file: `_includes/structured-data.html`
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{ site.title }}",
  "description": "{{ site.description }}",
  "url": "{{ site.url }}{{ site.baseurl }}",
  "author": {
    "@type": "Person",
    "name": "{{ site.social.name }}"
  }
}
</script>
```

---

### IV.B. Internal Search Implementation (Static Method)

**Step 1: Create Search Index**

Create file: `search.json`
```liquid
---
layout: null
---
[
  {% for page in site.pages %}
    {% unless page.exclude_from_search %}
    {
      "title": {{ page.title | jsonify }},
      "description": {{ page.description | default: "" | jsonify }},
      "content": {{ page.content | strip_html | jsonify }},
      "url": {{ page.url | relative_url | jsonify }},
      "category": {{ page.category | default: "general" | jsonify }}
    }{% unless forloop.last %},{% endunless %}
    {% endunless %}
  {% endfor %}
]
```

**Step 2: Create Search JavaScript**

Create file: `assets/js/search.js`
```javascript
// Simple client-side search implementation
class SimpleSearch {
    constructor() {
        this.searchIndex = [];
        this.loadSearchIndex();
    }

    async loadSearchIndex() {
        try {
            const response = await fetch('/search.json');
            this.searchIndex = await response.json();
        } catch (error) {
            console.error('Failed to load search index:', error);
        }
    }

    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.searchIndex.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(lowerQuery);
            const descMatch = item.description.toLowerCase().includes(lowerQuery);
            const contentMatch = item.content.toLowerCase().includes(lowerQuery);
            return titleMatch || descMatch || contentMatch;
        });
    }

    displayResults(results, container) {
        if (results.length === 0) {
            container.innerHTML = '<p class="no-results">No results found. Try different keywords.</p>';
            return;
        }

        const resultsHTML = results.map(result => `
            <div class="search-result">
                <h3><a href="${result.url}">${this.highlightText(result.title, query)}</a></h3>
                <p class="category">${result.category}</p>
                <p>${result.description || this.getExcerpt(result.content, 150)}</p>
            </div>
        `).join('');

        container.innerHTML = resultsHTML;
    }

    highlightText(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    getExcerpt(text, length) {
        return text.length > length ? text.substring(0, length) + '...' : text;
    }
}

// Initialize search
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results');
    
    if (!searchInput || !searchButton || !resultsContainer) return;

    const simpleSearch = new SimpleSearch();

    const performSearch = () => {
        const query = searchInput.value.trim();
        if (query.length < 2) {
            resultsContainer.innerHTML = '<p>Please enter at least 2 characters to search.</p>';
            return;
        }

        const results = simpleSearch.search(query);
        simpleSearch.displayResults(results, resultsContainer);
    };

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});
```

**Step 3: Create Search Page**

Create file: `search.md`
```markdown
---
layout: default
title: Search - AI Knowledge Center
description: Search the AI Knowledge Center documentation
exclude_from_search: true
---

# Search Knowledge Center

<div class="search-container">
    <input type="text" 
           id="search-input" 
           placeholder="Search documentation..." 
           aria-label="Search"
           style="width: 100%; padding: 12px; font-size: 16px; border: 2px solid #e1e4e8; border-radius: 5px;">
    <button id="search-button" 
            style="margin-top: 10px; padding: 10px 20px; background: #0366d6; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
        Search
    </button>
</div>

<div id="search-results" style="margin-top: 30px;">
    <!-- Results will appear here -->
</div>

<style>
.search-container {
    margin: 20px 0 40px 0;
}

.search-result {
    padding: 20px;
    margin-bottom: 20px;
    background: #fafbfc;
    border: 1px solid #e1e4e8;
    border-radius: 5px;
}

.search-result h3 {
    margin: 0 0 10px 0;
}

.search-result h3 a {
    color: #0366d6;
    text-decoration: none;
}

.search-result h3 a:hover {
    text-decoration: underline;
}

.search-result .category {
    font-size: 0.9em;
    color: #586069;
    text-transform: uppercase;
    margin-bottom: 10px;
}

.search-result mark {
    background: #fff3cd;
    padding: 2px 4px;
    border-radius: 2px;
}

.no-results {
    padding: 20px;
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 5px;
}

#search-button:hover {
    background: #0256c7;
}
</style>

<script src="{{ '/assets/js/search.js' | relative_url }}"></script>
```

---

## V. Maintenance and Scaling

### V.A. Template for New Assistant Creation

**5-Step Process for Adding New Assistant:**

**Step 1: Create Assistant Directory**

1. Navigate to appropriate section (`creative-prompts/` or `consultant-manuals/`)
2. Click **Add file** → **Create new file**
3. Name: `[assistant-name]/index.md`
4. Add frontmatter and overview content

**Step 2: Create Prompt Template**

1. Create file: `[assistant-name]/prompt-template.md`
2. Use this template:

```markdown
---
layout: default
title: [Assistant Name] - Prompt Template
description: [Brief description]
category: [creative/consultant]
---

# [Assistant Name] - Prompt Template

## Purpose
[Explain the purpose and use case]

## System Prompt
```
[Define the AI assistant's role and capabilities]
```

## User Prompt Template
```
[Provide the structured template users will fill in]
```

## Usage Instructions
1. [Step-by-step instructions]
2. [...]

## Example Usage
[Provide a concrete example]
```

**Step 3: Create Consultant Manual**

1. Create file: `[assistant-name]/consultant-manual.md`
2. Include comprehensive technical details
3. Minimum 2,000 words
4. Use clear heading hierarchy

**Step 4: Create Output Sample**

1. Create file: `[assistant-name]/output-sample.md`
2. Provide actual example output
3. Annotate quality standards
4. Include metadata

**Step 5: Update Navigation**

1. Edit section `index.md` file
2. Add link to new assistant
3. Update main `index.md` if necessary
4. Test all navigation links

---

### V.B. Simple Content Update Workflow

**Checklist for Editing Content:**

**Before Making Changes:**
- [ ] Identify exact file(s) that need updating
- [ ] Review current content
- [ ] Plan specific changes needed

**Making Changes:**
- [ ] Navigate to file in GitHub
- [ ] Click pencil icon (Edit)
- [ ] Make necessary edits
- [ ] Preview changes using "Preview" tab
- [ ] Check Markdown formatting

**Committing Changes:**
- [ ] Write descriptive commit message
  - Format: "[Section] Update [specific change]"
  - Example: "[Blog Writer] Update prompt template with SEO guidelines"
- [ ] Commit directly to main branch (for simple changes)
- [ ] Create pull request (for major changes)

**After Committing:**
- [ ] Wait 1-2 minutes for GitHub Pages rebuild
- [ ] Visit live site and verify changes
- [ ] Test any affected links
- [ ] Check formatting on live site

**Quality Checks:**
- [ ] All internal links work correctly
- [ ] Images display properly
- [ ] Code blocks format correctly
- [ ] Headings render properly
- [ ] Responsive design maintained

**Monthly Maintenance:**
- [ ] Review all documentation for accuracy
- [ ] Update outdated information
- [ ] Check for broken links
- [ ] Verify all assistants have complete documentation
- [ ] Review search functionality

---

## Additional Resources

### Helpful Tools

**Jekyll Documentation:**
- Official Jekyll Docs: https://jekyllrb.com/docs/
- GitHub Pages Docs: https://docs.github.com/en/pages

**Markdown Guides:**
- GitHub Markdown Guide: https://guides.github.com/features/mastering-markdown/
- Markdown Cheatsheet: https://www.markdownguide.org/cheat-sheet/

**SEO Tools:**
- Google Search Console: https://search.google.com/search-console
- Schema.org: https://schema.org/

### Common Issues and Solutions

**Issue: Pages not updating**
- Solution: Check Actions tab for build errors
- Clear browser cache
- Verify file is in correct location

**Issue: Broken links**
- Solution: Use `relative_url` filter
- Verify file exists at target path
- Check capitalization and file extensions

**Issue: Search not working**
- Solution: Verify `search.json` generates correctly
- Check JavaScript console for errors
- Ensure `search.js` loads properly

---

## Conclusion

This guide provides a complete foundation for establishing an AI Chatbot Knowledge Center using GitHub Pages and Jekyll, requiring no local installation or command-line expertise. Follow each section sequentially to build a robust, scalable knowledge base optimized for LLM training and human navigation.

**Next Steps:**
1. Create your GitHub repository
2. Follow Section I for initial setup
3. Implement directory structure from Section II
4. Create your first assistant using Section III templates
5. Enable search functionality from Section IV
6. Maintain and scale using Section V workflows

For questions or improvements, submit issues through your GitHub repository's Issues tab.

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Maintained By:** Knowledge Center Administrator
