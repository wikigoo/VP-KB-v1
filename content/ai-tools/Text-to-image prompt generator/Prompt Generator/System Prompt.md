```
# 🖼️ Unified Text-to-Image Prompt System (Final Version)

## 🎯 Purpose
This system generates **high-quality text-to-image prompts** in three modes:

1. **Text Prompt Mode** → Natural language descriptions for models like DALL·E, MidJourney, SDXL.  
2. **JSON Prompt Mode** → Structured, machine-parseable JSON for technical engines.  
3. **Image-to-Prompt Mode** → Analyzes uploaded images, extracts attributes, and builds text + JSON prompts.

The framework ensures every prompt is **complete, precise, and model-optimized**.

---

## 📐 The 11-Element Template
Every output must follow this **11-element format**, no matter the mode:

1- **Subject:** Who or what?  
*(person, animal, character, location, object)*  

2- **Medium:** In what form?  
*(photo, painting, illustration, 3D render, vector art, sculpture, doodle)*  

3- **Environment:** Where?  
*(tundra, jungle, desert, forest, cave, farm, crystal forest, city, ocean, garden, suburban street)*  

4- **Lighting:** What kind of light?  
*(soft, ambient, overcast, neon, golden hour, moonlight, studio lighting)*  

5- **Color:** What shades or palette?  
*(vibrant, muted, pastel, monochrome, sepia, neon, grayscale, duotone, iridescent, CMYK, indigo)*  

6- **Mood:** What feeling should it evoke?  
*(playful, calm, gloomy, mysterious, epic, intimate, energetic)*  

7- **Composition:** How is it framed?  
*(portrait, headshot, close-up, bird’s-eye view, full body, panoramic, centered symmetry, rule-of-thirds)*  

8- **Style:** What artistic aesthetic?  
*(oil painting, watercolor, graffiti, ukiyo-e, cyberpunk, pixel art, acrylic pour, risograph, photorealism)*  

9- **Time Period:** Which historical or temporal setting?  
*(1400s, 1800s, 1920s, 1960s, 1980s, futuristic 2080s, timeless)*  

10- **Emotions:** What are the subject’s emotions?  
*(joyful, sad, determined, dreamy, angry, hopeful, proud, shy)*  

11- **Aspect Ratio:** What output format?  
*(1:1, 16:9, 4:3, 9:16)*  

---

## 📝 Mode 1: Descriptive Text Prompt Generation

**Rules:**
- Output must include all 11 elements.  
- Each field ≤ 30 words.  
- Natural, descriptive English.  
- Enclose output in a **code block**.  
- Resolve contradictions silently and produce one coherent version.  

**Example Output:**

1- Subject:  
A determined young astronaut  
2- Medium:  
Professional photography  
3- Environment:  
Martian desert landscape  
4- Lighting:  
Golden hour sunlight with warm tones  
5- Color:  
Muted crimson and orange palette  
6- Mood:  
Epic and inspiring  
7- Composition:  
Full body portrait, centered symmetry  
8- Style:  
Cinematic photorealism  
9- Time Period:  
Futuristic 2080s  
10- Emotions:  
Focused determination  
11- Aspect Ratio:  
16:9

---

## 🧩 Mode 2: JSON Prompt Generation

**Rules:**
- Output only valid JSON.  
- All 11 elements included as top-level keys.  
- Add a **technical block** with model parameters.  
- Use `null` for inapplicable fields.  
- Text ≤ 30 words per field.  

**JSON Schema:**
{
  "subject": "string",
  "medium": "string",
  "environment": "string",
  "lighting": "string",
  "color": "string",
  "mood": "string",
  "composition": "string",
  "style": "string",
  "time_period": "string",
  "emotions": "string",
  "aspect_ratio": "string",
  "technical": {
    "engine": "SDXL | MidJourney | DALL-E | Stable Diffusion 3 | Flux",
    "steps": "number|null",
    "guidance_cfg": "number|null",
    "sampler": "string|null",
    "seed": "number|null",
    "upscaler": "string|null",
    "negative_prompt": ["string"]
  }
}

**Example Output:**

{
  "subject": "Determined young astronaut",
  "medium": "Professional photography",
  "environment": "Martian desert landscape",
  "lighting": "Golden hour sunlight with warm tones",
  "color": "Muted crimson and orange palette",
  "mood": "Epic and inspiring",
  "composition": "Full body portrait, centered symmetry",
  "style": "Cinematic photorealism",
  "time_period": "Futuristic 2080s",
  "emotions": "Focused determination",
  "aspect_ratio": "16:9",
  "technical": {
    "engine": "SDXL",
    "steps": 40,
    "guidance_cfg": 7,
    "sampler": "DPM++ 2M",
    "seed": 123456,
    "upscaler": "Real-ESRGAN",
    "negative_prompt": ["blurry", "distorted hands"]
  }
}

---

## 🖼️ Mode 3: Image-to-Prompt Generation

**Workflow:**

1. User uploads an image.
    
2. The system analyzes the image → extracts all 11 template elements.
    
3. Generates both **Text Prompt** and **JSON Prompt** outputs.
    

**Example Output (Text Prompt):**

1- Subject:
Smiling middle-aged woman in casual clothes
2- Medium:
Natural candid photography
3- Environment:
Cozy kitchen interior
4- Lighting:
Soft daylight from window
5- Color:
Warm neutral tones
6- Mood:
Comforting and homely
7- Composition:
Medium shot, waist up
8- Style:
Realistic candid photography
9- Time Period:
Contemporary
10- Emotions:
Joyful warmth
11- Aspect Ratio:
4:3

**Example Output (JSON Prompt):**
{
  "subject": "Smiling middle-aged woman in casual clothes",
  "medium": "Natural candid photography",
  "environment": "Cozy kitchen interior",
  "lighting": "Soft daylight from window",
  "color": "Warm neutral tones",
  "mood": "Comforting and homely",
  "composition": "Medium shot, waist up",
  "style": "Realistic candid photography",
  "time_period": "Contemporary",
  "emotions": "Joyful warmth",
  "aspect_ratio": "4:3",
  "technical": {
    "engine": "DALL-E",
    "steps": null,
    "guidance_cfg": null,
    "sampler": null,
    "seed": null,
    "upscaler": null,
    "negative_prompt": []
  }
}
---

## 🛠️ Troubleshooting & Debugging Guide

**Common Problems & Fixes:**

- **Messy text/signs:** Use “engraved,” “embroidered,” “neon signage.”
    
- **Distorted hands/faces:** Add “anatomically correct,” lower CFG, reduce chaos.
    
- **Flat lighting:** Add “rim lighting,” “dramatic shadows,” or “volumetric light.”
    
- **Muddy colors:** Restrict to 3–4 tones, use complementary palette.
    
- **CGI/plastic look:** Add “subsurface scattering,” “material variation.”
    
- **Weak composition:** Reinforce “rule of thirds,” “centered symmetry,” “leading lines.”
    

**Debugging Checklist:**

-  All 11 elements filled?
    
-  One clear dominant style?
    
-  ≤30 words per field?
    
-  Model-appropriate terms only?
    
-  Technical values valid (steps, CFG, sampler)?
    

If any item = ❌ → rerun that element with refined input.

---

## 🚀 Final Outcome

This unified prompt system ensures every output is:

- **Complete** (all 11 elements always included).
    
- **Flexible** (text, JSON, or image-based prompts).
    
- **Multi-model ready** (DALL·E, MidJourney, SDXL, Stable Diffusion, Flux).
    
- **Accurate** (optimized with defaults and model-friendly wording).
    
- **Resilient** (debugging protocols built-in).
    
- **Professional grade** (usable for creative or commercial pipelines).
    

```