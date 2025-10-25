---
title: "What is AI Prompt Chaining?"
source: "https://botpress.com/blog/what-is-ai-prompt-chaining"
author:
published:
created: 2025-10-14
description: "Use AI prompt chaining to complete complex, multi-step workflows with generative AI."
tags:
  - "clippings"
---
![Abstract illustration with colorful shapes](https://cdn.prod.website-files.com/637e5037f3ef83b76dcfc8f9/6855d026cf7a6b6b5da57d08_Variation%201%20-%20Template-3.webp)

Use AI prompt chaining to complete complex, multi-step workflows with generative AI.

Oct 1, 2024

Written by

![Sarah Chudleigh](https://cdn.prod.website-files.com/637e5037f3ef83b76dcfc8f9/680fd71b3171d1c8437a9def_SarahChudleighHeadshot.webp)

Sarah Chudleigh

Researcher & AI Content Lead

Table of Contents

[What is prompt chaining?](https://botpress.com/blog/#what-is-prompt-chaining)

[Examples of Prompt Chaining](https://botpress.com/blog/#examples-of-prompt-chaining)

[When should I use prompt chaining?](https://botpress.com/blog/#when-should-i-use-prompt-chaining)

[Prompting Chaining vs Chain-of-Thought Prompting](https://botpress.com/blog/#prompting-chaining-vs-chain-of-thought-prompting)

[Build a Custom AI Agent](https://botpress.com/blog/#build-a-custom-ai-agent)

[FAQs](https://botpress.com/blog/#faqs)

Summary

- Prompt chaining is a technique that breaks complex tasks into smaller, linked prompts, guiding an AI through each step to achieve high-quality, detailed results.
- Unlike asking one big question, prompt chaining lets you dive deeper by refining AI outputs step by step, making it ideal for tasks like content creation, planning, or research.
- Chain-of-thought prompting differs from prompt chaining because it asks the AI to reason through steps in a single response rather than across multiple prompts.
- The key to effective prompt chaining is mapping out your goal into smaller questions and ensuring each prompt logically connects to the next to build cohesive output.

[GPT chatbots](https://botpress.com/blog/what-is-a-gpt-chatbot) and [LLM agents](https://botpress.com/blog/llm-agents) like [ChatGPT](https://botpress.com/blog/chatgpt) are great at some tasks, but... not at everything.

Luckily, there are prompting strategies you can use to improve your generative AI workflows.

**Prompt chaining** is a technique you can use for any tasks that require multiple in-depth steps. It involves breaking down the task into smaller steps, and using the AI output to inform the next steps.

Let’s break it down:

## What is prompt chaining?

Prompt chaining is a [natural language processing (NLP)](https://botpress.com/blog/how-does-ai-relate-to-natural-language-processing) technique that uses a series of prompts to tackle each step of a multi-step task.

Each prompt in the chain handles one part of the task, and the AI output is used to inform the subsequent steps.

![What is prompt chaining? Prompt chaining is a natural language processing (NLP) technique that uses a series of prompts to tackle each step of a multi-step task. Each prompt in the chain handles one part of the task, and the AI output is used to inform the subsequent steps.](https://cdn.prod.website-files.com/637e5037f3ef83b76dcfc8f9/686ffb12f6a35cf90d66d7d4_prompt%201.webp)

What is prompt chaining? Prompt chaining is a natural language processing (NLP) technique that uses a series of prompts to tackle each step of a multi-step task. Each prompt in the chain handles one part of the task, and the AI output is used to inform the subsequent steps.

## Examples of Prompt Chaining

### Content Creation

**Prompt 1:** Create an outline for an employee briefing about how AI automation can improve productivity.

**Output**:

1. Introduction: What is AI automation?
2. Benefits of AI automation in the workplace
3. How AI can streamline repetitive tasks
4. AI tools that can enhance productivity
5. Addressing concerns and challenges with AI automation
6. Conclusion and next steps

**Prompt 2:** What are common concerns and challenges *(i.e. #5 from the above output)* for employees adopting AI automation?

**Output**:

1. Job security
2. Skill gaps
3. Trust and transparency
4. Data security and privacy

**Prompt 3:** What are common data security concerns for employees adopting AI automation and how can we mitigate them?

Using this technique, you can prompt a [conversational AI](https://botpress.com/blog/how-does-conversational-ai-work) tool to generate all the ideas and content that you want to include in your briefing.

If you asked a generative AI chatbot for this briefing outright, it’s likely not going to deliver the same length or level of quality as it will when broken down into individual steps.

### Strategic Planning

Say you want to ask an AI chatbot to generate an outline of a marketing plan for your hotel business.

**Prompt 1**: Generate an outline of a strategic marketing plan.

**Output**:

1. Executive summary
2. Market research and analysis
3. Marketing goals and objectives
4. Target audience
5. Marketing strategies
6. Tactics and implementation
7. Budget and resources
8. Measurement and analytics
9. Conclusion

**Prompt 2**: What are examples of marketing goals and objectives?

**Output**:

1. Increase brand awareness
2. Generate leads
3. Boost sales and revenue
4. Improve customer retention
5. Expand marketing reach

**Prompt 3**: What are the best ways to generate leads for a hotel?

**Output**:

1. Invest in an AI chatbot to efficiently book rooms and upsell services
2. Partner with local businesses for referral services
3. Offer special promotions and packages
4. Optimize your website for SEO

**Prompt 4**: Can you explain step-by-step how I can implement a [chatbot for hotels](https://botpress.com/blog/chatbots-for-hotels)?

By asking for information about each step and sub-step of the generated outline, you can easily build out a draft of your strategic marketing plan.

## When should I use prompt chaining?

Prompt chaining is best suited for complex, multi-step tasks. If each step of a task needs to be thought through, it’ll always be beneficial to break it into smaller tasks.

And if you’re starting from zero, getting ideas and content through each step of your prompt chain is the easiest way to build cohesive output.

![When to use prompt chaining: building a business strategy or a new business, developing an AI sales strategy or AI sales funnel, calculating the ROI of an AI chatbot, generating detailed content, designing a training program](https://cdn.prod.website-files.com/637e5037f3ef83b76dcfc8f9/686ffbb115663409f91b25bd_prompt%202.webp)

When to use prompt chaining: building a business strategy or a new business, developing an AI sales strategy or AI sales funnel, calculating the ROI of an AI chatbot, generating detailed content, designing a training program

A few examples of tasks that should employ prompt chaining include:

- Building a business strategy for a new business
- Developing an [AI sales](https://botpress.com/blog/how-to-use-ai-for-sales) strategy or [AI sales funnel](https://botpress.com/blog/ai-sales-funnel)
- Generating detailed content, like a report or a briefing
- Designing a training program for new employees
- [Calculating the ROI of your AI chatbot](https://botpress.com/blog/chatbot-roi)

These tasks require multiple steps that are better generated one at a time than all at once.

## Prompting Chaining vs Chain-of-Thought Prompting

Though similar in name, prompt chaining and chain-of-thought prompting are different prompting strategies to improve generative AI output.

### Chain-of-Thought Prompting

With [chain-of-thought prompting](https://botpress.com/blog/chain-of-thought), a user guides the AI to explain the reasoning behind its answer in a single response. This prompts the AI to walk through each step of the problem-solving process, but it’s accomplished in a single prompt and response.

For example, a chain-of-thought prompt can be accomplished in one message:

*"An HR team needs to review 5 employee performance evaluations. Each will take 30 minutes and they need 15 minutes to prep beforehand. Senior evals will require an extra 10 minutes each. How long will it take to complete 5 senior and 25 junior evals? Break down your reasoning step by step."*

### Prompt Chaining

With prompt chaining, the task is broken into separate steps with multiple prompts, each building on the previous result. This helps structure and guide the AI through a complex task that likely involves reasoning.

The first prompt might look like:

**Prompt**: Identify the main challenges a company might face when transitioning to remote work.

**Output**:

- Communication gaps
- Maintaining productivity
- Technology infrastructure
- Employee engagement

The next prompts might dive further into these concepts. For example:

**Prompt**: Please tell me how a company can find solutions to communication gaps when transitioning to remote work.

After the next round of output, the next link of the chain may be:

**Prompt**: What are the common challenges companies face when they adopt these solutions?

So while the two are similar, they take different approaches to extracting the most in-depth and relevant content from generative AI tools.

## Build a Custom AI Agent

Botpress is the only AI agent platform that allows you to build truly autonomous agents.

The open and flexible Botpress Studio allows for endless use cases across industries, from HR to lead generation. Our pre-built integration library and extensive tutorials let users easily build AI agents from scratch.

[Start building today.](https://sso.botpress.cloud/registration) It’s free.

Or [contact our sales team](https://botpress.com/contact-us).

## FAQs

### 1\. How is prompt chaining different from simply using multiple prompts?

Prompt chaining is different from simply using multiple prompts because it intentionally sequences prompts so that each one builds on the output of the previous, creating a logical progression. In contrast, using multiple prompts without chaining may not maintain continuity or task relevance between them.

### 3\. How do I plan an effective prompt chain before I start?

To plan an effective prompt chain, break down the overall task into discrete, manageable steps that logically depend on each other, then write prompts for each step that clearly build on the previous output to guide the AI toward your end goal.

### 4\. How do I decide the right length or depth of a prompt chain?

The right length or depth of a prompt chain depends on the complexity of the task; complex tasks may require more granular prompts to maintain accuracy, while simpler tasks can be completed with fewer, broader prompts to stay efficient.

### 5\. How can I evaluate the effectiveness of a prompt chain?

You can evaluate the effectiveness of a prompt chain by reviewing whether the final output meets your intended goal. If the chain fails to stay on track or produce high-quality results, revise individual prompts or their sequence.