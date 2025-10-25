Prompt Chain for Creating Your AI Chatbot Assistant
How to Use This Prompt Chain
Send these prompts in order. Wait for each response before sending the next one.

 ---
### 📤 INITIAL SETUP
**First, upload to the chat:**
1. The complete guide (the document I just created)
2. Any knowledge base documents you have (optional)
3. Any existing prompts or notes about what you want (optional)
#### ---
## PROMPT 1: Discovery & Planning

```
I want to create a personal AI chatbot assistant using the guide I've uploaded.

Please analyze the guide and ask me these questions:

1. What is the main purpose of my chatbot? (What should it help me with?)
2. What tone should it use? (Formal professional / Friendly conversational / Technical expert / Other)
3. Who is the target user? (Just me / My team / General audience)
4. What topics should it cover? (List main areas)
5. What topics should it NOT cover? (What's out of scope?)
6. Do I have any knowledge base documents attached? If yes, briefly summarize what's in them.

After I answer, create a brief project plan showing:
- Chatbot role and purpose (2-3 sentences)
- Tone and style
- Scope (in/out)
- List of 4 documents you'll create for me

Wait for my answers before proceeding.
```

**⏸️ STOP - Answer the questions, then continue**
---
## PROMPT 2: Draft All 4 Documents

```
Based on my answers, please create 200-400 word DRAFTS for each of these 4 documents:

1. **Instructions.md** - Core system instructions (Section 1 from guide)
2. **INDEX_Knowledge_Base.md** - Knowledge index (Section 2.1 from guide)
3. **DOC-001_[Topic].md** - First knowledge document (Section 2.2 from guide)
4. **Examples.md** - Behavior examples (Section 3.1 from guide)

For each draft:
- Follow the templates in the guide
- Use my specific requirements from Prompt 1
- Keep it concise (200-400 words each)
- Show the structure and main content
- Mark sections that will be expanded later with [TO BE EXPANDED]

Present all 4 drafts so I can review before you expand them.
```

**⏸️ STOP - Review drafts and provide feedback if needed, then continue**

---

## PROMPT 3: Expand Document 1 (Instructions)

```
Now expand Document 1 (Instructions.md) into its COMPLETE, FINAL version.

Follow Section 1 of the guide exactly:
- 1.1 Role & Purpose
- 1.2 Personality & Tone
- 1.3 Core Capabilities
- 1.4 Response Guidelines
- 1.5 Boundaries

Requirements:
- Use all templates from the guide
- Be specific and detailed
- Include all formatting rules
- Add my specific requirements
- Make it ready to upload directly to ChatGPT/Claude/Gemini
- Target length: 800-1,500 words

Please write the complete Instructions.md file now.
```

**⏸️ STOP - Review expanded document, then continue**

---

## PROMPT 4: Expand Document 2 (Knowledge Index)

```
Now expand Document 2 (INDEX_Knowledge_Base.md) into its COMPLETE, FINAL version.

Follow Section 2.1 of the guide exactly:
- How to Use This Index
- Document Registry (list all documents)
- Retrieval Strategy
- Quick Lookup Table

Requirements:
- List ALL knowledge documents (including any I attached)
- Include complete metadata for each (summary, topics, keywords, use-when)
- Add clear retrieval instructions
- Create keyword mapping table
- Make it ready to upload
- Target length: 400-800 words depending on number of documents

Please write the complete INDEX_Knowledge_Base.md file now.
```

**⏸️ STOP - Review expanded document, then continue**

---

## PROMPT 5: Expand Document 3 (Knowledge Documents)

```
Now expand Document 3 (DOC-001_[Topic].md) into its COMPLETE, FINAL version.

[If I attached knowledge base files, use that content]
[If I didn't attach files, create a useful example document based on my chatbot purpose]

Follow Section 2.2 of the guide exactly:
- Document metadata header
- Quick Summary
- Main Content (organized with headers)
- Common Questions
- Examples

Requirements:
- Use the appropriate document type template (Reference/Guide/FAQ)
- Include DOC-ID: DOC-001
- Well-organized with clear sections
- Practical and useful content
- Make it ready to upload
- Target length: 600-1,200 words

Please write the complete DOC-001 file now.

[After this is done, if I have more documents to create, I'll ask you to create DOC-002, DOC-003, etc.]
```

**⏸️ STOP - Review expanded document, then continue**

---

## PROMPT 6: Expand Document 4 (Examples)

```
Now expand Document 4 (Examples.md) into its COMPLETE, FINAL version.

Follow Section 3 of the guide exactly:
- 3.1 Examples (5-10 scenarios with good/bad responses)
- 3.2 Constraints & Boundaries
- 3.3 Fallback Behaviors
- 3.4 Conversation Management

Requirements:
- Create 5-10 realistic examples for my specific use case
- Show both GOOD and POOR responses for comparison
- Include examples for: factual questions, unclear questions, out-of-scope, missing info
- Match my defined tone perfectly
- Add specific constraint rules
- Include fallback templates
- Make it ready to upload
- Target length: 1,000-1,500 words

Please write the complete Examples.md file now.
```

**⏸️ STOP - Review expanded document, then continue**

---

## PROMPT 7: Create Additional Knowledge Documents (If Needed)

```
[Only use this if you have more knowledge to add]

I need [NUMBER] more knowledge documents.

For each one, create:
- DOC-00X_[Topic].md following Section 2.2 template
- Complete metadata header
- Full content with examples
- Add to the Knowledge Index

Topics for additional documents:
1. [Topic name and brief description]
2. [Topic name and brief description]
3. [Topic name and brief description]

Please create these documents one at a time, starting with DOC-002.
```

**⏸️ STOP - Review each document before requesting the next**

---

## PROMPT 8: Final Review & Package

```
Please do a final review and create:

1. **Upload Checklist** - List all files in the order I should upload them
2. **Quick Test Questions** - Give me 10 test questions to verify the chatbot works correctly
3. **Platform-Specific Instructions** - Tell me exactly how to upload these to [ChatGPT/Claude/Gemini - specify which one]
4. **File Summary** - Brief description of what each file does

Then provide all 4 (or more) complete files in a format I can easily copy/paste.
```

---

## PROMPT 9: Platform Setup Help (Optional)

```
I'm ready to upload to [ChatGPT / Claude / Gemini].

Please give me step-by-step instructions for:
1. Where exactly to paste/upload each file
2. Settings I should configure
3. How to test it properly
4. Common issues to watch for on this platform

Walk me through the process.
```

---

## PROMPT 10: Testing & Refinement (Optional)

```
I've uploaded everything and tested with these results:
[Describe what worked and what didn't]

Please help me:
1. Diagnose the issues
2. Fix the instructions/documents
3. Provide updated versions of any files that need changes

[Then test again and repeat if needed]
```

---

# 🎯 QUICK START VERSION (All-in-One)

**If you want everything faster, use this single prompt instead:**

```
I want to create a personal AI chatbot assistant using the uploaded guide.

My chatbot details:
- Purpose: [What it should help with]
- Tone: [Formal/Casual/Technical]
- Target user: [Who uses it]
- Topics to cover: [List]
- Topics to avoid: [List]
- Platform: [ChatGPT/Claude/Gemini]

Please:
1. Create 200-400 word drafts of all 4 required documents
2. Show me the drafts for review
3. After I approve, expand each document to full length one by one
4. Follow all templates from the guide
5. Make everything ready to upload directly

Start with the drafts of all 4 documents.
```

---

# 📋 CHECKLIST: What You'll Get

After completing the prompt chain, you'll have:

```
✅ Instructions.md (800-1,500 words)
   - Complete core system instructions
   - Ready to upload

✅ INDEX_Knowledge_Base.md (400-800 words)
   - Master document list
   - Retrieval strategy

✅ DOC-001_[Topic].md (600-1,200 words)
   - First knowledge document
   - Properly formatted

✅ DOC-002, DOC-003... (if needed)
   - Additional knowledge documents
   - Each with full content

✅ Examples.md (1,000-1,500 words)
   - Behavior examples
   - Constraints and fallbacks

✅ Upload instructions for your platform

✅ Test questions to verify it works

TOTAL: 4-6 files ready to create your chatbot
```

---

# 💡 TIPS

**Before starting:**

- Have a clear idea of your chatbot's purpose
- Gather any existing documents you want to include
- Decide which platform you'll use (ChatGPT/Claude/Gemini)
- Set aside 1-2 hours for the full process

**During the process:**

- Review each draft before asking for expansion
- Provide specific feedback if something isn't right
- Don't rush - quality matters more than speed
- Test with real questions at the end

**After creation:**

- Test thoroughly before relying on it
- Keep the source files for future updates
- Review monthly and update as needed
- Adjust based on actual usage

---

**Estimated time:**

- Prompt chain (step by step): 90-120 minutes
- Quick start version: 45-60 minutes
- Testing and refinement: 30 minutes

**Total:** 2-3 hours for a complete, working chatbot assistant 🎉