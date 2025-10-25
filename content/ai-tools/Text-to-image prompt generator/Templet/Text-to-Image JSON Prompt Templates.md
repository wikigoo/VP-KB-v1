# Text-to-Image JSON Prompt Generator - Knowledge Base & Templates

## Table of Contents
1. [Framework Overview](#framework-overview)
2. [Quick Start Guide](#quick-start-guide)
3. [Style Templates Library](#style-templates-library)
4. [Technical Parameter Guide](#technical-parameter-guide)
5. [Troubleshooting Guide](#troubleshooting-guide)
6. [Advanced Usage Patterns](#advanced-usage-patterns)

---

## Framework Overview

The 6-Phase JSON Framework provides a systematic approach to text-to-image generation:

**Phase 1: Concept & Identity** - Define the big picture and context  
**Phase 2: Creative Vision** - Establish core visual elements  
**Phase 3: Composition & Framing** - Structure the image layout  
**Phase 4: Details & Refinements** - Add textures, effects, and symbolism  
**Phase 5: Technical Generation** - Configure model parameters  
**Phase 6: Output & Consistency** - Specify final output requirements

### Core Benefits
- **Systematic Approach**: Eliminates guesswork with structured workflow
- **Model Optimization**: Parameters tuned for different AI engines
- **Consistency Control**: Maintains coherent style across series
- **Professional Quality**: Industry-standard technical specifications

---

## Quick Start Guide

### Basic Usage Pattern
1. **Choose a base template** from the Style Templates Library
2. **Customize key fields** (subject, scene, colors)
3. **Adjust technical parameters** for your target model
4. **Generate and iterate** based on results

### Essential Fields to Always Customize
```json
{
  "phase_1_concept.meta.title": "Your specific image title",
  "phase_2_creative_vision.subject.description": "Detailed subject description",
  "phase_2_creative_vision.scene_environment": "Specific location/setting",
  "phase_2_creative_vision.color_palette.palette": ["#hex1", "#hex2", "#hex3"]
}
```

---

## Style Templates Library

### 1. Professional Portrait Photography

```json
{
  "phase_1_concept": {
    "meta": {
      "title": "Professional Executive Portrait",
      "style_name": "Corporate Photography",
      "description": "Clean professional headshot with studio lighting and neutral background",
      "tags": ["portrait", "professional", "corporate", "headshot"],
      "narrative_context": "confident professional presentation"
    },
    "inspiration": ["Annie Leibovitz", "Platon", "corporate photography"],
    "time_period": "contemporary"
  },
  "phase_2_creative_vision": {
    "scene_environment": "modern office or studio setting",
    "subject": {
      "type": "person",
      "description": "professional individual in business attire",
      "position": "center foreground",
      "pose": "confident upright posture",
      "expression_emotion": "confident approachable professional",
      "interaction": "direct eye contact with camera"
    },
    "style_medium": {
      "style": "photorealism",
      "medium": "digital photography",
      "detail_level": "ultra-detailed photorealistic precision",
      "animated": false
    },
    "color_palette": {
      "hue": "neutral professional tones",
      "palette": ["#2c3e50", "#ecf0f1", "#34495e"],
      "contrast": "medium balanced contrast",
      "brightness": "well-lit professional lighting",
      "saturation": "natural accurate colors",
      "temperature": "5600K neutral daylight"
    },
    "lighting": {
      "direction": "soft key light with fill light",
      "intensity": "medium professional studio lighting",
      "temperature": "5600K",
      "shadow_style": "soft professional shadows",
      "highlight_style": "natural skin highlights",
      "volumetric": false
    },
    "mood_atmosphere": {
      "realism_level": "photorealistic",
      "emotional_tone": "confident professional trustworthy",
      "atmosphere_elements": [],
      "ambient_motion": "subtle professional presence"
    }
  },
  "phase_3_composition": {
    "composition": {
      "layout": "centered professional framing",
      "framing": "professional headshot to shoulders",
      "focus": "sharp subject focus",
      "depth": "2 layers - subject and background",
      "motion_flow": "static professional pose",
      "perspective": "eye-level professional angle",
      "negative_space_ratio": 0.15,
      "orientation": "portrait"
    },
    "camera_settings": {
      "zoom": "medium portrait focal length",
      "angle": "eye-level straight",
      "distance": "professional portrait distance",
      "lens": "85mm",
      "depth_of_field": "shallow f/2.8 for subject separation"
    },
    "background": {
      "type": "clean neutral office or studio",
      "details": "minimal professional backdrop"
    }
  },
  "phase_4_details": {
    "physical_details": {
      "textures": ["professional fabric", "natural skin", "clean surfaces"],
      "surface_textures": "natural professional materials",
      "line_quality": "sharp clean professional",
      "brush_style": "photographic quality",
      "materials": ["cotton", "wool", "professional fabrics"]
    },
    "movement_dynamics": "static professional confidence",
    "symbolic_elements": {
      "symbolism": ["professionalism", "trustworthiness", "competence"],
      "cultural_influences": ["corporate culture"],
      "themes": ["leadership", "success", "reliability"]
    },
    "visual_effects": {
      "in_scene_effects": [],
      "post_effects": ["color correction"],
      "grain_overlay": "none",
      "film_look": "clean digital"
    }
  },
  "phase_5_technical": {
    "generation_engine": {
      "engine": "SDXL",
      "model": "photoreal-v3",
      "quality_modifiers": ["professional photography", "sharp focus", "best quality"]
    },
    "generation_parameters": {
      "steps": 35,
      "guidance_cfg": 7,
      "sampler": "DPM++ 2M",
      "seed": null,
      "stylize_chaos": "low",
      "negative_prompt": ["blurry", "amateur", "low quality", "distorted"]
    },
    "upscaling_enhancement": {
      "upscaler": "Real-ESRGAN",
      "hires_pass": true,
      "denoise_strength": 0.3
    }
  },
  "phase_6_output": {
    "output_specifications": {
      "resolution": "1024x1536",
      "aspect_ratio": "2:3",
      "format": "JPEG",
      "count": 1
    },
    "consistency_references": {
      "character_asset_id": null,
      "anchors": ["professional lighting", "neutral background"],
      "reference_image_ids": [],
      "series_note": null
    },
    "usage_guidelines": "maintain professional appearance, ensure sharp focus, use clean backgrounds"
  }
}
```

### 2. Fantasy Digital Art

```json
{
  "phase_1_concept": {
    "meta": {
      "title": "Mystical Forest Guardian",
      "style_name": "Epic Fantasy Illustration",
      "description": "Ethereal forest guardian with magical elements and mystical atmosphere",
      "tags": ["fantasy", "mystical", "guardian", "forest", "magic"],
      "narrative_context": "ancient protector of sacred grove"
    },
    "inspiration": ["John Howe", "Alan Lee", "fantasy concept art"],
    "time_period": "medieval fantasy"
  },
  "phase_2_creative_vision": {
    "scene_environment": "ancient mystical forest clearing",
    "subject": {
      "type": "fantasy character",
      "description": "ethereal forest guardian with flowing robes and staff",
      "position": "center with environmental integration",
      "pose": "standing with mystical staff raised",
      "expression_emotion": "wise serene protective",
      "interaction": "channeling forest magic"
    },
    "style_medium": {
      "style": "fantasy digital painting",
      "medium": "digital illustration",
      "detail_level": "highly detailed with magical elements",
      "animated": false
    },
    "color_palette": {
      "hue": "mystical greens with magical accents",
      "palette": ["#2d5016", "#7fb069", "#d4af37", "#4a90e2"],
      "contrast": "high dramatic contrast",
      "brightness": "magical luminosity with deep shadows",
      "saturation": "enhanced mystical saturation",
      "temperature": "mixed cool forest and warm magic"
    },
    "lighting": {
      "direction": "magical emanation from staff and forest",
      "intensity": "dramatic mystical lighting",
      "temperature": "mixed 4000K magical warm and 6000K cool forest",
      "shadow_style": "deep mystical shadows",
      "highlight_style": "magical glowing highlights",
      "volumetric": true
    },
    "mood_atmosphere": {
      "realism_level": "stylized fantasy realism",
      "emotional_tone": "mystical serene powerful",
      "atmosphere_elements": ["magical particles", "forest mist", "ethereal glow"],
      "ambient_motion": "floating magical particles and gentle wind"
    }
  },
  "phase_3_composition": {
    "composition": {
      "layout": "rule of thirds with magical elements",
      "framing": "full environmental fantasy composition",
      "focus": "subject with magical environmental context",
      "depth": "4 layers with magical depth",
      "motion_flow": "upward flowing magical energy",
      "perspective": "slightly low angle for majesty",
      "negative_space_ratio": 0.3,
      "orientation": "portrait"
    },
    "camera_settings": {
      "zoom": "medium environmental shot",
      "angle": "slight low angle for epic feel",
      "distance": "full body with environment",
      "lens": "35mm",
      "depth_of_field": "medium depth with magical bokeh"
    },
    "background": {
      "type": "ancient mystical forest",
      "details": "towering trees, magical light, forest spirits"
    }
  },
  "phase_4_details": {
    "physical_details": {
      "textures": ["flowing fabric", "bark texture", "magical energy", "moss"],
      "surface_textures": "painterly with magical effects",
      "line_quality": "flowing organic fantasy lines",
      "brush_style": "digital painting with magical details",
      "materials": ["ethereal cloth", "ancient wood", "magical crystal"]
    },
    "movement_dynamics": "flowing magical energy and fabric",
    "symbolic_elements": {
      "symbolism": ["nature protection", "ancient wisdom", "magical power"],
      "cultural_influences": ["Celtic mythology", "forest folklore"],
      "themes": ["guardianship", "magic", "nature harmony"]
    },
    "visual_effects": {
      "in_scene_effects": ["magical glow", "particle effects", "volumetric light"],
      "post_effects": ["magical bloom", "ethereal glow"],
      "grain_overlay": "subtle artistic texture",
      "film_look": "fantasy color grading"
    }
  },
  "phase_5_technical": {
    "generation_engine": {
      "engine": "SDXL",
      "model": "fantasy-art",
      "quality_modifiers": ["fantasy art", "magical lighting", "detailed illustration"]
    },
    "generation_parameters": {
      "steps": 50,
      "guidance_cfg": 8,
      "sampler": "Euler a",
      "seed": null,
      "stylize_chaos": "medium",
      "negative_prompt": ["modern", "technological", "low quality", "amateur"]
    },
    "upscaling_enhancement": {
      "upscaler": "SwinIR",
      "hires_pass": true,
      "denoise_strength": 0.4
    }
  },
  "phase_6_output": {
    "output_specifications": {
      "resolution": "1024x1536",
      "aspect_ratio": "2:3",
      "format": "PNG",
      "count": 1
    },
    "consistency_references": {
      "character_asset_id": "forest_guardian_001",
      "anchors": ["magical staff", "forest setting", "ethereal appearance"],
      "reference_image_ids": ["fantasy_concept_art"],
      "series_note": "maintain mystical forest guardian aesthetic"
    },
    "usage_guidelines": "emphasize magical elements, maintain fantasy atmosphere, use mystical color palette"
  }
}
```

### 3. Modern Architecture Photography

```json
{
  "phase_1_concept": {
    "meta": {
      "title": "Contemporary Glass Tower",
      "style_name": "Architectural Photography",
      "description": "Sleek modern glass building with geometric design and urban context",
      "tags": ["architecture", "modern", "glass", "urban", "geometric"],
      "narrative_context": "contemporary urban development"
    },
    "inspiration": ["Julius Shulman", "Ezra Stoller", "architectural photography"],
    "time_period": "contemporary 2020s"
  },
  "phase_2_creative_vision": {
    "scene_environment": "modern urban cityscape",
    "subject": {
      "type": "building",
      "description": "sleek glass and steel high-rise tower",
      "position": "dominant architectural presence",
      "pose": "imposing vertical structure",
      "expression_emotion": "modern sophisticated powerful",
      "interaction": "integrating with urban environment"
    },
    "style_medium": {
      "style": "architectural photography",
      "medium": "digital photography",
      "detail_level": "ultra-detailed architectural precision",
      "animated": false
    },
    "color_palette": {
      "hue": "modern neutrals with glass reflections",
      "palette": ["#2c3e50", "#bdc3c7", "#3498db", "#ecf0f1"],
      "contrast": "high structural contrast",
      "brightness": "clean bright architectural lighting",
      "saturation": "neutral with selective color",
      "temperature": "6500K cool modern daylight"
    },
    "lighting": {
      "direction": "natural daylight with glass reflections",
      "intensity": "bright clear architectural lighting",
      "temperature": "6500K",
      "shadow_style": "sharp geometric shadows",
      "highlight_style": "glass reflections and highlights",
      "volumetric": false
    },
    "mood_atmosphere": {
      "realism_level": "photorealistic",
      "emotional_tone": "modern sophisticated impressive",
      "atmosphere_elements": ["clear urban air"],
      "ambient_motion": "static architectural grandeur"
    }
  },
  "phase_3_composition": {
    "composition": {
      "layout": "strong vertical lines with geometric balance",
      "framing": "architectural perspective emphasizing height",
      "focus": "sharp building details with urban context",
      "depth": "3 layers - building, mid-ground, sky",
      "motion_flow": "strong vertical upward movement",
      "perspective": "low angle emphasizing height and power",
      "negative_space_ratio": 0.25,
      "orientation": "portrait"
    },
    "camera_settings": {
      "zoom": "wide architectural view",
      "angle": "low angle for impressive scale",
      "distance": "medium distance for full building",
      "lens": "24mm",
      "depth_of_field": "deep focus f/8 for sharp architecture"
    },
    "background": {
      "type": "urban skyline and clear sky",
      "details": "complementary buildings and clean sky"
    }
  },
  "phase_4_details": {
    "physical_details": {
      "textures": ["glass reflections", "steel surfaces", "concrete", "urban materials"],
      "surface_textures": "smooth modern materials",
      "line_quality": "sharp geometric architectural lines",
      "brush_style": "photographic precision",
      "materials": ["tempered glass", "steel", "concrete", "modern composites"]
    },
    "movement_dynamics": "static architectural stability",
    "symbolic_elements": {
      "symbolism": ["progress", "modernity", "urban growth"],
      "cultural_influences": ["modern architecture", "urban development"],
      "themes": ["progress", "technology", "urban life"]
    },
    "visual_effects": {
      "in_scene_effects": ["glass reflections", "natural lighting"],
      "post_effects": ["architectural enhancement"],
      "grain_overlay": "none",
      "film_look": "clean architectural color"
    }
  },
  "phase_5_technical": {
    "generation_engine": {
      "engine": "SDXL",
      "model": "architectural",
      "quality_modifiers": ["architectural photography", "sharp detail", "professional"]
    },
    "generation_parameters": {
      "steps": 40,
      "guidance_cfg": 7,
      "sampler": "DPM++ 2M",
      "seed": null,
      "stylize_chaos": "low",
      "negative_prompt": ["blurry", "distorted perspective", "low quality", "amateur"]
    },
    "upscaling_enhancement": {
      "upscaler": "Real-ESRGAN",
      "hires_pass": true,
      "denoise_strength": 0.2
    }
  },
  "phase_6_output": {
    "output_specifications": {
      "resolution": "1024x1536",
      "aspect_ratio": "2:3",
      "format": "JPEG",
      "count": 1
    },
    "consistency_references": {
      "character_asset_id": "modern_architecture_001",
      "anchors": ["glass materials", "geometric design", "urban context"],
      "reference_image_ids": ["architectural_ref"],
      "series_note": "maintain modern architectural aesthetic"
    },
    "usage_guidelines": "emphasize clean lines, use precise geometry, maintain architectural proportions"
  }
}
```

### 4. Street Photography Documentary

```json
{
  "phase_1_concept": {
    "meta": {
      "title": "Urban Life Moment",
      "style_name": "Documentary Street Photography",
      "description": "Authentic candid moment capturing genuine human interaction in urban environment",
      "tags": ["street", "documentary", "candid", "urban", "authentic"],
      "narrative_context": "genuine slice of everyday urban life"
    },
    "inspiration": ["Henri Cartier-Bresson", "Vivian Maier", "street photography masters"],
    "time_period": "contemporary"
  },
  "phase_2_creative_vision": {
    "scene_environment": "busy urban street with natural activity",
    "subject": {
      "type": "people in urban setting",
      "description": "individuals engaged in authentic daily activities",
      "position": "natural placement within scene",
      "pose": "candid unposed natural movement",
      "expression_emotion": "authentic natural unguarded",
      "interaction": "genuine human activities and interactions"
    },
    "style_medium": {
      "style": "documentary photojournalism",
      "medium": "digital photography",
      "detail_level": "natural documentary detail",
      "animated": false
    },
    "color_palette": {
      "hue": "natural urban colors",
      "palette": ["#34495e", "#f39c12", "#e74c3c", "#95a5a6"],
      "contrast": "natural documentary contrast",
      "brightness": "natural ambient lighting",
      "saturation": "natural desaturated documentary",
      "temperature": "natural mixed lighting"
    },
    "lighting": {
      "direction": "natural available light",
      "intensity": "natural ambient street lighting",
      "temperature": "mixed natural sources",
      "shadow_style": "natural documentary shadows",
      "highlight_style": "natural street highlights",
      "volumetric": false
    },
    "mood_atmosphere": {
      "realism_level": "photorealistic documentary",
      "emotional_tone": "authentic human genuine",
      "atmosphere_elements": ["urban atmosphere", "natural street elements"],
      "ambient_motion": "natural human activity and movement"
    }
  },
  "phase_3_composition": {
    "composition": {
      "layout": "natural documentary composition",
      "framing": "candid street photography framing",
      "focus": "subject with natural street context",
      "depth": "natural street depth layers",
      "motion_flow": "natural human movement patterns",
      "perspective": "natural human eye perspective",
      "negative_space_ratio": 0.35,
      "orientation": "landscape"
    },
    "camera_settings": {
      "zoom": "natural documentary focal length",
      "angle": "natural street level perspective",
      "distance": "natural social distance",
      "lens": "35mm",
      "depth_of_field": "natural documentary depth f/5.6"
    },
    "background": {
      "type": "authentic urban street environment",
      "details": "natural street elements, architecture, urban life"
    }
  },
  "phase_4_details": {
    "physical_details": {
      "textures": ["urban surfaces", "natural clothing", "street materials"],
      "surface_textures": "natural wear and authenticity",
      "line_quality": "natural documentary capture",
      "brush_style": "photographic documentary style",
      "materials": ["everyday fabrics", "urban materials", "natural surfaces"]
    },
    "movement_dynamics": "natural human movement and activity",
    "symbolic_elements": {
      "symbolism": ["human connection", "urban life", "everyday moments"],
      "cultural_influences": ["documentary tradition", "street photography"],
      "themes": ["human experience", "urban culture", "authentic life"]
    },
    "visual_effects": {
      "in_scene_effects": ["natural lighting", "street atmosphere"],
      "post_effects": ["documentary processing"],
      "grain_overlay": "subtle film-like grain",
      "film_look": "documentary black and white or natural color"
    }
  },
  "phase_5_technical": {
    "generation_engine": {
      "engine": "SDXL",
      "model": "documentary",
      "quality_modifiers": ["documentary photography", "natural lighting", "authentic"]
    },
    "generation_parameters": {
      "steps": 35,
      "guidance_cfg": 6,
      "sampler": "Euler a",
      "seed": null,
      "stylize_chaos": "low",
      "negative_prompt": ["posed", "artificial", "studio lighting", "fake"]
    },
    "upscaling_enhancement": {
      "upscaler": "Real-ESRGAN",
      "hires_pass": true,
      "denoise_strength": 0.25
    }
  },
  "phase_6_output": {
    "output_specifications": {
      "resolution": "1536x1024",
      "aspect_ratio": "3:2",
      "format": "JPEG",
      "count": 1
    },
    "consistency_references": {
      "character_asset_id": null,
      "anchors": ["documentary style", "natural lighting", "street context"],
      "reference_image_ids": ["street_photography_ref"],
      "series_note": "maintain documentary authenticity"
    },
    "usage_guidelines": "preserve natural authenticity, avoid artificial elements, capture genuine moments"
  }
}
```

### 5. Product Photography Commercial

```json
{
  "phase_1_concept": {
    "meta": {
      "title": "Luxury Watch Product Shot",
      "style_name": "Commercial Product Photography",
      "description": "Premium luxury watch with dramatic lighting and clean commercial presentation",
      "tags": ["product", "luxury", "commercial", "watch", "premium"],
      "narrative_context": "high-end luxury product showcase"
    },
    "inspiration": ["commercial photography", "luxury advertising"],
    "time_period": "contemporary luxury"
  },
  "phase_2_creative_vision": {
    "scene_environment": "controlled studio environment",
    "subject": {
      "type": "luxury product",
      "description": "premium mechanical watch with metal bracelet",
      "position": "hero position center frame",
      "pose": "optimal product angle for detail visibility",
      "expression_emotion": "luxury precision craftsmanship",
      "interaction": "isolated focus on product qualities"
    },
    "style_medium": {
      "style": "commercial photography",
      "medium": "digital photography",
      "detail_level": "ultra-detailed commercial precision",
      "animated": false
    },
    "color_palette": {
      "hue": "luxury metals with minimal color",
      "palette": ["#c0392b", "#2c3e50", "#f39c12", "#ecf0f1"],
      "contrast": "high dramatic commercial contrast",
      "brightness": "controlled studio lighting",
      "saturation": "selective luxury color enhancement",
      "temperature": "5600K controlled studio"
    },
    "lighting": {
      "direction": "controlled studio key and rim lighting",
      "intensity": "precise commercial lighting setup",
      "temperature": "5600K",
      "shadow_style": "controlled dramatic product shadows",
      "highlight_style": "premium metal reflections and highlights",
      "volumetric": false
    },
    "mood_atmosphere": {
      "realism_level": "commercial photorealistic",
      "emotional_tone": "luxury sophisticated premium",
      "atmosphere_elements": ["controlled studio environment"],
      "ambient_motion": "static premium product presence"
    }
  },
  "phase_3_composition": {
    "composition": {
      "layout": "centered commercial product layout",
      "framing": "clean commercial product framing",
      "focus": "sharp product focus with background separation",
      "depth": "2 layers - product and background",
      "motion_flow": "static commercial stability",
      "perspective": "optimal commercial product angle",
      "negative_space_ratio": 0.4,
      "orientation": "square"
    },
    "camera_settings": {
      "zoom": "macro commercial detail level",
      "angle": "optimal commercial product angle",
      "distance": "commercial product distance",
      "lens": "100mm macro",
      "depth_of_field": "controlled commercial depth f/8"
    },
    "background": {
      "type": "clean commercial backdrop",
      "details": "minimal luxury background elements"
    }
  },
  "phase_4_details": {
    "physical_details": {
      "textures": ["polished metal", "leather", "sapphire crystal", "precision mechanics"],
      "surface_textures": "ultra-premium material quality",
      "line_quality": "precision commercial detail",
      "brush_style": "commercial photography perfection",
      "materials": ["stainless steel", "gold", "leather", "sapphire"]
    },
    "movement_dynamics": "static luxury product presentation",
    "symbolic_elements": {
      "symbolism": ["precision", "luxury", "craftsmanship", "status"],
      "cultural_influences": ["luxury marketing", "Swiss watchmaking"],
      "themes": ["luxury", "precision", "timeless quality"]
    },
    "visual_effects": {
      "in_scene_effects": ["controlled reflections", "premium material highlights"],
      "post_effects": ["commercial enhancement", "reflection control"],
      "grain_overlay": "none",
      "film_look": "clean commercial color"
    }
  },
  "phase_5_technical": {
    "generation_engine": {
      "engine": "SDXL",
      "model": "commercial-product",
      "quality_modifiers": ["commercial photography", "luxury product", "premium quality"]
    },
    "generation_parameters": {
      "steps": 40,
      "guidance_cfg": 7,
      "sampler": "DPM++ 2M",
      "seed": null,
      "stylize_chaos": "low",
      "negative_prompt": ["cheap", "low quality", "amateur", "cluttered background"]
    },
    "upscaling_enhancement": {
      "upscaler": "Real-ESRGAN",
      "hires_pass": true,
      "denoise_strength": 0.2
    }
  },
  "phase_6_output": {
    "output_specifications": {
      "resolution": "1024x1024",
      "aspect_ratio": "1:1",
      "format": "PNG",
      "count": 1
    },
    "consistency_references": {
      "character_asset_id": "luxury_watch_001",
      "anchors": ["premium materials", "commercial lighting", "clean presentation"],
      "reference_image_ids": ["commercial_product_ref"],
      "series_note": "maintain luxury commercial aesthetic"
    },
    "usage_guidelines": "emphasize premium materials, use clean backgrounds, maintain commercial precision"
  }
}
```

---

## Technical Parameter Guide

### Engine-Specific Optimization

#### SDXL (Stable Diffusion XL)
**Recommended Settings:**
- **Steps**: 35-50 (40 optimal)
- **CFG**: 6-8 (7 optimal)
- **Sampler**: DPM++ 2M, Euler a
- **Resolution**: 1024x1024, 1536x1024
- **Upscaler**: Real-ESRGAN, ESRGAN

```json
"phase_5_technical": {
  "generation_engine": {
    "engine": "SDXL",
    "model": "base-v1.0",
    "quality_modifiers": ["best quality", "detailed", "sharp focus"]
  },
  "generation_parameters": {
    "steps": 40,
    "guidance_cfg": 7,
    "sampler": "DPM++ 2M",
    "stylize_chaos": "low"
  }
}
```

#### Midjourney
**Recommended Settings:**
- **Version**: --v 6 or --v 6.1
- **Stylize**: 100-400 (medium creativity)
- **Chaos**: 0-25 (low to medium variation)
- **Quality**: --q 1 (standard quality)

```json
"phase_5_technical": {
  "generation_engine": {
    "engine": "Midjourney",
    "model": "v6.1",
    "quality_modifiers": ["cinematic", "highly detailed"]
  },
  "generation_parameters": {
    "steps": null,
    "guidance_cfg": null,
    "sampler": null,
    "stylize_chaos": "--stylize 200 --chaos 10"
  }
}
```

#### FLUX
**Recommended Settings:**
- **Steps**: 20-30 (faster generation)
- **CFG**: 3.5-7 (lower than SDXL)
- **Sampler**: Euler, DPM++ SDE

```json
"phase_5_technical": {
  "generation_engine": {
    "engine": "FLUX",
    "model": "dev",
    "quality_modifiers": ["high quality", "detailed"]
  },
  "generation_parameters": {
    "steps": 25,
    "guidance_cfg": 5,
    "sampler": "Euler"
  }
}
```

### Style-Specific Parameter Optimization

#### Photorealistic
```json
{
  "steps": 35-45,
  "guidance_cfg": 6-7,
  "sampler": "DPM++ 2M",
  "stylize_chaos": "low",
  "negative_prompt": ["cartoon", "anime", "painting", "sketch", "artificial"]
}
```

#### Artistic/Painterly
```json
{
  "steps": 45-60,
  "guidance_cfg": 8-10,
  "sampler": "Euler a",
  "stylize_chaos": "medium",
  "negative_prompt