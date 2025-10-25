# How to Write Step-by-Step Guides

## Purpose
Step-by-step guides are the REAL prompt—they contain all process logic. The main prompt just directs the chatbot to read this file. Make these guides detailed, specific, and actionable.

---

## Structure Overview

**Every step-by-step guide must have:**
1. Title with content type
2. 3-7 numbered steps (each with specific structure)
3. Final verification checklist

**Length target:** 800-1200 words (detailed is good here)

---

## Step 1: Title & Introduction

**Format:**
```markdown
# Step-by-Step Guide: <Content Type>

**Purpose:** This guide provides the exact process for generating <content type>. Follow each step sequentially without deviation.
```

**Example:**
```markdown
# Step-by-Step Guide: Podcast Script

**Purpose:** This guide provides the exact process for generating podcast episode scripts. Follow each step sequentially without deviation.
```

---

## Step 2: Write Each Process Step

**Every step must include these 4 elements:**

### Element 1: Step Header
```markdown
## Step X: <Action Name>
**Objective:** <What this step achieves in one sentence>
```

### Element 2: Instructions
```markdown
**Instructions:**
- Do this: <Specific action>
- Consider: <Important factor>
- Include: <Required element>
- Format: <How to structure this part>
```

**Make instructions:**
- ✅ Specific and actionable ("Start with a question" not "Engage the audience")
- ✅ Include quantities ("3-4 examples" not "some examples")
- ✅ Mention format requirements ("[MUSIC CUE]", timestamps, character limits)

### Element 3: Example
```markdown
**Example:**
<Concrete example showing this step executed correctly>
```

**Examples must:**
- ✅ Be complete (not just snippets)
- ✅ Show the exact format expected
- ✅ Include any special markers ([VISUAL], timestamps, etc.)
- ✅ Be realistic (not oversimplified)

### Element 4: Common Mistakes
```markdown
**Common Mistakes:**
- Don't: <Specific mistake to avoid>
- Don't: <Another mistake>
```

**This prevents:**
- Generic outputs
- Format violations
- Common errors you've seen

---

## Step 3: Number of Steps

**Choose based on content complexity:**

| Content Type | Typical Steps | Example Breakdown |
|--------------|---------------|-------------------|
| Short video (30-60s) | 5 steps | Hook → Setup → Escalation → Punchline → CTA |
| Podcast (20-30min) | 4 steps | Hook → Opening → Main Content → Closing |
| Article (800 words) | 6 steps | Headline → Lead → Body → Evidence → Conclusion → SEO |
| Social post | 3 steps | Hook → Value → CTA |

**General rule:** 
- Simple content: 3-5 steps
- Complex content: 5-7 steps
- Never more than 7 (too complex = split into sub-steps)

---

## Step 4: Write Final Verification Checklist

**Format:**
```markdown
## Final Verification Checklist

Before delivering output, confirm:
- [ ] <Criterion 1: specific requirement>
- [ ] <Criterion 2: specific requirement>
- [ ] <Criterion 3: specific requirement>
- [ ] Follows output template structure exactly
- [ ] Matches style sample tone (if applicable)
- [ ] All required elements present (<list specific elements>)
```

**Checklist should include:**
- Content-specific requirements (length, format, timing)
- Template compliance check
- Style consistency check (if applicable)
- 5-8 items total

**Example for video script:**
```markdown
## Final Verification Checklist

Before delivering script, confirm:
- [ ] Hook within first 3 seconds
- [ ] All [VISUAL CUES] included
- [ ] Escalation pattern: small → bigger → biggest
- [ ] At least one callback/reference
- [ ] Timing: 30-90 seconds total
- [ ] Matches sarcastic, fast-paced tone from style sample
- [ ] Ends with engagement hook ("tag someone who...")
```

---

## Step 5: Content-Specific Guidance

### For Time-Based Content (Videos, Podcasts, Speeches)

**Always include:**
- Timing requirements per section
- Transition markers
- Pacing guidelines
- Hook timing (first 3-30 seconds depending on format)

**Example structure:**
```markdown
## Step 2: Opening (Seconds 0-15)
**Objective:** Establish context quickly

**Instructions:**
- Keep under 50 words
- State topic within 10 seconds
- Include [TRANSITION MUSIC] marker at end

**Timing breakdown:**
- 0-5s: Hook
- 5-10s: Context
- 10-15s: Promise of value
```

### For Written Content (Articles, Blogs, Social Posts)

**Always include:**
- Word count targets per section
- Structural requirements (headings, bullets, paragraphs)
- SEO elements (if applicable)
- Citation format

**Example structure:**
```markdown
## Step 3: Body Paragraphs (400-600 words)
**Objective:** Deliver main value with evidence

**Instructions:**
- Write 3-4 paragraphs (150 words each)
- Each paragraph: claim → evidence → example
- Use subheadings (## format) for scannability
- Include 2-3 [SOURCE] citations per major claim
```

### For Visual Content (Video Scripts, Presentations)

**Always include:**
- Visual cue markers
- On-screen text requirements
- Transition notes
- Camera direction (if relevant)

**Example structure:**
```markdown
## Step 4: Visual Gags (Seconds 30-45)
**Objective:** Reinforce humor visually

**Instructions:**
- Add [ZOOM ON: subject] for emphasis
- Use [TEXT OVERLAY] for punchlines
- Include [CUT TO: new scene] for perspective shifts
- Visual gag every 8-10 seconds minimum
```

---

## Common Mistakes Across All Step-by-Step Guides

### ❌ Don't Write Vague Instructions
**Bad:** "Make it engaging"
**Good:** "Start with a question or surprising statistic in the first 10 words"

### ❌ Don't Skip Examples
**Bad:** Just listing what to do
**Good:** Show exactly what it looks like when done correctly

### ❌ Don't Forget Format Requirements
**Bad:** "Add music"
**Good:** "Add [INTRO MUSIC - 0:00-0:15] marker in brackets"

### ❌ Don't Make Steps Too Long
**Bad:** One massive step covering 10 different things
**Good:** Break into 3-4 focused steps with clear objectives

### ❌ Don't Assume Knowledge
**Bad:** "Use standard podcast structure"
**Good:** "Use this structure: Hook (30s) → Intro (5min) → Content (20min) → Close (5min)"

---

## Final Template Checklist

Before delivering step-by-step guide, verify:
- [ ] Title clearly states content type
- [ ] 3-7 numbered steps (not too few, not too many)
- [ ] Each step has: Objective + Instructions + Example + Common Mistakes
- [ ] Instructions are specific and actionable (no vague advice)
- [ ] Examples are complete and realistic
- [ ] Content-specific requirements included (timing, format, visual cues)
- [ ] Final verification checklist at end (5-8 items)
- [ ] Total length: 800-1200 words
