# Step-by-Step Guide to Writing Complete Instruction Prompts

## Purpose

This guide shows you how to write comprehensive instruction prompts for professional chatbots. These prompts are detailed (typically 600-800 words) and contain ALL instructions directly in the prompt—unlike creative content prompts where complexity lives in external files.

---

## OVERVIEW: Two Approaches to Prompts

**Creative Content Approach (150-200 words):**

- Short main prompt
- Complexity in knowledge base files
- Chatbot reads files first, then executes

**Complete Instruction Approach (1000-2000 words):**

- Everything in one prompt
- No external file dependencies
- Self-contained instructions
- **This guide covers THIS approach**

---

## Step 1: Define Purpose & Gather Requirements (15 minutes)

### 1.1 Complete the Purpose Statement

Fill in this template in 25 words or less:

> "This chatbot exists to **[primary action]** for **[target users]** so that **[desired outcome]**."

**Examples:**

- ✅ "This chatbot exists to debug Python code for junior developers so that they can resolve errors independently."
- ✅ "This chatbot exists to answer customer service questions for online shoppers so that they can complete purchases without human support."
- ❌ "This chatbot helps people." (Too vague)

### 1.2 Answer the 10 Essential Questions

Write down answers to these:

1. **Primary task**: What is the #1 thing it does?
2. **User input**: What will users typically ask/provide?
3. **Success metric**: How do you measure success?
4. **Tone**: Formal, casual, or somewhere between?
5. **Response length**: Short answers or detailed explanations?
6. **Constraints**: What should it never do or say?
7. **Data needs**: What information must it access?
8. **Format**: Bullet points, paragraphs, structured responses?
9. **Edge cases**: What are the 3 trickiest scenarios?
10. **Escalation**: When does a human need to take over?

### 1.3 Identify Your User

Document:

- **Expertise level**: Novice / Intermediate / Expert
- **Domain knowledge**: Technical background or general public?
- **Communication style**: Prefers formal or conversational tone?
- **Common scenarios**: List 3-5 typical use cases

**Validation checkpoint:**

- [ ] Purpose is specific and measurable
- [ ] All 10 questions answered
- [ ] User profile documented
- [ ] Success criteria defined

---

## Step 2: Write Identity & Role Definition (15 minutes)

### 2.1 Create the Header

Start with this format:

```markdown
# 🧠 [Chatbot Name / Purpose] – Complete Instruction Template
```

**Examples:**

- `# 🧠 Python Code Debugger – Complete Instruction Template`
- `# 🧠 Customer Service Assistant – Complete Instruction Template`
- `# 🧠 Financial Advice Chatbot – Complete Instruction Template`

### 2.2 Choose Your Role Framework

Pick one structure based on your chatbot type:

**Option A: Expert Professional** (for specialized domains)

```markdown
## 1. IDENTITY & ROLE DEFINITION

**Role:** Expert [specific title] for [target audience] created by [organization]

You specialize in [domain] and communicate in a [tone] manner.
Current model: [model_name] (model string: [model_string])
```

**Example:**

```markdown
**Role:** Expert Python Debugger for junior developers created by CodeHelp Inc.

You specialize in identifying and fixing Python errors and communicate in a patient, educational manner.
Current model: Claude Sonnet 4.5 (model string: claude-sonnet-4-5-20250929)
```

**Option B: Service Role** (for customer support)

```markdown
**Role:** [Service role] for [company/organization]

You help users with [specific services] using a [approach] approach.
```

**Example:**

```markdown
**Role:** Customer Service Representative for TechStore

You help users with order tracking, returns, and product questions using a friendly, solution-focused approach.
```

**Option C: Specialized Assistant** (for task-specific bots)

```markdown
**Role:** Specialized assistant designed to [primary function]

You help users by [specific methods] and prioritize [key values].
```

### 2.3 Define Communication Style

Add a style matrix with specific examples:

```markdown
**Communication Style:**
- **Formality**: [Highly Formal / Professional / Conversational / Casual]
- **Tone**: [Authoritative / Collaborative / Empathetic / Direct]
- **Pacing**: [Concise / Balanced / Thorough]
- **Language**: [Technical / Plain / Mixed based on user]
```

Include 2-3 sample phrases for your chosen style:

**Examples:**

- Professional: "I'll help you resolve this issue."
- Conversational: "Let's figure this out together."
- Casual: "No worries—I've got you covered."

**Validation checkpoint:**

- [ ] Role clearly defined
- [ ] Target audience specified
- [ ] Communication style documented with examples
- [ ] Model information included if relevant

---

## Step 3: Write Primary Objective & Context (20 minutes)

### 3.1 Create the Objective Statement

Write one clear sentence describing what the chatbot does:

```markdown
## 2. PRIMARY OBJECTIVE

**Goal:** Generate [output type] by [specific method]

Success = [measurable outcome]
```

**Examples:**

- "**Goal:** Debug Python code by analyzing errors, identifying root causes, and suggesting fixes. Success = User can resolve error independently."
- "**Goal:** Answer customer service questions by accessing order database and company policies. Success = Customer gets accurate answer in <2 minutes."

### 3.2 Add Context Requirements

Use this XML structure for comprehensive context:

```markdown
<context>
- **Purpose:** {{PURPOSE_OF_TASK}}
- **Target audience:** {{TARGET_AUDIENCE}}
- **User knowledge level:** [novice/intermediate/expert]
- **Constraints:** [time, policy, confidentiality, format requirements]
- **Success criteria:** {{SUCCESS_CRITERIA}}
</context>
```

**Customization:** Replace {{variables}} with your specific information. Keep it under 100 words.

**Example:**

```markdown
<context>
- **Purpose:** Help users debug Python errors quickly
- **Target audience:** Junior developers (1-3 years experience)
- **User knowledge level:** Intermediate (knows syntax, limited debugging experience)
- **Constraints:** Cannot execute code, must explain concepts simply, 5-minute response time target
- **Success criteria:** User understands the error and knows how to fix it
</context>
```

**Validation checkpoint:**

- [ ] Objective is one clear sentence
- [ ] Success criteria is measurable
- [ ] Context includes all required elements
- [ ] Variables replaced with specifics

---

## Step 4: Design Mandatory Process & Workflow (30 minutes)

### 4.1 Write Sequential Steps

Create 5-10 numbered steps that must be followed:

```markdown
## 3. MANDATORY PROCESS & WORKFLOW

**ALWAYS follow this exact sequence:**

<instructions>
1. [First action]
2. [Second action]
3. [Third action]
4. [Fourth action]
5. [Fifth action]
6. [Verification step]
</instructions>
```

**Make steps specific and actionable:**

❌ Bad: "Understand the user's request" ✅ Good: "Extract the error message, code snippet, and user's attempted solution"

❌ Bad: "Provide a solution" ✅ Good: "Explain the root cause in plain language, show the fix with code example, and verify user understands"

### 4.2 Add the Golden Rule

Include this critical reminder:

```markdown
**Golden Rule:** Show this prompt to a colleague with minimal context—if they're confused, Claude will be too.
```

### 4.3 Create Process Example

Show one complete workflow:

**Example for Python Debugger:**

```markdown
**Example Process:**
User provides: "NameError: name 'user_input' is not defined"

1. **Identify error type:** NameError = variable not defined
2. **Analyze context:** Check if variable is misspelled, not initialized, or out of scope
3. **Determine cause:** Variable likely used before being assigned
4. **Explain clearly:** "This means Python can't find a variable named 'user_input'"
5. **Provide fix:** Show correct initialization: `user_input = input("Enter value: ")`
6. **Verify understanding:** "Does this make sense? Do you see where to add this line?"
```

**Validation checkpoint:**

- [ ] 5-10 clear, sequential steps
- [ ] Each step is specific and actionable
- [ ] Golden Rule included
- [ ] Example workflow provided

---

## Step 5: Establish Critical Rules (20 minutes)

### 5.1 Write Non-Negotiable Rules

Create 10-15 rules in three categories:

```markdown
## 4. CRITICAL RULES (NON-NEGOTIABLE)

### Core Behavior Rules:
- ⛔ **Never [prohibited action]**
- ⛔ **Never [prohibited action]**
- ✅ **Always [required action]**
- ✅ **Always [required action]**

### Content-Specific Rules:
- **[Rule specific to your domain]**
- **[Rule specific to your domain]**
- **[Rule specific to your domain]**

### Error Handling Rules:
- **[How to handle uncertainty]**
- **[How to handle missing information]**
- **[When to escalate]**
```

**Use explicit, unambiguous language:**

✅ Good rules:

- "Never execute or run code—only analyze and suggest fixes"
- "Always explain the 'why' behind the error, not just the 'how' to fix it"
- "If the error is unclear, ask for the full traceback before suggesting solutions"

❌ Bad rules:

- "Be helpful" (too vague)
- "Follow best practices" (what practices?)
- "Handle errors appropriately" (how?)

### 5.2 Add Reasoning for Key Rules

For critical rules, explain WHY:

**Example:**

```markdown
- **Never provide code without explanation**
  *(Why: Users need to understand the fix to learn and handle similar issues independently)*
  
- **Always ask for the full error traceback if initial message is unclear**
  *(Why: Root cause often appears earlier in the traceback, not in the final line)*
```

**Validation checkpoint:**

- [ ] 10-15 specific rules written
- [ ] Rules use explicit language (never/always)
- [ ] Organized into logical categories
- [ ] Key rules include reasoning

---

## Step 6: Define Input Processing (15 minutes)

### 6.1 Specify Input Format

Choose and document your input structure:

**Option A: Simple Single Input**

```markdown
## 5. INPUT PROCESSING

<input_data>
{{USER_INPUT}}
</input_data>

**Processing Rules:**
1. Validate input completeness
2. Extract key information: [list what to extract]
3. If ambiguous, ask clarifying questions
4. Never assume missing information
```

**Option B: Structured Multiple Inputs**

```markdown
<input_requirements>
- **Required:** [Field 1], [Field 2], [Field 3]
- **Optional:** [Field 4], [Field 5]
- **Format:** [Expected format]
</input_requirements>

**If input is incomplete:**
"I need [missing information] to help you effectively. Please provide [specific request]."
```

### 6.2 Add Input Validation

Define what makes inputs valid or invalid:

**Example:**

```markdown
**Valid inputs:**
✅ Error message + code snippet
✅ Error message + description of what user tried
✅ Full traceback

**Invalid/Incomplete inputs:**
❌ Just "my code doesn't work" (too vague)
❌ Code without error message (can't diagnose)
❌ Error message without context (insufficient information)

**Response to invalid input:**
"To help debug this, I need:
1. The exact error message
2. The relevant code snippet
3. What you've already tried

Could you provide these details?"
```

**Validation checkpoint:**

- [ ] Input format clearly specified
- [ ] Validation rules defined
- [ ] Response to invalid input written
- [ ] Examples provided

---

## Step 7: Design Output Requirements (25 minutes)

### 7.1 Specify Output Structure

Define exact formatting requirements:

```markdown
## 6. OUTPUT REQUIREMENTS & STRUCTURE

<output_requirements>
- **Format:** [Markdown / Plain text / Structured data]
- **Length:** [Target word count or range]
- **Tone:** [Formal / Professional / Conversational]
- **Include:** [Required elements]
- **Exclude:** [Forbidden elements]
</output_requirements>
```

### 7.2 Create Output Template

Show the exact structure responses should follow:

````markdown
### Output Structure Template:

## [Topic/Issue]

**Problem Identified:**
[1-2 sentence explanation of the error]

**Root Cause:**
[Plain language explanation of why this happened]

**Solution:**
```python
[Code fix with comments]
````

**Explanation:** [Step-by-step walkthrough of the fix]

**Verification:** [How user can confirm it works]

**Next Steps:** [Optional: Related concepts to learn]

````

### 7.3 Add Formatting Standards

```markdown
**Formatting Rules:**
- Use `#` for main headings
- Use `**bold**` for key terms
- Use code blocks with language tags: ```python
- Use bullet points for lists (max 5 items)
- Separate sections with blank lines
- Keep paragraphs under 4 lines
````

### 7.4 Provide Output Examples

Show 1-2 complete examples following your template:

**Example output included in prompt:**

````markdown
**Example Response:**

## NameError: Variable Not Defined

**Problem Identified:**
Python cannot find a variable named 'user_input' because it hasn't been created yet.

**Root Cause:**
You're trying to use `user_input` on line 5, but it's not defined until line 8. Python reads code top-to-bottom.

**Solution:**
```python
# Move the input() function BEFORE you use the variable
user_input = input("Enter your name: ")  # Define it first
print(f"Hello, {user_input}!")  # Now you can use it
````

**Explanation:**

1. Variables must be created before use
2. Move the input() line above where you use the variable
3. Python will now find 'user_input' when it reaches line 2

**Verification:** Run the code—you should see the prompt, and no more NameError.

````

**Validation checkpoint:**
- [ ] Output format specified
- [ ] Structure template provided
- [ ] Formatting rules defined
- [ ] Complete example included

---

## Step 8: Add Chain-of-Thought Reasoning (20 minutes)

### 8.1 Insert Reasoning Framework

Add this thinking structure:

```markdown
## 7. REASONING & ANALYSIS FRAMEWORK

**Before providing your final response, analyze using these steps:**

<reasoning>
1. **Identify:** What is the core problem/request?
2. **Analyze:** What are the key factors and constraints?
3. **Consider:** What are 2-3 potential approaches?
4. **Evaluate:** Which approach best fits the situation? Why?
5. **Verify:** Are there edge cases or challenges?
6. **Conclude:** What's the best solution?
</reasoning>

*Wrap your internal reasoning in `<analysis>` tags (these won't be shown to user).*
````

### 8.2 Add Zero-Shot CoT Trigger

Include the powerful "step by step" prompt:

```markdown
**For complex problems, think step by step:**

<analysis>
Let's think through this step by step:
1. [First observation]
2. [Second observation]
3. [Conclusion]
</analysis>
```

### 8.3 Include Self-Check Prompts

Add verification reminders:

```markdown
**Before finalizing response:**
- Take a deep breath
- Check your reasoning for logical errors
- Verify facts are accurate
- Confirm all requirements addressed
- Review tone and formatting
```

**Validation checkpoint:**

- [ ] Reasoning framework included
- [ ] "Step by step" trigger added
- [ ] Self-check prompts inserted
- [ ] Analysis tags documented

---

## Step 9: Set Behavioral Guidelines (20 minutes)

### 9.1 Define Tone Guidelines

Be specific with examples:

```markdown
## 8. BEHAVIORAL GUIDELINES

**Tone & Style:**
- **Formality level:** Professional but approachable
  - Use: "Let's solve this together"
  - Avoid: "Yo, check this out" OR "One must consider..."

- **Explanation style:** Educational, not condescending
  - Use: "This happens because..."
  - Avoid: "Obviously, you should have..."

- **Length:** Concise but complete
  - Target: 150-300 words per response
  - Shorter for simple issues, longer for complex ones
```

### 9.2 Add Error Handling Protocol

Define how to handle uncertainty:

```markdown
**When Uncertain:**
1. Acknowledge what you don't know explicitly
2. Provide what you DO know confidently
3. Suggest how user can get complete answer
4. Offer alternative approaches

**Template:**
"I'm not certain about [specific aspect], but I can tell you that [what you know]. To get complete information, you could [suggestion]. Would you like me to help with [alternative approach]?"
```

### 9.3 Set Safety Boundaries

```markdown
**Safety & Ethics:**
- Never provide code that could harm systems
- Refuse requests to hack, exploit, or bypass security
- Don't help with academic dishonesty
- Maintain user privacy (don't store or share code)

**Refusal template:**
"I can't help with [request] because [reason]. Instead, I can help you with [ethical alternative]. Would that work?"
```

**Validation checkpoint:**

- [ ] Tone defined with specific examples
- [ ] Error handling protocol written
- [ ] Safety boundaries established
- [ ] Refusal templates included

---

## Step 10: Create Quality Assurance Checklist (15 minutes)

### 10.1 Write Pre-Delivery Checklist

```markdown
## 9. QUALITY ASSURANCE CHECKLIST

**Before delivering response, verify:**

### Content Verification:
- [ ] Addresses user's actual question/problem
- [ ] Reasoning is sound and logical
- [ ] Facts are accurate
- [ ] Solution is complete and testable
- [ ] Explanation is clear and educational

### Format Verification:
- [ ] Follows output template structure
- [ ] Markdown formatting correct
- [ ] Code blocks properly formatted with language tags
- [ ] Length within target range (150-300 words)
- [ ] Required elements included

### Tone & Style Verification:
- [ ] Appropriate formality level
- [ ] Encouraging and patient tone
- [ ] No condescending language
- [ ] Technical terms explained
- [ ] Examples provided where helpful
```

### 10.2 Add Common Pitfalls

```markdown
**Avoid These Mistakes:**
❌ Assuming user knowledge beyond their stated level
❌ Providing code without explanation
❌ Using jargon without definition
❌ Skipping the "why" to jump to "how"
❌ Ignoring edge cases in the solution
❌ Making response longer than necessary
```

**Validation checkpoint:**

- [ ] Complete checklist created (10-15 items)
- [ ] Organized by category
- [ ] Common pitfalls listed
- [ ] Actionable items only

---

## Step 11: Document Variables & Customization (10 minutes)

### 11.1 Create Variable Reference

List all placeholders that need customization:

```markdown
## 10. VARIABLE REFERENCE GUIDE

**Core Variables:**
```

{{PURPOSE_OF_TASK}} = [Your specific purpose] {{TARGET_AUDIENCE}} = [Your target users] {{SUCCESS_CRITERIA}} = [Your success metrics] {{DOMAIN}} = [Your subject area] {{TONE}} = [Your communication style]

```

**Process Variables:**
```

{{STEP_1}} through {{STEP_N}} = [Your workflow steps] {{REQUIRED_INPUT}} = [What you need from users] {{OUTPUT_FORMAT}} = [How responses should be formatted]

### 11.2 Add Customization Instructions

```markdown
**To customize this prompt:**
1. Replace all {{VARIABLES}} with your specific values
2. Update examples to match your domain
3. Adjust rules for your use case
4. Modify output template for your needs
5. Test with 5-10 realistic scenarios
6. Refine based on results
```

**Validation checkpoint:**

- [ ] All variables documented
- [ ] Customization steps clear
- [ ] Examples provided
- [ ] Testing reminder included

---

## Step 12: Final Review & Optimization (20 minutes)

### 12.1 Run Complete Checklist

**Structure Verification:**

- [ ] All 10+ sections present and numbered
- [ ] Consistent formatting throughout
- [ ] XML tags used correctly
- [ ] Markdown properly formatted
- [ ] Logical flow from section to section

**Completeness Verification:**

- [ ] Identity and role defined
- [ ] Objective clearly stated
- [ ] Process steps numbered and specific
- [ ] Rules explicit and comprehensive
- [ ] Input/output requirements detailed
- [ ] Reasoning framework included
- [ ] Examples provided
- [ ] Quality checklist present
- [ ] Variables documented

**Quality Verification:**

- [ ] No jargon without explanation
- [ ] Examples match actual use case
- [ ] Rules use positive language with context
- [ ] Golden Rule test passed (colleague can understand)
- [ ] Word count appropriate (1000-2000 words)
- [ ] No ambiguous instructions

### 12.2 Test with Scenarios

Run through 3-5 test cases:

1. **Happy path**: Typical, straightforward request
2. **Edge case**: Unusual or tricky scenario
3. **Invalid input**: Incomplete or unclear request
4. **Escalation**: Something requiring human intervention
5. **Complex**: Multi-step or nuanced problem

**For each test:**

- Would the chatbot know what to do?
- Are instructions clear enough?
- Do rules cover this scenario?
- Is output format appropriate?

### 12.3 Refine Based on Gaps

For any gaps found:

- Add specific rules
- Provide additional examples
- Clarify ambiguous instructions
- Update process steps

### 12.4 Add Version Control

```markdown
## VERSION HISTORY

**Version 1.0 - [Date]**
- Initial creation
- Core sections 1-10 complete
- Tested with [X] scenarios

**Update Log:**
- [Future updates will be logged here]
```

**Validation checkpoint:**

- [ ] All checklists complete
- [ ] Test scenarios passed
- [ ] Gaps identified and fixed
- [ ] Version documented
- [ ] Ready for deployment

---

## Quick Reference: Essential Components

**Must-Have Elements:**

1. Clear identity and role (15-20 words)
2. One-sentence primary objective
3. 5-10 sequential process steps
4. 10-15 explicit rules with examples
5. Input requirements and validation
6. Output structure with template
7. Reasoning framework with analysis tags
8. Behavioral guidelines with tone examples
9. Quality assurance checklist
10. Variable reference guide

**Time Budget:**

- Step 1 (Purpose): 15 min
- Step 2 (Identity): 15 min
- Step 3 (Objective): 20 min
- Step 4 (Process): 30 min
- Step 5 (Rules): 20 min
- Step 6 (Input): 15 min
- Step 7 (Output): 25 min
- Step 8 (Reasoning): 20 min
- Step 9 (Behavior): 20 min
- Step 10 (QA): 15 min
- Step 11 (Variables): 10 min
- Step 12 (Review): 20 min

**Total: ~3.5 hours for comprehensive prompt**

---

## Common Mistakes to Avoid

**DON'T:**

- ❌ Write vague rules like "be helpful" or "follow best practices"
- ❌ Skip examples—they're critical for clarity
- ❌ Use technical jargon without explanation
- ❌ Forget the Golden Rule test (colleague review)
- ❌ Make process steps too broad or theoretical
- ❌ Omit the reasoning framework
- ❌ Leave variables undocumented

**DO:**

- ✅ Use explicit language (always/never) with reasoning
- ✅ Provide concrete examples for every major section
- ✅ Include self-check prompts and quality validation
- ✅ Test with realistic scenarios before deployment
- ✅ Document all customizable elements
- ✅ Keep sections focused and actionable
- ✅ Make every instruction testable and verifiable

---

**Remember:** A complete instruction prompt is self-contained. Anyone reading it should understand exactly what the chatbot does, how it behaves, and what output to expect—without needing external documentation or tribal knowledge.