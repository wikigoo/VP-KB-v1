

# **Architecting Adaptive Roleplay Systems for Large Language Models: A Step-by-Step Guide**

## **Introduction**

The development of sophisticated roleplay scenarios for Large Language Models (LLMs) requires a structured, architectural approach that moves beyond simple conversational scripting. To deliver sustained, immersive, and logically coherent interactive narratives, the system must be engineered with explicit constraints defining the setting, characters, plot mechanics, and dialogue adaptability. This report outlines a six-phase development pipeline designed to create highly stable and engaging LLM roleplay environments, ensuring the generated narrative is both rich in detail and structurally resilient against unpredictable user input. The methodology synthesizes advanced prompt engineering techniques with principles derived from interactive narrative design and conversational AI.1

## **Phase I: Blueprinting the World (Theme and Setting Architecture)**

This foundational phase establishes the essential framework and constraints that govern the entire interactive experience. Effective role prompting requires defining the AI’s functional **Persona** and a rigorous **Constraint Set** for the world itself.2

### **1.1 Establishing the System Persona: The AI as the Game Master (GM)**

The crucial initial step involves leveraging **Role Prompting** by assigning the LLM a professional identity to shape its functional tone and capabilities.3 The LLM must assume the role of an "Interactive Story Telling Robot," a "Master GM," or an "Expert Novelist/Co-Author".5 This instructional role assignment primes the model to adopt an active, narrative-driven style rather than defaulting to purely informational or passive responses.

The prompt must explicitly define the AI's responsibilities to prevent the model from becoming merely reactive. The AI, acting as the GM, must be tasked with managing the environment, portraying all Non-Player Characters (NPCs), narrating the inevitable consequences of user actions, and, critically, actively pushing the story forward into the next beat.7 This functional role assignment of the AI as the GM establishes clear narrative ownership.5 The clarity of this self-imposed narrative identity is paramount because if the AI behaves erratically, the user tends to attribute the failure to the AI's general capability rather than the prompt structure.7 Therefore, a rigorously defined GM persona that prioritizes coherence and active plot advancement minimizes perceived AI failure, bolstering the user's ability to maintain their **Suspension of Disbelief** in the fictional world.9

Furthermore, the blueprinting phase requires **Lexical Control and Style Mandate**. Specific linguistic requirements must be stipulated in the initial system prompt, such as maintaining consistency in tense (e.g., past tense), point of view (e.g., third-person narration), and prose density, often paired with the literary instruction to "Show, Don't Tell" (detailed in Phase IV).6

### **1.2 Defining the Core Conceptual Constraints (Theme, Genre, Tone)**

The setting and theme provide the necessary contextual grounding for the LLM's generative responses.10 This is achieved by clearly stating the genre (e.g., Cyberpunk Noir, High Fantasy Romance) and the expected tone (e.g., cynical, humorous, or grim) in the core system prompt.

The system requires a rich, descriptive grounding environment to improve coherence. Contextual details—such as "The story is set in the 21st century," "Ancient Rome," or "the Quantum Realm"—must be provided.10 This rich context acts as a constraint, limiting the LLM’s vocabulary and thematic pool, thus ensuring the generated narrative stays within the bounds of the chosen world.10

A critical component of world architecture is the establishment of **Mandatory World Rules (Physics and Magic)**. To prevent narrative inconsistencies or collapse, non-negotiable rules must be explicitly listed. For example, *“Magic is fueled by extreme emotional pain and requires a verbal incantation.”* These rules act as a fixed symbolic model, similar to the structured domains used in narrative planning research.11 This hard-coding ensures that actions within the roleplay environment have predictable **preconditions and effects** that are consistently enforced by the LLM, thereby guaranteeing logical integrity.

## **Phase II: Engineering Consistent Characters and Roles**

Character consistency is non-negotiable for sustainable long-form roleplay, as it directly relates to building user trust and sustaining narrative immersion.13 This phase details the architectural shift from simple data dumps to behavior modeling.

### **2.1 The Criticality of Deep Character Consistency**

Consistent character designs are vital for professional quality and are key to developing user attachment and recognition.15 In the context of interactive narrative, an inconsistent character is highly distracting and serves to actively break the user’s immersion.15 Consistency is fundamentally achieved through robust persona and trait definition, supported by iterative feedback mechanisms.13

The analysis indicates a necessity to avoid the **"Pseudo-Code" Pitfall**. While many guides recommend bracketed data formats for trait definition (e.g., \[Personality: stupid, rude\]), this format is frequently less effective than example-driven learning.16 This is because the character definition input box is structurally optimized for processing **Example Dialogues**.16 Using abstract pseudo-code risks the bot misinterpreting the constraints or ignoring them, leading to erratic output.

### **2.2 Achieving Deep Character Consistency via Example Dialogues (The Gold Standard)**

The most reliable methodology for defining a character's personality, unique voice, and specific register is by providing high-quality, illustrative dialogue examples.16 This approach leverages the LLM's capacity for few-shot learning to model behavior rather than relying on abstract labels.

The LLM derives the character's level of formality (register), the structure of its responses (formatting, e.g., use of internal monologue markdown), and its specific lexicon (vocabulary/slang) directly from the provided dialogue examples.16 Character traits (e.g., cynicism, aggression, or humor) are most effectively "shown" through non-verbal actions and internal thoughts embedded within the dialogue. For instance, using descriptive text within asterisks (\*) illustrates actions: {{char}}: \*Scoffs, wiping blood from her blade.\* Sentiment's a luxury we can't afford, kid. Now, move..16

Crucially, complex backstories and core motivations (lore) should be revealed subtly through the demonstrated behavior and dialogue rather than through unstructured data dumps, minimizing the risk of model misinterpretation.16 This approach confirms that declarative constraints (lists of traits) are less effective than behavioral constraints (example dialogues), as the LLM performs better when modeling behavior based on demonstrated patterns, which translates directly to enhanced character realism and predictable output.

### **2.3 Structuring Character Profiles**

A structured character profile ensures all necessary reference points are present in the context. Key attributes include Name, Age, Height, and Role.16 Behavioral vectors—Personality traits, core motivations (the 'why'), and the relationship dynamic to the user ({{user}})—must also be defined.16 For multi-character scenes, every Non-Player Character (NPC) requires an equally detailed profile. These descriptions must be explicitly saved into the LLM's context window or memory to ensure the characters maintain distinct voices and response patterns across interactions.17

Table 1 details the optimal structure for character definition, prioritizing behavioral modeling.

Table 1: Optimal Structure for Character Definition (Using Example Dialogues)

| Component | Purpose | Example Syntax (for LLM context) |
| :---- | :---- | :---- |
| **Core Attributes** | Name, Age, Primary Role Summary. | Name: Lyra Vesperia. Role: Exiled Mercenary, 29\. |
| **Personality Vectors** | Key personality traits linked to behavior. | Personality: Cynical, fiercely loyal, pragmatic. |
| **Example Dialogue Set (A)** | Demonstrates the character's unique voice and lexicon. | {{char}}: \*Scoffs, wiping blood from her blade.\* Sentiment's a luxury we can't afford, kid. Now, move. 16 |
| **Example Dialogue Set (B)** | Demonstrates character reaction to the user ({{user}}) and establishes relationship. | {{user}}: I think we should try talking to the guard first. {{char}}: Talking? I'd rather try a well-placed bullet, but fine. Waste your breath. 16 |
| **Lore/Motivation Injection** | Crucial backstory or goals revealed through narration or dialogue. | {{char}}'s primary motivation is to locate the lost 'Sunstone Key', believing it holds power over the Guild. |

## **Phase III: Designing Interactive Narrative Architecture (The Plot)**

The design of an interactive plot for an LLM should not be a linear script but a structured map of possibilities, following established narrative design principles.10

### **3.1 Modeling the Plot as a Directed Acyclic Graph (DAG)**

Advanced interactive narrative systems, such as GENEVA, utilize graphical models to manage complexity.10 The plot must be decomposed into discrete **narrative beats** (nodes), which represent the fundamental exchange of action and reaction that progresses the plot.10

To structure this map, the creator must use constraints to guide the generation of branching storylines.10 This involves defining the specific number of story starting points, the desired number of potential endings, and the required count of distinct narrative paths (storylines) the LLM must facilitate.10

A high-level plot outline, or "scaffolding," must be provided to the LLM.12 This explicit structure ensures coherence by providing the model with the overall narrative destination, preventing it from generating irrelevant content. The LLM is then tasked with expanding this high-level sketch with detailed descriptive elements, character background, and natural dialogue, adhering strictly to the required plot progression line by line.18

### **3.2 The Turn Cycle and State Tracking**

The LLM roleplay is inherently a turn-based, collaborative system requiring defined input/output logic.7 The turn cycle is simple: the user narrates their Player Character’s actions, and the AI narrates the environment, NPC reactions, and the ensuing story progression.7

Critical to maintaining a grounded experience is the necessity of **State Representation**. The prompt must encourage the LLM to track key state variables internally (e.g., *Trust Level, Inventory, Location*). This approach mirrors how interactive fiction games use preconditions and effects of actions to change the game state, which is crucial for grounded experiences.11

Furthermore, complexity must be managed through **Prompt Chaining**. This technique involves guiding the AI through a series of interconnected prompts to build narrative layers sequentially (e.g., "First, describe the scene's tension. Next, present the consequence of the user’s last action. Then, introduce new dialogue.").2

A powerful consequence of this structural design is the enablement of **Dynamic Action Generation**.20 When a user attempts an unexpected action not explicitly defined in the plot graph, the architecture mandates that the LLM processes this action by evaluating its preconditions and effects against the existing narrative state. This capacity prevents the narrative from becoming "artificially constrained" by the predefined plot, ensuring high user agency is maintained.20

## **Phase IV: Optimizing Dialogue and Narrative Pacing**

Unnatural pacing—where LLMs either gloss over important events or over-elaborate on insignificant details—is a frequently reported deficiency in machine-generated stories.21 This phase focuses on using specific literary commands to enforce quality and rhythm.

### **4.1 Implementing the "Show, Don't Tell" Command**

This literary technique is the most essential command for achieving immersive text and directly counteracts the LLM’s predisposition toward abstract summary.23

The prompt must explicitly mandate "SHOW, DON'T TELL," instructing the LLM to "describe all actions and sensory perceptions in full, verbose, explicit, and vivid detail".6 This forces the model to use expressive language to evoke atmosphere and emotion, rather than merely stating facts.24 For instance, instead of the vague instruction "Write about a man who is sad," the instruction prompts output that details observable behavior: "The man’s shoulders slumped, his gaze fixed on the worn-out soles of his boots".24 Furthermore, realistic dialogue should be utilized to reveal character traits and advance the plot, minimizing excessive narrative exposition.18

### **4.2 Controlling Pacing and Concreteness**

Effective narrative flow requires balancing action, dialogue, and exposition to achieve a steady rhythm.23 The LLM's default tendency is often to generate uniformly descriptive text.25 To regulate this, the concept of **concreteness** is applied. Research suggests LLMs can be guided to control pacing by adjusting the level of detail or "concreteness" in their output.21

**Practical Pacing Instruction** must be mapped directly to the plot architecture. For major narrative events, the constraint should specify a slow pace and high concreteness: PACING\_SET: Slow, High Concreteness, 2000-word detail.18 Conversely, for transitionary periods (e.g., travel or minor preparatory scenes), the command should be PACING\_SET: Fast, Summarized, Low Concreteness. This turns pacing from a descriptive literary goal into an explicit structural constraint, maximizing narrative impact by regulating the flow of information delivery.26

To enhance engagement, the LLM must be directed to **vary sentence lengths**. Uniformly sized sentences create a "flat sentence rhythm" common in machine-generated text.25 Varied lengths help signal emphasis, guide reader attention, and control the rhythm of the reading experience.

### **4.3 Dialogue Tree Planning and Advancement**

Dialogue must be purposeful and actively serve the plot. For critical interactions, the AI should be given a hidden **Dialogue Goal**, such as DIALOGUE\_GOAL: Extract specific information (Key/Location) or DIALOGUE\_GOAL: Increase Lyra’s loyalty score.27 This ensures that conversational paths, even if branched, always funnel back to the larger plot trajectory. Consistency is paramount in multi-turn dialogues, requiring explicit instruction for strong context integration and adherence to the established character response patterns.28

## **Phase V: Adaptive Dialogue Management and Flow Control**

The primary vulnerability of LLM roleplay systems lies in their handling of unpredictable user inputs—the "off-script" problem.29 A robust system must anticipate these deviations and manage them gracefully, prioritizing flexibility over rigid, pre-scripted flows.29

### **5.1 The Challenge of Off-Script Inputs and Conversation Failure**

Human conversation is inherently fluid; thus, a chatbot designed with rigid flows quickly stalls when users phrase requests unpredictably, stray off-topic, or provide vague input.29 Effective conversation design must adapt dynamically, recognizing that rigidity leads to user frustration.29

### **5.2 Strategies for Conversation Repair and Contextual Fallbacks**

To ensure smooth and adaptive conversations, techniques adapted from enterprise Conversational AI are necessary.29

A **Conversation Repair Protocol** must be implemented. If a user shifts topics mid-scenario (e.g., asking about backstory during a combat scene), the AI must be instructed to acknowledge the shift, address it briefly, and then actively guide the user back to the primary plot objective.29

Generic error messages ("I didn't get that") are eliminated by using **Contextual Fallbacks**. Instead, the LLM is prompted to use the current narrative context to offer structured clarification or suggest a return point.29 For example, if input is vague, the AI should refine the request by asking context-specific questions: *"Do you want to continue where we left off, or should we focus on the artifact Lyra just mentioned?"*.29 Essential to this is **Context Retention**, where the system actively remembers prior exchanges to ensure all follow-up responses are relevant and to eliminate the need for users to repeat themselves.28

### **5.3 Designing Trigger-Action Protocols for Seamless Scenario Transitions**

Flow control requires defining Triggers—specific user inputs—that necessitate a pre-planned narrative jump (Action) to ensure smooth transitions.31 These Trigger-Action mappings are vital for managing complexity.

The LLM must operate with an **Intelligence Foundation** that mandates clear **Flow Management** and **Context Integration**, ensuring natural conversation progression and maintaining coherence in multi-turn dialogues.28 If the system detects uncertain responses, it should implement graceful fallback procedures. After a limited number of failed conversational attempts (e.g., two loops), the system must offer a hard plot choice or a designated **Exit Point** (e.g., suggesting escalation or forcing a new scene transition) to prevent narrative stagnation.29

The robust implementation of these strategies transforms the LLM into a dynamic state machine. The structured narrative beats (states), defined actions (triggers), and the mandate for state tracking ensure that Adaptive Dialogue functions as the system's sophisticated error handler. When an unexpected command is received, the system attempts to process it through defined **Contextual Fallbacks** or **Dynamic Action Generation**, thereby maintaining the overall integrity and flow of the interactive narrative.20

## **Phase VI: Advanced Prompt Engineering and Iteration**

The final phase involves synthesizing all conceptual and architectural constraints into a prioritized Master Prompt framework and detailing the necessary quality control mechanisms required for long-term stability.

### **6.1 The Master Prompt Template: Synthesis of Constraints**

The system prompt serves as the roleplay's operating manual, unifying all requirements from Phases I–V. This dense, detailed instruction set must be placed at the highest priority level (System/Context prompt) to maximize its influence over the LLM's output.

The structure of the Master Prompt incorporates the following synthesized elements:

1. **Role/Persona:** Establishing the AI as the authoritative GM/Expert Novelist.2  
2. **Meta-Instructions:** Mandating structural logic such as **Show, Don't Tell** and **Think Step by Step** processing.6  
3. **World State & Rules:** Defining the genre, setting, and immutable physics/magic constraints.10  
4. **Character Definitions:** All NPC profiles, leveraging the high-fidelity **Example Dialogues**.16  
5. **Plot Outline:** The high-level DAG/Beat map, outlining narrative goals, stakes, and required endings.10  
6. **Adaptive Protocol:** Conversation Repair logic, Fallback instructions, and mandatory State Tracking requirements.28  
7. **Output Format:** Specification of desired response length and use of formatting (e.g., markdown, chapter titles).18

### **6.2 Prompt Chaining and Iterative Refinement**

The stability of the roleplay environment is maintained through a structured process of iterative testing and refinement.2 Extensive testing of the complete prompt and story flow is mandatory, involving message regeneration and course-correcting based on observed AI biases or deviations.7

**Prompt Chaining** is employed to introduce layered complexity. By guiding the AI through interconnected prompts, foundational elements (like character voice or setting) can be solidified before introducing major plot complexity.2 Furthermore, if the LLM output becomes too generalized, the iteration process requires introducing tighter, more specific constraints to limit the scope and focus the resulting response.2

This complete approach operates as a **Massive Multi-Shot Prompting** mechanism. By densely embedding demonstrated patterns—detailed character examples, structured plot outlines, and explicit adaptive dialogue rules—the system anchors the model's behavior in established precedents across all interaction dimensions, maximizing the probability of stable and predictable outputs.16

### **6.3 Testing and User Engagement Optimization**

The ultimate validation of roleplay quality is the user's sustained immersion and feeling of flow.14 This necessitates robust evaluation protocols.

Extensive user interaction testing must be conducted to gather feedback on responsiveness, clarity, and effectiveness in meeting the narrative expectations.32 The narrative is designed to achieve a state of **flow**, characterized by deep engagement and immersion, which is directly enhanced by the system's ability to maintain character consistency and provide personalized content.14

Finally, the system should incorporate protocols for **Active Optimization**, such as **Voice Calibration**, matching the LLM’s tone and style to the user’s input over time. This continuous adjustment ensures that the conversation progresses naturally and maintains a high degree of personalization throughout the interaction.28

## **Conclusion**

Architecting a high-quality, adaptive AI roleplay system is achieved through the disciplined application of layered constraints, moving from abstract world rules to explicit behavioral models. The critical components include: the mandatory assignment of a **Game Master Persona**; the rigorous use of **Example Dialogues** for behavioral modeling over declarative trait lists; the structural framing of the plot as a **Directed Acyclic Graph** for managing branches; and the implementation of robust **Adaptive Dialogue Protocols** for gracefully handling off-script user inputs. By integrating these technical and creative requirements into a synthesized Master Prompt, the LLM is transformed into a resilient, dynamic narrative engine capable of sustaining long-form, complex, and highly immersive interactive experiences. The resulting system is inherently stable because its behavior is anchored in demonstrated patterns and functional constraints across every dimension of the interaction.

#### **منابع مورداستناد**

1. A Beginner's Guide to Engineering Prompts in ChatGPT (and Other AI Tools) \- Medium, زمان دسترسی: اکتبر 18, 2025، [https://medium.com/@matthew.edgar.ritchie/a-beginners-guide-to-engineering-prompts-in-chatgpt-and-other-ai-tools-f8dbec88a309](https://medium.com/@matthew.edgar.ritchie/a-beginners-guide-to-engineering-prompts-in-chatgpt-and-other-ai-tools-f8dbec88a309)  
2. The Ultimate Fucking Guide to Prompt Engineering : r/PromptEngineering \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/PromptEngineering/comments/1j8m0rs/the\_ultimate\_fucking\_guide\_to\_prompt\_engineering/](https://www.reddit.com/r/PromptEngineering/comments/1j8m0rs/the_ultimate_fucking_guide_to_prompt_engineering/)  
3. Assigning Roles to Chatbots \- Learn Prompting, زمان دسترسی: اکتبر 18, 2025، [https://learnprompting.org/docs/basics/roles](https://learnprompting.org/docs/basics/roles)  
4. Role Prompting: Guide LLMs with Persona-Based Tasks \- Learn Prompting, زمان دسترسی: اکتبر 18, 2025، [https://learnprompting.org/docs/advanced/zero\_shot/role\_prompting](https://learnprompting.org/docs/advanced/zero_shot/role_prompting)  
5. Storypark: Leveraging Large Language Models to Enhance Children Story Learning Through Child-AI collaboration Storytelling \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/html/2405.06495v2](https://arxiv.org/html/2405.06495v2)  
6. Roleplaying System Prompts : r/LocalLLaMA \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/LocalLLaMA/comments/1aiz6zu/roleplaying\_system\_prompts/](https://www.reddit.com/r/LocalLLaMA/comments/1aiz6zu/roleplaying_system_prompts/)  
7. My full guide on roleplaying with AI : r/WritingWithAI \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/WritingWithAI/comments/1lktyx1/my\_full\_guide\_on\_roleplaying\_with\_ai/](https://www.reddit.com/r/WritingWithAI/comments/1lktyx1/my_full_guide_on_roleplaying_with_ai/)  
8. Collaborative Storytelling and LLM: A Linguistic Analysis of Automatically-Generated Role-Playing Game Sessions \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/html/2503.20623v1](https://arxiv.org/html/2503.20623v1)  
9. Roleplay with Large Language Model-Based Characters: A Creative Writers Perspective \- CEUR-WS.org, زمان دسترسی: اکتبر 18, 2025، [https://ceur-ws.org/Vol-3701/paper8.pdf](https://ceur-ws.org/Vol-3701/paper8.pdf)  
10. GENEVA uses large language models for interactive game narrative ..., زمان دسترسی: اکتبر 18, 2025، [https://www.microsoft.com/en-us/research/blog/geneva-uses-large-language-models-for-interactive-game-narrative-design/](https://www.microsoft.com/en-us/research/blog/geneva-uses-large-language-models-for-interactive-game-narrative-design/)  
11. Large Language Models as Narrative Planning Search Guides \- University of Kentucky, زمان دسترسی: اکتبر 18, 2025، [https://cs.uky.edu/\~sgware/reading/papers/farrell2024large.pdf](https://cs.uky.edu/~sgware/reading/papers/farrell2024large.pdf)  
12. TattleTale \- Storytelling with Planning and Large Language Models, زمان دسترسی: اکتبر 18, 2025، [https://icaps22.icaps-conference.org/workshops/SPARK/papers/spark2022\_paper\_2.pdf](https://icaps22.icaps-conference.org/workshops/SPARK/papers/spark2022_paper_2.pdf)  
13. Enhancing AI Character Consistency: A Comprehensive Guide by Experts | by Hisham Usmani | Medium, زمان دسترسی: اکتبر 18, 2025، [https://medium.com/@hishamusmani/enhancing-ai-character-consistency-a-comprehensive-guide-by-experts-29c9389c6362](https://medium.com/@hishamusmani/enhancing-ai-character-consistency-a-comprehensive-guide-by-experts-29c9389c6362)  
14. Can Artificial Intelligence (AI) \- driven personalization influence customer experiences? \- DiVA portal, زمان دسترسی: اکتبر 18, 2025، [https://uu.diva-portal.org/smash/get/diva2:1874165/FULLTEXT01.pdf](https://uu.diva-portal.org/smash/get/diva2:1874165/FULLTEXT01.pdf)  
15. Ultimate Guide to Creating Consistent Characters with AI, زمان دسترسی: اکتبر 18, 2025، [https://consistentcharacter.ai/blog/ultimate-guide-to-creating-consistent-characters/](https://consistentcharacter.ai/blog/ultimate-guide-to-creating-consistent-characters/)  
16. Guide on how to make a good bot with consistent messages. : r ..., زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/CharacterAI/comments/1b61yu1/guide\_on\_how\_to\_make\_a\_good\_bot\_with\_consistent/](https://www.reddit.com/r/CharacterAI/comments/1b61yu1/guide_on_how_to_make_a_good_bot_with_consistent/)  
17. How to Create Consistent Characters with AI \- YouTube, زمان دسترسی: اکتبر 18, 2025، [https://www.youtube.com/watch?v=K4cW77-\_Q7I](https://www.youtube.com/watch?v=K4cW77-_Q7I)  
18. Prompt and settings for Story generation using LLMs : r/LocalLLaMA \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/LocalLLaMA/comments/1fbggqv/prompt\_and\_settings\_for\_story\_generation\_using/](https://www.reddit.com/r/LocalLLaMA/comments/1fbggqv/prompt_and_settings_for_story_generation_using/)  
19. Is there a way to effectively prompt a model to "show, don't tell?" : r/LocalLLaMA \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/LocalLLaMA/comments/16x1p2r/is\_there\_a\_way\_to\_effectively\_prompt\_a\_model\_to/](https://www.reddit.com/r/LocalLLaMA/comments/16x1p2r/is_there_a_way_to_effectively_prompt_a_model_to/)  
20. Story2Game: Generating (Almost) Everything in an Interactive Fiction Game \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/html/2505.03547v1](https://arxiv.org/html/2505.03547v1)  
21. \[2311.04459\] Improving Pacing in Long-Form Story Planning \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/abs/2311.04459](https://arxiv.org/abs/2311.04459)  
22. Are Large Language Models Capable of Generating Human-Level Narratives? \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/html/2407.13248v1](https://arxiv.org/html/2407.13248v1)  
23. Prompt Engineering For storytelling: From Chaos to Characters Building | by Karthikeya Suppa | Medium, زمان دسترسی: اکتبر 18, 2025، [https://medium.com/@karthikeyasuppa01/prompt-engineering-for-storytelling-from-chaos-to-characters-building-6550cd35ee7d](https://medium.com/@karthikeyasuppa01/prompt-engineering-for-storytelling-from-chaos-to-characters-building-6550cd35ee7d)  
24. Show don't tell: 4 prompt engineering examples that will make you a writing maven, زمان دسترسی: اکتبر 18, 2025، [https://codesignal.com/blog/prompt-engineering-examples/](https://codesignal.com/blog/prompt-engineering-examples/)  
25. Writing in the Age of LLMs \- Shreya Shankar, زمان دسترسی: اکتبر 18, 2025، [https://www.sh-reya.com/blog/ai-writing/](https://www.sh-reya.com/blog/ai-writing/)  
26. Improving Pacing in Long-Form Story Planning \- ACL Anthology, زمان دسترسی: اکتبر 18, 2025، [https://aclanthology.org/2023.findings-emnlp.723.pdf](https://aclanthology.org/2023.findings-emnlp.723.pdf)  
27. 8 Chatbot Flow Examples for Optimizing Conversations | The Rasa Blog, زمان دسترسی: اکتبر 18, 2025، [https://rasa.com/blog/chatbot-flow-examples/](https://rasa.com/blog/chatbot-flow-examples/)  
28. I Built a Prompt That Makes AI Chat Like a Real Person : r/ChatGPTPro \- Reddit, زمان دسترسی: اکتبر 18, 2025، [https://www.reddit.com/r/ChatGPTPro/comments/1hih8s8/i\_built\_a\_prompt\_that\_makes\_ai\_chat\_like\_a\_real/](https://www.reddit.com/r/ChatGPTPro/comments/1hih8s8/i_built_a_prompt_that_makes_ai_chat_like_a_real/)  
29. How to Create Effective Chatbot Conversation Designs | The Rasa ..., زمان دسترسی: اکتبر 18, 2025، [https://rasa.com/blog/how-to-design-chatbot-conversation/](https://rasa.com/blog/how-to-design-chatbot-conversation/)  
30. Conversational Design for Chatbots \- NeuroSoph, زمان دسترسی: اکتبر 18, 2025، [https://neurosoph.com/conversational-design-for-chatbots/](https://neurosoph.com/conversational-design-for-chatbots/)  
31. Introducing Bot Framework Adaptive Dialogue and How To build database driven chatbots, زمان دسترسی: اکتبر 18, 2025، [https://jamiemaguire.net/index.php/2019/11/10/introducing-bot-framework-adaptive-dialogue-and-how-to-build-database-driven-chatbots/](https://jamiemaguire.net/index.php/2019/11/10/introducing-bot-framework-adaptive-dialogue-and-how-to-build-database-driven-chatbots/)  
32. The Importance of Role Playing in Agentic Workflows \- The Prompt Engineering Institute, زمان دسترسی: اکتبر 18, 2025، [https://promptengineering.org/the-importance-of-role-playing-in-agentic-workflows/](https://promptengineering.org/the-importance-of-role-playing-in-agentic-workflows/)  
33. Enhancing Human-Like Responses in Large Language Models \- arXiv, زمان دسترسی: اکتبر 18, 2025، [https://arxiv.org/html/2501.05032v1](https://arxiv.org/html/2501.05032v1)