```
# Prompt System TTS Editorial Guide

This report details the systematic changes made to the user's original Persian prompt system to transform it into a clear, structured, and highly functional English guide for an AI Editorial Specialist focused on preparing Persian text for Text-to-Speech (TTS) conversion.

## 1. Core Rewrite Methodology

The methodology focused on three key goals: **Clarity**, **Structuralization**, and **Adherence to Constraints**.

|Methodology|Description|Rationale|
|---|---|---|
|**Translation & Contextualization**|The specialized Persian linguistic terms (e.g., $ \text{اعراب‌گذاری} $, $ \text{نیم‌فاصله} $) were translated and immediately defined or explained in English, connecting them to familiar TTS concepts (e.g., Vocalization, Diacritics).|Ensures the English-speaking user understands the _why_ and _what_ of the required Persian-specific editorial tasks.|
|**Structural Reorganization**|The content was restructured into three distinct, named phases (**Role & Identity**, **Mandatory Analysis**, **Editorial Execution**) and a final **Output Format**.|Improves readability, establishes a clear workflow, and prevents the AI from skipping the critical analysis and confirmation steps.|
|**Constraint Enforcement**|The most critical rule—**Never delete content**—was moved to a `PRIMARY DIRECTIVE` section, bolded, and supplemented with clear instructions on how to handle _omissions_ (documenting non-speakable elements like URLs rather than simply deleting them).|Guarantees compliance with the user's non-negotiable rule.|

## 2. Step-by-Step Breakdown of Changes

### Step 1: Defining Role and Identity

|Original Goal (Persian)|English Equivalent & Changes Made|Significance|
|---|---|---|
|$ \text{نقش و هویت} $ (Role and Identity)|Renamed to **Role and Identity (The System Prompt)**.|Clearly designates the section as the AI's core, constant persona instruction.|
|$ \text{متخصص Voice AI} $ (Voice AI Specialist)|Clarified as **Senior Voice AI Editorial Specialist**.|Elevates the persona to reflect the detailed, expert-level work required.|
|$ \text{فاقد عناصر مزاحم صوتی باشد} $|Explicitly stated objectives are **natural, fluent, phonetically accurate, intelligible, and free of disruptive elements.**|Uses clear, actionable language familiar to audio production/TTS workflows.|

### Step 2: Refining the Mandatory Analysis Phase

This entire phase was renamed **PHASE 1: MANDATORY TEXT ANALYSIS** and made a hard prerequisite for editing.

|Original Element|Change/Action Taken|Rationale|
|---|---|---|
|$ \text{شناسایی کلمات نیازمند اعراب‌گذاری} $|Renamed **Identify Words Requiring Diacritics (Vocalization / اعراب‌گذاری)**. Sub-categories were simplified and presented as a bulleted list.|Grouped the list items into more easily identifiable categories (Homographs, Proper Nouns, Arabic-Origin Terms) for quicker analysis.|
|$ \text{شناسایی کلمات نیازمند راهنمای تلفظ} $|Renamed **Identify Words Requiring Phonetic Guides (Transliteration)**. The instruction to use the $ \text{کلمه [تلفظ]} $ format was highlighted.|Clarifies that this step addresses non-standard spellings or foreign words.|
|$ \text{آنالیز ساختاری متن} $|Renamed **Structural and Punctuation Analysis**.|Broke down analysis into three clear components: **Omission**, **Parenthetical Content**, and **Punctuation Gaps**.|
|$ \text{ارائه آنالیز جامع} $|Renamed **Deliver Comprehensive Analysis Report (Minimum 500 characters)** and the required items were made explicit checklist items (1-5).|Enforced a minimum length (500 characters, which is roughly equivalent to the original 500 words required in Persian context) and a structured format for the analysis output.|
|$ \text{درخواست تایید} $|Renamed **Request Confirmation**.|Ensures the human user has a chance to review and approve the AI's plan before the text is permanently modified.|

### Step 3: Formalizing the Editorial Execution Phase

This phase was named **PHASE 2: EDITORIAL EXECUTION** and reorganized into a structured rule table for maximum clarity.

|Original Element|Change/Action Taken|Rationale|
|---|---|---|
|$ \text{قانون تقسیم متن} $|Renamed **Long Text Segmentation Rule**. The 3000-character limit was kept.|Standardized the rule presentation and emphasized that the segments must be presented in separate **Markdown code blocks** for usability.|
|$ \text{وظایف ویرایشی} $|Consolidated all editing rules into a **Rule Table** (Task, Rule, Example).|The table format is excellent for quick reference and ensures all rules are applied consistently.|
|$ \text{تبدیل پرانتزها} $|The three examples (Dates, Definitions, Equivalents) were kept and added to the Parentheses Conversion rule in the table.|Maintained the user's detailed guidance on how to convert complex structures into natural prose.|

## 3. Added Phase: Troubleshooting and Quality Assurance

A new phase was added to handle common pitfalls in Persian TTS and ensure the final output is highly optimized, even if the user were to use the text in an SSML environment.

|New Phase|Content Added|Purpose|
|---|---|---|
|**PHASE 3: TROUBLESHOOTING & QA**|Added internal checklist focusing on potential TTS errors: **Phonetic Drift** (mispronouncing diacritized words), **Prosodic Flatness** (missing pauses), **Zero Width Non-Joiners** ($ \text{نیم‌فاصله} $ check for compound words), and **Ambiguity Review**.|Preemptively checks for known Grapheme-to-Phoneme (G2P) conversion failures specific to Persian that even a corrected script can face.|

## 4. Elements Removed or Retained Summary

|Status|Element Summary|Rationale|
|---|---|---|
|**RETAINED (Core)**|**No Deletion Rule, 3000-Character Segmentation, Initial Analysis Requirement, Diacritic Categories, Parenthetical Conversion Logic.**|These are critical, non-negotiable user requirements that define the task.|
|**SIGNIFICANTLY CHANGED**|**Output Formatting** (Strict Markdown structure), **Rule Presentation** (Shifted from text blocks to a clear, actionable table), **Language** (Full translation and contextualization).|Improved clarity and usability for the English-speaking user.|
|**REMOVED**|The original **Persian Example** text and its analysis.|The example was used only for instruction drafting; it was removed from the final prompt to avoid confusion.|
|**ADDED**|**PHASE 3: Troubleshooting & QA** and an explicit check for the **Zero Width Non-Joiner** ($ \text{نیم‌فاصله} $), which is vital for correct stress placement in Persian TTS.|Enhanced the prompt system's accuracy by addressing a common technical failure point in Persian G2P processing.|
```