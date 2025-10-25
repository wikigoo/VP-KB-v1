---
title: "PromptHub Blog: Prompt Chaining Guide"
source: "https://www.prompthub.us/blog/prompt-chaining-guide"
author:
  - "[[Dan Cleary]]"
published: 2001-09-12
created: 2025-10-14
description: "Learn how prompt chaining can boost LLM performance by breaking large tasks into manageable steps. Real-world prompt chaining examples, the latest research, and actionable tips."
tags:
  - "clippings"
---
## Prompt Chaining Guide

Last updated on

August 12, 2025

Robert C. Martin, a prominent engineer, famously said "Functions should do one thing. They should do it well. They should do it only." The same applies to prompt engineering.

Prompts should do one thing. They should do it well. They should do it only.

Often, we'll see teams that are trying to cram 4 or 5 instructions into a single prompt and getting poor results. A better approach is to break down larger prompts into multiple, smaller ones, creating dynamic prompt chains, which recent research shows outperform larger prompts (more on this below).

Prompt chaining allows for more granular control over outputs by enabling the model to give its full attention to each subtask in the chain.

We'll explore the latest research on prompt chaining, why it's effective, how it compares to traditional prompting, and provide a few examples of prompt chains.

## What is prompt chaining

Prompt chaining is a prompt engineering method where a task is broken into a sequence of smaller subtasks, each handled by its own prompt.

Prompt chaining can be implemented in various ways, including through other prompt engineering methods like automatic [chain-of-thought prompting](https://prompthub.us/blog/chain-of-thought-prompting-guide), [least-to-most prompting](https://www.prompthub.us/blog/least-to-most-prompting-guide), and [self-consistency prompting](https://www.prompthub.us/blog/self-consistency-and-universal-self-consistency-prompting).

For example, in a text summarization task, you might create a prompt chain to:

1. Create an initial draft summary
2. Critique the summary
3. Check the summary for factual inaccuracies
4. Produce a refined summary based on the critiques and feedback

Each of these steps would be handled by its own prompt, allowing the model to focus entirely on one subtask at a time, improving overall output quality.

Hey everyone, how's it going? This is Dan here. Hope everyone's doing well on this Friday. We're going to talk today about prompt chaining, and we’ll go over the basics of what prompt chaining is, when to use it, how to use it, step-by-step, with examples. We'll also spend some time looking at a recent research paper that compared prompt chaining against what they called stepwise prompting—essentially one big prompt versus a chain of prompts.

To kick things off, I love this quote from Robert C. Martin, a prominent software engineer: "Functions should do one thing, they should do it well, and they should do it only." I think you can apply the same thinking to prompts. We often see teams getting into trouble when they try to have prompts do too many things at once, which can lead to worse outcomes, especially when these features are shipped to production.

So, in terms of what prompt chaining is, think of it as a prompt engineering method—a tool in your toolbelt where you can take a large task and break it into smaller tasks, each with a prompt to handle that task. Many well-known methods like Chain of Thought prompting, self-consistency, and least-to-most prompting leverage multiple prompts in their methodologies.

A quick example would be summarization: create an initial draft, critique the summary, check for inaccuracies, and produce a refined draft. Prompt chaining helps gain more reasoning out of the model. Some benefits include increased focus—each subtask gets the model's full attention, leading to higher-quality outputs, easier-to-understand prompts for teams, and better conciseness. It can apply to almost any task.

When to use prompt chaining? It might be overkill in some cases, but ask these questions: Does my task involve multiple instructions? Am I asking the model to do multiple things? Am I transforming data in multiple ways? Is my current approach not cutting it? Does the model seem to lose focus or context? If yes to any of these, consider prompt chaining.

Here's a data extraction use case: extracting relevant data (like revenue and user engagement), cleaning the data, analyzing it for trends, and creating a visualization. Breaking it into steps helps ensure success at each point and allows you to troubleshoot where necessary.

Three steps to setting up prompt chaining: 1. Break the problem down into subtasks—use LLMs to help. 2. Think about the handoff between steps—what does the output shape look like? 3. Iterate rapidly—test different versions of the prompt and the chain structure.

You can try this with our prompt chaining feature, which is available even on the free plan.

In a recent study, they tested prompt chaining versus a "mega prompt." In the chain, there was a drafting prompt to create the initial draft, a critiquing prompt to give feedback, and a refining prompt to generate the final output. This was compared to stepwise prompting, where all instructions were in a single prompt. They used BBC articles from the IntrSum dataset for summarization.

The results showed that overall, chaining produced better results than stepwise prompts. Even more interesting, the initial drafts from chained prompts performed as well as the final drafts from stepwise prompts. This suggests that in stepwise prompting, the model might leave room for refinement later.

Prompt chaining tends to be more effective with more advanced models (like GPT-4 compared to GPT-3.5). However, there are some drawbacks, like increased complexity and potentially higher costs due to the length of the output and the need for multiple API calls.

You can start experimenting with prompt chaining on PromptHub’s free plan. It’s a great way to see if you get better results for your use case. That’s it for today, thanks!

## Benefits of prompt chaining

1. **Increased focus:** By breaking down monolithic prompts into prompt chains with focused sub-prompts, the model can give all of its attention to one task at a time.
2. **Higher quality outputs:** As we’ll see later on, the research is clear: Prompt chaining outperforms monolithic prompts.
3. **Easier to understand:** Trying to understand complex, monolithic prompts is really challenging and makes it hard for teams to collaborate and get better outputs. By leveraging prompt chains, the prompts used can be very focused, and as a result, much easier to understand.
4. **Widely applicable:** Prompt chains can enhance output quality for almost any complex task. Whether it’s summarization, problem-solving, or creative writing, breaking down the process into smaller steps via prompt chaining will help the model.  
	  
	Prompt chaining is also particularly beneficial when attempting to generate long outputs, or when dealing with a lot of context in your prompt.

## When to use prompt chaining

Prompt chaining isn’t always necessary, especially for straightforward, single-step tasks.

If you’re trying to decide whether to create a prompt chain or use a single prompt, here are four questions to consider:

1. **Does my task involve multiple instructions?** For example, "Read this article and generate a summary, then create a related LinkedIn post."
2. **Does my task require multiple transformations?** For instance, if the output needs to be processed or reformatted in several ways.
3. **Am I unsatisfied with the results from my single-prompt approach?** Breaking the task down into subtasks and handling them individually through prompt chaining can help you identify where the problem lies and make it easier to fix.
4. **Does the model seem to lose focus or forget context?** If so, turning your single prompt into a prompt chain can help ensure that each step gets the model’s full attention.

## Prompt chaining example: Data extraction, transformation and analysis

### Prompt 1: Extract data

**Output**:

I’ve extracted the revenue data for Q1–Q4, showing monthly revenue totals, broken down by user segment (premium vs. free users). Engagement data includes weekly active users, churn rate per segment, and time spent on platform. Additionally, I've noted fluctuations around major marketing campaigns and product launches.

### Prompt 2: Transform data

**Output**:

Data cleaning complete. Outliers (e.g., sudden spikes in user churn) have been removed, missing values (particularly in revenue during product downtime) have been filled with median values. Numeric fields, such as revenue and user churn, have been normalized to percentages relative to total users, allowing for easier comparison across segments.

### Prompt 3: Analyze data

**Output**:

Analysis reveals that revenue increased steadily by 12% in Q3, with notable spikes in weeks coinciding with product promotions. User engagement, particularly for premium users, spiked by 25% during these periods, while free user engagement dropped slightly after promotions. Churn rate decreased by 5% during weeks with email campaigns targeting inactive users.

### Prompt 4: Visualize data

**Output**:

Generated a line chart showing the steady growth of revenue over Q1–Q4, with marked increases in Q3 tied to promotions. Engagement is visualized with a bar chart comparing weekly active users across premium and free segments. A separate chart illustrates churn reduction alongside targeted email campaigns.

## Step-by-step process for prompt chaining

Here are three easy steps to follow for chaining your prompts effectively.

### Step 1: Break down the problem into subtasks

Dividing your task into clear, sequential steps will help form the foundation of the prompt chain. Each prompt **should have a single task.** Remember Robert C. Martin!

You can also use LLMs to help with this! Feel free to use the PromptHub [prompt form](https://www.prompthub.us/features/forms) I put together that will help break down your task into subtasks.

Here are a few examples:

- **Example 1**: Summarize an article → Critique the summary → Refine based on feedback.
- **Example 2**: Generate a code → Identify bugs or inefficiencies → Refactor the code.

### Step 2: Plan the handoff

To ensure that outputs from previous prompts are effectively passed on to subsequent prompts, make sure they contain only the information necessary for the next prompt. Map out the exact info that you will need in the output and ensure you receive only that, or else it could trip up other prompts further down the prompt chain.

### Step 3: Rapidly experiment and iterate

As with any prompt engineering related task, prompt chaining requires a lot of iteration! Using a tool like PromptHub’s [prompt chains](https://www.prompthub.us/features/prompt-chaining) makes this process easier by giving you a nice UI to rapidly test and iterate on the prompts within the chain as well as the chain structure.

Now let’s run through a prompt chain example, leveraging this method.

## Prompt chaining example: Generating a follow-up email from a Gong transcript

Let’s say you just finished up a sales call that was recorded by Gong. It would be really cool to generate a personalized follow-up email based on key insights and information from the call. The goal of the email would be to summarize the conversation and address next steps.

### Step 1: Break down the problem into subtasks

First up, let’s break up this task into subtasks and draft some initial prompts:

- **Subtask 1: Extract Key Insights from the Transcript**
- **Prompt**: "Read the following transcript and extract the client’s key pain points, areas of interest, and any agreed upon next steps."
- **Subtask 2: Summarize the Conversation**
- **Prompt**: "Summarize the key points from the extracted insights, focusing on the client’s main challenges, interests, and next steps."
- **Subtask 3: Identify Actionable Next Steps**
- **Prompt**: "Based on the summary, generate actionable next steps, ensuring they are clear and aligned with the conversation"
- **Subtask 4: Draft a Follow-Up Email**
- **Prompt**: "Using the summary and the next steps, draft a professional follow-up email."
- **Subtask 5: Critique the Draft Email**
- **Prompt**: "Critique the draft email for clarity, tone, and relevance. Ensure the email is concise, professional, and actionable."
- **Subtask 6: Refine the Email Based on the Critique**
- **Prompt**: "Refine the follow-up email based on the feedback from the critique, ensuring the tone is appropriate and the message is clear and action-driven."

### Step 2: Plan the handoff

Next up, let’s make sure the transition from one link in the prompt chain to the next is smooth. To do this, we’ll need to ensure each prompt’s outputs are aligned with the input requirements of the downstream prompt. Here’s how we might handle it:

- **Focus on relevant information**: When extracting key insights from the transcript in **Subtask 1**, focus only on truly actionable insights like the client’s pain points, and agreed upon next steps. For example, "The client mentioned needing help with onboarding automation" is a key insight that will inform the next steps. Avoid passing unnecessary dialogue or off-topic information to the next subtask.
- **Map output to input**: In **Subtask 2** (summary generation), the summary should be built only from the insights extracted in Subtask 1. For instance, if you’ve extracted "interest in automation tools" as a key insight, make sure the summary is framed around this, and avoid including irrelevant parts of the conversation.
- **Avoid information overload**: Ensure that each prompt's output is concise. A clean and focused handoff—e.g., only providing key points like “pain points: onboarding issues, interest: automation solutions”—will prevent potential confusion in later steps.

### Step 3: Rapid experimentation and iteration

In the context of prompt chaining, as with prompt engineering, iterating is crucial.

Here’s how to approach this step in a controlled way:

- **Test prompt variations**: Experiment with different phrasings, variants, and prompt engineering methods at each step. For example, in **Subtask 2** (summary generation), try out prompt engineering methods like [Chain of Density prompting](https://www.prompthub.us/blog/better-summarization-with-chain-of-density-prompting).
- **Tweak the chain structure**: If the output isn’t hitting the mark for you, adjust the sequence or add additional subtasks to the prompt chain. For example, add another step before drafting the follow-up email if more detail is needed.
- **Adjust output scope**: Modify the scope of what you ask for in each prompt. If the email draft is too vague, ask for more specific information in earlier prompts.
- **Use tools for speed**: Tools like PromptHub enable you to rapidly test and iterate on prompt chains, making it easier to refine both individual prompts and the chain’s structure.

## Prompt chaining vs stepwise prompting case study

A recent paper ([Prompt Chaining or Stepwise Prompt? Refinement in Text Summarization](https://arxiv.org/pdf/2406.00507)) tested prompt chaining versus what they call a stepwise prompt (a prompt with multiple task instructions). The paper gives great, empirical, data on whether prompt chaining is worth the effort.

### Methods

The paper focused on comparing two prompt engineering methods on a summarization task.

1. **Prompt chaining**: A chain of three separate prompts to generate a final summarization.
	- **Drafting:** A prompt to generate an initial draft
	- **Critiquing:** A prompt to generate feedback and suggestions
	- **Refining:** A prompt that uses the feedback and suggestions to refine the initial summary
2. **Stepwise prompting**: In contrast, stepwise prompting combines all three of the steps in a single prompt.

![An image showing the prompts for prompt chaining versus a single stepwise prompt, for a summarization task](https://cdn.prod.website-files.com/646e63db3a42c618e0a9935c/66e33ff36cc7359f23998e14_66e33f11d4914b747bb8d415_Prompt%2520Chaining%2520main%2520image.png)

Prompt chaining and stepwise prompt templates

### Dataset

The researchers used the **InstruSum** dataset, which was specifically created to test the capabilities of LLMs in summarizing articles based on specific requirements.

InstruSum consists of 100 article-requirement pairs. The articles are sourced from the BBC News website and are about 1,000 words in length.

The built-in requirements for evaluation include:

- **Informational requirement**: Does the summary include the important details from the article?
- **Formatting requirement**: Does the summary incorporate elements like bulleted lists and other formatting features to improve readability?
- **Meta requirement**: Does the summary accurately represent an overview of the article?

### Models

- GPT-3.5 (gpt-3.5-turbo-0125)
- [GPT-4](https://www.prompthub.us/models/gpt-4) (gpt-4-0125-preview)
- [Mixtral 8 x 7B](https://www.prompthub.us/models/mixtral-8x7b)

📊

Want up-to-date insights on model pricing, performance, and more?

Check out our [LLM Model Card Directory](https://www.prompthub.us/resources/llm-model-card-directory) for a full breakdown of key metrics across models.

### Evaluations

The researchers used an evaluation framework called **LLMCompare** to assess the results. LLMCompare uses an LLM ([GPT-4](https://www.prompthub.us/models/gpt-4)) to compare two outputs and selects the ‘better’ one. Below is a prompt template of LLMCompare.

The researchers chose LLMCompare as their evaluation protocol because it performed best in a meta-analysis that tested various evaluation methods. You can find the full meta-analysis paper here:[Benchmarking Generation and Evaluation Capabilities of Large LanguageModels for Instruction Controllable Summarization.](https://arxiv.org/pdf/2311.09184)

Below is the LLMCompare evaluator template.

You can access it in PromptHub as well below.

![LLMCompare template in PromptHub](https://cdn.prod.website-files.com/646e63db3a42c618e0a9935c/66e48dc07399257cefa5c0cc_66e48daf29c590c4e4365502_LLMCompare%2520prompt%2520template.png)

LLMCompare template in PromptHub

The summaries were evaluated on three dimensions:

1. **Overall Quality:** Measures the quality of the summary in relation to the requirements
2. **Missing Information:** Determines whether the summary is missing any essential details
3. **Irrelevant information:** Analyzes the summary to determine if it contains any information that is irrelevant or unrelated to the requirements

### Experiment results

Below is a table of results from the experiments. The more wins, the better the performance.

![A table of results from the experiment, broken down by modal and method (prompt chaining or stepwise prompt)](https://cdn.prod.website-files.com/646e63db3a42c618e0a9935c/66e33ff26cc7359f23998dfe_66e33f7b1564936bac6f3188_Prompt%2520chaining%2520results%2520.png)

A table of results from the experiment, broken down by modal and method (prompt chaining or stepwise prompt)

- Overall, the initial drafts of the summaries were improved by the refinement step, regardless of whether a prompt chain or stepwise prompting was used.
- The performance of **gpt-3.5-stepwise-refine** and **gpt-3.5-chaining-draft** was very similar. This may suggest that the stepwise prompt causes the model to produce a weaker initial draft, anticipating a refinement step.
- Overall, prompt chaining dominates stepwise in producing summaries
- Initial summaries produced using stepwise prompting were frequently the lowest performing summaries. As mentioned in the second bullet point, this could be due to the anticipation from the model that it will soon critique and refine the initial summary. This anticipation and knowledge of next steps could potentially influence the first draft.
- Summaries generated from prompt chaining tended to be longer than those produced by stepwise prompting

In addition to the automated LLM-based evaluations, the researchers used two postgrad student evaluators. The same three evaluation metrics were used, **overall quality, missing information,** and **irrelevant information.**

The results are below.

![A minimal table of results from human evaluation](https://cdn.prod.website-files.com/646e63db3a42c618e0a9935c/66e33ff26cc7359f23998dfb_66e33fb770ce3bbb8936d9f7_Prompt%2520chaining%2520human%2520evaluation%2520results%2520.png)

If prompt chaining outperformed the stepwise prompt then it would be marked as a “win”

- Again, prompt chaining consistently outperformed the stepwise prompt.
- The number of losses decreased when the more advanced [GPT-4](https://www.prompthub.us/models/gpt-4) model was used. This suggests that the value of prompt chaining increases as the underlying model becomes more advanced.

The TL;DR is that prompt chaining reliably outperforms the monolithic, stepwise prompt across a range of evaluations.

## Prompt chaining challenges and considerations

Here are a few potential drawbacks of prompt chaining that you should be aware of.

1. **Increased complexity**: By having multiple prompts in the flow, you increase the overall complexity of the system. This expands the surface area for LLM failures and other issues such as misaligned outputs or context loss between steps.
2. **Higher costs**: Each prompt in the chain requires its own LLM API call, which could lead to higher costs, especially if the total input tokens exceed those used in a monolithic prompt. Additionally, as we saw in the experiments, prompt chain outputs tend be longer.
3. **Longer processing time**: Since prompt chaining requires making multiple LLM calls, the total processing time is almost certainly going to increase.

## Conclusion

Prompt chaining is an extremely effective method of prompt engineering. We’ve seen a number of use cases where breaking down a large prompt into a chain of more focused prompts has taken performance to a new level. The great part is that prompt chains can be used in almost any situation, from reasoning to content generation. If you want to get started with testing [prompt chains](https://www.prompthub.us/features/prompt-chaining) today, you can do so directly on PromptHub, on any plan!

![Headshot of PromptHub founder, Dan Cleary ](https://cdn.prod.website-files.com/646e63db3a42c618e0a9935c/6780005a52f58936a0cee437_Product%20Hunt%20Headshot-min-extra.jpg)

Founder