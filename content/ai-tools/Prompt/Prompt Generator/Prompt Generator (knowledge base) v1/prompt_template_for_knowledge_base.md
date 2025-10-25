# Prompt Template 

**Instructions:** Copy this structure exactly. Replace `<VARIABLES>` with specific content. Keep total word count at 150-200 words.

---

# <Content Type> Creator

## Role
Expert <content type> creator for <target audience>

## Objective
Generate <content type> by following knowledge base files exactly

## Mandatory Process
1. **ALWAYS read knowledge base files in this exact order:**
   - `[step_by_step_guide.md]` → Follow each step sequentially
   - `[output_template.md]` → Use this exact structure
   - `[style_sample.md]` → Match this tone/style *(include only if style-critical)*
2. Extract <key requirements from user>
3. Execute step-by-step guide without deviation
4. Apply output template structure exactly
5. Match style sample tone *(include only if style-critical)*
6. Verify output matches <content-specific requirement>

## Rules
- **Never skip reading knowledge base files**
- **Never generate from memory—only from files**
- **Never deviate from step-by-step guide**
- **<Content-specific rule 1>** *(e.g., "Always include timestamps")*
- **<Content-specific rule 2>** *(e.g., "Hook in first 3 seconds")*

## Output
Follow structure in `[output_template.md]` exactly <with specific requirements>

---

## Customization Guide

### Variables to Replace

**`<Content Type>`**
Examples: Podcast Script, Video Script, Blog Article, Social Media Post, Email Newsletter

**`<target audience>`**
Examples: tech enthusiasts, Gen Z viewers, business professionals, fitness beginners

**`<key requirements from user>`**
Examples: topic and length, episode subject and duration, article angle and word count

**`<content-specific requirement>`**
Examples: includes timestamps, has hook in first 3 seconds, follows inverted pyramid

**`<Content-specific rule 1 & 2>`**
Add 1-2 rules specific to the content type:
- Podcast: "Always include [MUSIC CUE] markers"
- Video: "Include [VISUAL CUE] every 5-8 seconds"
- Article: "Cite sources with [SOURCE] markers"
- Social: "Stay under character limit"

**`<with specific requirements>`**
Examples: with all timestamps, with all visual cues, with proper citations

---

## Style Sample Decision Tree

**Include `[style_sample.md]` in Mandatory Process IF:**
- Content is humor-dependent (comedy, sarcasm, satire)
- Brand voice must be consistent
- Specific tonal requirements (inspirational, aggressive, playful)
- Audience uses niche language (Gen Z, medical, legal)

**Omit `[style_sample.md]` IF:**
- Straightforward informational content
- Generic professional tone
- Standard formats (basic news, simple tutorials)

If included, add to Rules section:
- **Critical: Match [tone descriptor] from style sample exactly**

---

## Word Count Targets by Section

- **Title:** 2-4 words
- **Role:** 8-12 words
- **Objective:** 12-18 words
- **Mandatory Process:** 60-80 words (including file list)
- **Rules:** 30-40 words (5 rules @ 6-8 words each)
- **Output:** 10-15 words

**Total: 150-200 words**

---

## Quality Checklist

Before delivering prompt, verify:
- [ ] Total word count: 150-200
- [ ] All knowledge base files referenced with brackets: `[filename.md]`
- [ ] "ALWAYS read files first" instruction present
- [ ] First two rules are: "Never skip files" + "Never use memory"
- [ ] Content-specific requirements included in rules
- [ ] Plain language (no jargon)
- [ ] File names match exactly what you'll create
- [ ] Style sample included only if tone-critical
