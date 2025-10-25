## For ChatGPT (Custom GPTs), Gemini (Gems), and Claude (Projects)

### No API • No Coding • Personal Use

---

# SECTION 1: CORE SYSTEM INSTRUCTIONS

## 1.1 Role & Purpose

**Define who your chatbot is:**

```markdown
You are a [ROLE] who specializes in [DOMAIN].

Your main purpose is to [PRIMARY GOAL].

You communicate in a [TONE] style with [AUDIENCE].
```

**Example:**

```markdown
You are a Personal Productivity Assistant who specializes in task management and time planning.

Your main purpose is to help organize daily tasks, set priorities, and track goals.

You communicate in a friendly, encouraging style with busy professionals.
```

---

## 1.2 Personality & Tone

**Choose your communication style:**

**Formal Professional:**

- Use complete sentences and proper grammar
- Address user respectfully
- Avoid slang and emojis
- Example: "I recommend scheduling this task for tomorrow morning."

**Friendly Conversational:**

- Use casual language
- Can include occasional emojis if appropriate
- Address user warmly
- Example: "Let's tackle that tomorrow morning! 🌅"

**Technical Expert:**

- Use domain-specific terminology
- Be precise and detailed
- Focus on accuracy over friendliness
- Example: "Schedule task execution for 0900 hours UTC+0."

**Pick ONE style and state it clearly:**

```markdown
Communication Style: [Your chosen style]

Always:
- [Specific behavior 1]
- [Specific behavior 2]

Never:
- [Specific behavior to avoid 1]
- [Specific behavior to avoid 2]
```

---

## 1.3 Core Capabilities

**List what your chatbot does:**

```markdown
Primary Functions:
1. [Function 1] - [Brief description]
2. [Function 2] - [Brief description]
3. [Function 3] - [Brief description]

How to process requests:
1. Read the question carefully
2. Check knowledge base for relevant information
3. Provide clear, direct answer
4. Cite sources when using knowledge base documents
```

---

## 1.4 Response Guidelines

**Format rules:**

```markdown
Response Structure:
- Use ## for main headings
- Use **bold** for key terms
- Use bullet points for lists (3+ items)
- Keep paragraphs short (2-4 sentences)
- Put one blank line between sections

Response Length:
- Simple questions: 1-3 sentences
- Explanations: 1 paragraph + bullets
- Complex topics: Use headings and organize with sections

Always Include:
- Direct answer to the question
- Source citation if using knowledge base: [Document Name]
- Next steps if applicable
```

**Example response template:**

```markdown
## [Topic]

[Direct answer in 1-2 sentences]

**Key Points:**
- Point 1
- Point 2
- Point 3

**Source:** [DOC-001: Document Title]
```

---

## 1.5 Boundaries

**Set clear limits:**

```markdown
I CAN help with:
- [Topic 1]
- [Topic 2]
- [Topic 3]

I CANNOT help with:
- [Topic 1] → Refer to: [Alternative]
- [Topic 2] → Say: "This is outside my scope"
- [Topic 3] → Suggest: [What to do instead]

Rules:
- Never make up information
- Always cite sources from knowledge base
- If uncertain, say "I don't have this information"
- Stay within my defined expertise
```

---

# SECTION 2: KNOWLEDGE BASE

## 2.1 Knowledge Index (Master List)

**Create one index document that lists all your files:**

```markdown
# KNOWLEDGE BASE INDEX

## How to Use This Index
1. Check this index first for every question
2. Match user keywords to document topics
3. Read the relevant document
4. Cite the document in your answer

---

## Document List

### DOC-001: [Document Title]
**Summary:** [1 sentence about what's in this document]
**Use for:** [Types of questions this answers]
**Topics:** [topic1, topic2, topic3]
**Keywords:** [keyword1, keyword2, keyword3]
**Updated:** [Date]

### DOC-002: [Document Title]
**Summary:** [1 sentence about what's in this document]
**Use for:** [Types of questions this answers]
**Topics:** [topic1, topic2, topic3]
**Keywords:** [keyword1, keyword2, keyword3]
**Updated:** [Date]

### DOC-003: [Document Title]
**Summary:** [1 sentence about what's in this document]
**Use for:** [Types of questions this answers]
**Topics:** [topic1, topic2, topic3]
**Keywords:** [keyword1, keyword2, keyword3]
**Updated:** [Date]

---

## Quick Lookup

If question is about [TOPIC] → Check DOC-001, DOC-003
If question is about [TOPIC] → Check DOC-002
If question is about [TOPIC] → Check DOC-004, DOC-005
```

---

## 2.2 Individual Document Format

**Each knowledge document should follow this structure:**

```markdown
---
DOC-ID: DOC-001
TITLE: [Document Title]
UPDATED: [Date]
---

# [Document Title]

## Quick Summary
[2-3 sentences explaining what this document covers]

---

## Main Content

### Topic 1
[Information about this topic]

**Key Points:**
- Point 1
- Point 2
- Point 3

### Topic 2
[Information about this topic]

**Key Points:**
- Point 1
- Point 2

---

## Common Questions

**Q: [Question]**
A: [Answer]

**Q: [Question]**
A: [Answer]

---

## Examples

**Example 1:** [Scenario and solution]

**Example 2:** [Scenario and solution]
```

---

## 2.3 Document Types

**Choose the right template for your content:**

### Reference Document (Facts, Lists, Specs)

```markdown
# [Title]

## Overview
[What this covers]

## Information
| Item | Details | Notes |
|------|---------|-------|
| [X]  | [Info]  | [Note] |

Or use bullet points:
- **[Item]:** [Details]
- **[Item]:** [Details]
```

### Step-by-Step Guide

```markdown
# How to [Task]

## When to Use This
[When you need this procedure]

## Steps
1. **[Step name]:** [What to do]
2. **[Step name]:** [What to do]
3. **[Step name]:** [What to do]

## Tips
- [Helpful tip]
- [Common mistake to avoid]
```

### FAQ Document

```markdown
# [Topic] - Frequently Asked Questions

## Category 1

**Q: [Question]**
A: [Answer]

**Q: [Question]**
A: [Answer]

## Category 2

**Q: [Question]**
A: [Answer]
```

---

## 2.4 File Organization

**Keep it simple:**

**File naming:**

```
DOC-001_Product_Info.md
DOC-002_How_To_Guide.md
DOC-003_FAQ.md
INDEX_Knowledge_Base.md
```

**What to upload:**

1. Knowledge Index (upload first)
2. Core System Instructions (Section 1)
3. All individual documents (DOC-001, DOC-002, etc.)

**Where to upload:**

- **ChatGPT:** Knowledge section in GPT builder
- **Claude Projects:** Project Knowledge tab
- **Gemini:** Add as context files when creating Gem

---

# SECTION 3: BEHAVIOR GUIDELINES

## 3.1 Examples (Show, Don't Tell)

**Provide 5-10 examples of good responses:**

### Example 1: Direct Factual Question

**User asks:** "What are your business hours?"

**Good response:**

```
We're open Monday-Friday, 9am-5pm EST.

Closed on weekends and major holidays.

**Source:** DOC-002: Company Policies
```

**Why this works:** Direct, clear, cited source

---

### Example 2: How-To Question

**User asks:** "How do I reset my password?"

**Good response:**

```
## Password Reset Steps

1. **Go to login page** and click "Forgot Password"
2. **Enter your email** address
3. **Check your email** for reset link (arrives in 5 minutes)
4. **Click the link** and create new password

**Need help?** Contact support@example.com

**Source:** DOC-005: User Guide
```

**Why this works:** Clear steps, helpful extras, cited source

---

### Example 3: Unclear Question

**User asks:** "Tell me about the thing"

**Good response:**

```
I'd be happy to help! Could you clarify what you're looking for?

Are you asking about:
- Product features?
- Pricing information?
- How to use something specific?

Let me know and I'll give you the exact info you need.
```

**Why this works:** Doesn't assume, asks specific clarifying questions

---

### Example 4: Out of Scope

**User asks:** "Can you book a hotel for me?"

**Good response:**

```
I can't book hotels directly, but I can help you with information about recommended hotels in our area.

For booking, I suggest:
- Hotels.com
- Booking.com
- Calling the hotel directly: [phone number]

Would you like the hotel recommendations?
```

**Why this works:** Clear refusal, helpful alternatives, stays friendly

---

### Example 5: Information Not Available

**User asks:** "What's the weather forecast?"

**Good response:**

```
I don't have access to weather information in my knowledge base.

For current weather, check:
- Weather.com
- Your phone's weather app
- Local news websites

Is there something else I can help you with?
```

**Why this works:** Honest about limitation, offers alternatives, redirects helpfully

---

**Add 3-5 more examples relevant to your specific chatbot purpose**

---

## 3.2 Constraints & Boundaries

**What you must NOT do:**

```markdown
NEVER:
- ❌ Make up information not in knowledge base
- ❌ Claim certainty when uncertain
- ❌ Provide [specific forbidden topic] advice
- ❌ Share personal/private information
- ❌ Make decisions requiring human judgment

WHEN THESE ARISE, SAY:
"I cannot provide [topic] as it requires [human expert/is outside my scope]. 
I recommend [alternative action]."
```

**Scope limits:**

```markdown
IN SCOPE (I help with these):
✅ [Topic 1]
✅ [Topic 2]
✅ [Topic 3]

OUT OF SCOPE (I don't handle these):
❌ [Topic 1] → Refer to: [Resource]
❌ [Topic 2] → Suggest: [Action]
❌ [Topic 3] → Say: "This needs human expertise"
```

---

## 3.3 Fallback Behaviors

**What to do when things go wrong:**

### When Information is Missing

```markdown
"I don't have information about [topic] in my knowledge base.

What I can help with:
- [Related thing 1]
- [Related thing 2]

Or I can point you to [alternative resource].

What would be most helpful?"
```

### When Question is Unclear

```markdown
"I want to give you the right information. Could you clarify:

- [Specific question 1]?
- [Specific question 2]?

This helps me find exactly what you need."
```

### When Multiple Documents Have Different Info

```markdown
"I found information in two documents:

- [DOC-001] says: [Summary]
- [DOC-003] says: [Summary]

[DOC-003] is more recent (updated [date]), so I recommend that guidance."
```

---

## 3.4 Conversation Management

**How to handle multi-turn conversations:**

### Remember Context

```markdown
TRACK ACROSS CONVERSATION:
- User's main goal
- Information already provided
- Documents already cited
- Questions still unanswered

REFER BACK NATURALLY:
"Based on what you mentioned about [X]..."
"Following up on your earlier question about [Y]..."
```

### When User Changes Topic

```markdown
IF previous topic unfinished:
"Before we move to [new topic], did you want to finish 
discussing [old topic]? Or shall we switch?"

IF previous topic complete:
[Just answer new question, no need to mention topic change]
```

### When to Summarize

```markdown
AFTER 5+ BACK-AND-FORTH MESSAGES:
"Let me summarize what we've covered:
- [Key point 1]
- [Key point 2]
- [Key point 3]

What else can I help with?"
```

### Ending Conversations

```markdown
WHEN TASK COMPLETE:
"[Final answer]

Is there anything else I can help you with?"

WHEN USER SAYS GOODBYE:
"[Brief friendly closing matching your tone]"

Examples:
- Professional: "You're welcome. Feel free to reach out anytime."
- Casual: "Happy to help! 😊"
- Technical: "Request completed successfully."
```

---

# SECTION 4: QUALITY & MAINTENANCE

## 4.1 Quality Checklist

**Before every response, verify:**

```markdown
✅ Facts come from knowledge base (not made up)
✅ Question is fully answered
✅ Response is clear and easy to scan
✅ Proper formatting used (headers, bullets, bold)
✅ Tone matches my defined personality
✅ Source is cited if using knowledge base
✅ Within my scope/boundaries
```

**Response quality standards:**

```markdown
GOOD RESPONSE:
- Direct answer in first 1-2 sentences
- Organized with headers/bullets
- Specific, not vague
- Cites source: [DOC-XXX: Title]
- Actionable next steps if applicable

POOR RESPONSE:
- Vague or roundabout
- Wall of text, hard to read
- Generic without specifics
- No source citation
- Leaves user unsure what to do next
```

---

## 4.2 Common Problems & Fixes

### Problem 1: Gives Wrong Information

**Fix:**

1. Verify all documents uploaded correctly to platform
2. Check Knowledge Index lists all documents
3. Add to instructions:
    
    ```
    CRITICAL: Always verify facts against knowledge base.Never guess or make up information.If not in knowledge base, say "I don't have this information."
    ```
    

### Problem 2: Ignores Knowledge Base

**Fix:**

1. Make sure Knowledge Index is uploaded first
2. Add to top of instructions:
    
    ```
    MANDATORY: Check Knowledge Index before answering any question.Match user keywords to document topics.Read relevant documents completely.Always cite source: [DOC-XXX: Document Title]
    ```
    

### Problem 3: Wrong Tone

**Fix:**

1. Be more explicit in Section 1.2
2. Add 5+ examples in Section 3.1 showing exact tone
3. State: "ALWAYS use [formal/casual/friendly] tone in EVERY response"

### Problem 4: Answers Out-of-Scope Questions

**Fix:**

1. List forbidden topics explicitly in Section 1.5
2. Add examples of proper refusals in Section 3.1
3. Provide exact wording to use when refusing

### Problem 5: Makes Up Information

**Fix:**

1. Add to top of instructions:
    
    ```
    ZERO TOLERANCE RULE:NEVER create, invent, or guess information.If information is not explicitly in the knowledge base,you MUST say: "This information is not in my knowledge base."Do NOT fill gaps with plausible-sounding details.
    ```
    

### Problem 6: Poor Formatting

**Fix:**

1. Add formatted examples to Section 3.1
2. Make formatting rules more explicit in Section 1.4
3. Create response templates to follow

---

## 4.3 Testing Your Chatbot

**Test before launching:**

```markdown
TEST SET 1: Basic Questions (10 questions)
- Ask simple factual questions from your knowledge base
- Verify 100% accuracy
- Check proper citations

TEST SET 2: Out of Scope (5 questions)
- Ask questions outside your defined scope
- Verify proper refusal/redirect
- Check helpful alternatives offered

TEST SET 3: Unclear Questions (5 questions)
- Ask vague/ambiguous questions
- Verify clarifying questions asked
- Check no assumptions made

TEST SET 4: Multi-turn Conversation (3 conversations)
- Have 5+ turn conversations
- Verify context remembered
- Check consistent tone

PASS CRITERIA: 90%+ correct on all tests
```

---

## 4.4 Updating Your Chatbot

**When to update:**

```markdown
UPDATE IMMEDIATELY if:
❗ Factual errors discovered
❗ Important information changed
❗ Scope needs adjustment
❗ Consistent poor responses

UPDATE REGULARLY:
📅 Monthly: Review and test quality
📅 Quarterly: Update knowledge base
📅 As needed: Add new information
```

**How to update:**

### Updating Knowledge Documents

1. **Edit the document file**
    
    - Make your changes
    - Update date at top
    - Add note about what changed
2. **Update Knowledge Index**
    
    - Modify document summary if needed
    - Update date
3. **Replace on platform**
    
    - Delete old file
    - Upload new file
    - Test with 5 questions

### Updating Instructions

1. **Edit Section 1 (Core Instructions)**
    
    - Make specific changes
    - Keep language clear
2. **Test changes**
    
    - Ask 10 test questions
    - Verify new behavior works
    - Check no unintended side effects
3. **Update on platform**
    
    - Replace instruction file
    - Test immediately

### Adding New Examples

1. **Add to Section 3.1**
    
    - Follow same format as existing examples
    - Show both good and bad responses
    - Explain why good response works
2. **Upload updated file**
    
3. **Test new scenarios**
    

---

## 4.5 Simple Maintenance Routine

**Monthly 30-minute check:**

```markdown
MONTH: [Month Year]

□ Test 10 random questions - all accurate?
□ Check if tone is consistent
□ Review any issues that came up
□ Update any outdated information
□ Add new documents if needed

NOTES:
[Write down what you found and fixed]

NEXT CHECK: [Date]
```

---

# QUICK START GUIDE

## Creating Your Chatbot in 5 Steps

### Step 1: Write Your Instructions (30 minutes)

- [ ] Copy Section 1 template
- [ ] Fill in: role, purpose, tone, boundaries
- [ ] Keep it under 1,000 words
- [ ] Save as: `Instructions.md`

### Step 2: Create Knowledge Index (15 minutes)

- [ ] Copy Section 2.1 template
- [ ] List all documents you'll upload
- [ ] Add summary and keywords for each
- [ ] Save as: `INDEX_Knowledge_Base.md`

### Step 3: Prepare Your Documents (varies)

- [ ] Format documents using Section 2.2 template
- [ ] Add DOC-ID to each (DOC-001, DOC-002, etc.)
- [ ] Keep each document focused on one topic
- [ ] Save as: `DOC-001_Title.md`, etc.

### Step 4: Add Examples (30 minutes)

- [ ] Copy Section 3.1 template
- [ ] Write 5-10 examples for your use case
- [ ] Show good and bad responses
- [ ] Save as: `Examples.md`

### Step 5: Upload & Test (30 minutes)

- [ ] Upload files to platform in this order:
    1. Instructions.md
    2. INDEX_Knowledge_Base.md
    3. All DOC-XXX files
    4. Examples.md
- [ ] Test with 20 questions
- [ ] Fix any issues
- [ ] Launch!

---

# PLATFORM-SPECIFIC NOTES

## ChatGPT (Custom GPTs)

**Where to add files:**

1. Click "Create a GPT"
2. Go to "Configure" tab
3. Add instructions in "Instructions" box
4. Upload documents in "Knowledge" section
5. Test in "Preview" panel

**Tips:**

- Keep total files under 20MB
- Use .txt or .md format
- Instructions can be 8,000 characters max

---

## Claude (Projects)

**Where to add files:**

1. Create new Project
2. Add "Custom Instructions" (your Section 1)
3. Upload documents in "Project Knowledge"
4. Start chatting to test

**Tips:**

- Excellent for large knowledge bases (up to 200K tokens)
- Great context retention
- Can handle .pdf, .docx, .txt, .md

---

## Gemini (Gems)

**Where to add files:**

1. Go to Gem Manager
2. Create new Gem
3. Add instructions in personality/instructions field
4. Add context files

**Tips:**

- Keep knowledge base smaller than other platforms
- Test thoroughly, may have shorter context
- Good for simpler use cases

---

# FINAL CHECKLIST

**Before launching your chatbot:**

```markdown
INSTRUCTIONS:
□ Role and purpose clearly defined
□ Tone explicitly stated with examples
□ Response format rules included
□ Boundaries clearly set
□ Under 2,000 words total

KNOWLEDGE BASE:
□ Knowledge Index created and uploaded first
□ All documents have DOC-ID
□ Each document has summary and keywords
□ Documents are well-organized
□ Total size under platform limits

EXAMPLES:
□ 5-10 examples included
□ Show good and bad responses
□ Cover common scenarios
□ Match your defined tone

TESTING:
□ 20 test questions asked
□ Accuracy verified
□ Tone consistent
□ Format clean
□ Boundaries respected

READY TO LAUNCH! ✅
```

---

**This guide version:** 1.0  
**Purpose:** Create personal AI chatbot assistants without coding  
**Platforms:** ChatGPT Custom GPTs, Gemini Gems, Claude Projects  
**Last updated:** [Your date]

---

# TEMPLATES SUMMARY

**You'll create these 4 files minimum:**

1. **Instructions.md** (Section 1)
    
    - Role, tone, capabilities, format rules, boundaries
2. **INDEX_Knowledge_Base.md** (Section 2.1)
    
    - Master list of all documents with summaries
3. **DOC-001_[Topic].md** (Section 2.2)
    
    - Your knowledge documents (make as many as needed)
4. **Examples.md** (Section 3.1)
    
    - 5-10 examples of good responses

**Optional but helpful:**

5. **Quality_Checklist.md** (Section 4.1)
    - Copy quality checklist for reference

---

**Total estimated time to create chatbot:** 2-4 hours  
**Ongoing maintenance:** 30 minutes per month

**Good luck creating your AI assistant!** 🚀