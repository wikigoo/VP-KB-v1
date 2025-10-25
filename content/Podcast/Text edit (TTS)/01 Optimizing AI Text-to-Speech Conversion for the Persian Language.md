## Section I: The Foundational Challenge: Ambiguity and Persian Orthography

The process of converting Persian (Farsi) text to high-quality artificial intelligence (AI) audio presents unique challenges rooted in the script's orthography. Unlike highly phonetic languages that use Latin script, Persian utilizes a modified Perso-Arabic _abjad_, which systematically omits critical phonetic information. This absence of explicit data necessitates extensive text preparation to ensure the AI's Grapheme-to-Phoneme (G2P) conversion is accurate, bypassing inference errors that result in mispronunciation.

### 1.1. Decoding the Perso-Arabic Script and G2P Failures

The Persian writing system is executed right-to-left and is based largely on the Arabic alphabet, supplemented by four letters unique to Persian: $ \text{پ} $ (p), $ \text{چ} $ (ch), $ \text{ژ} $ (zh), and $ \text{گ} $ (g) `[1, 2]`. Critically, the script functions as an abjad, where consonant sounds are fully represented, but short vowel sounds are generally excluded from standard written text `[3, 4]`.

This systematic omission means that written Persian text is inherently ambiguous. The AI TTS system cannot simply read the text; it must execute a computational G2P process to infer the missing short vowels, stress, and articulation based on grammatical and semantic context. If the input text contains ambiguities—which is common—the AI’s inference engine, especially in systems trained on smaller, less diverse datasets typical of low-resource languages `[5, 6]`, will likely fail, leading to semantic error and poor audio quality. For this reason, users must view the standard written form not as definitive spelling, but as a source of potential ambiguity that demands manual resolution before the text is submitted for synthesis.

### 1.2. The Vowel System: The Core Disambiguation Requirement

Iranian Persian possesses six primary vowels: three short and three long `[7, 8, 9]`. The short vowels are the primary point of failure for G2P systems because their presence is merely implied in the written form.

#### Persian Vowel Inventory

|**Type**|**Vowel Sound**|**Phonetic IPA (Approx. English)**|**Written Representation**|**Diacritic (Harakat)**|
|---|---|---|---|---|
|Short|/æ/ (as in cat)|$ \text{æ} $|Omitted|$ \text{◌َ} $ (Fatḥah)|
|Short|/e/ (as in bell)|$ \text{e} $|Omitted|$ \text{◌ِ} $ (Kasrah)|
|Short|/o/ (as in mode)|$ \text{o} $|Omitted|$ \text{◌ُ} $ (Ḍammah)|
|Long|/ɒː/ (as in ball)|$ \text{ɒː} $|$ \text{آ} $ or $ \text{ا} $|N/A|
|Long|/uː/ (as in moon)|$ \text{uː} $|$ \text{و} $|N/A|
|Long|/iː/ (as in feel)|$ \text{iː} $|$ \text{ی} $|N/A|

The absence of short vowels creates extensive homography. For example, the graphemic sequence $ \text{کرم} $ can be pronounced in at least three distinct ways, each carrying a different meaning: $ \text{کَرم} $ (karam, 'kindness'), $ \text{کِرم} $ (kerm, 'worm'), or $ \text{کُرم} $ (korm, 'cream') `[10]`. Disambiguation is impossible without explicit vocalization.

A related significant challenge is the multi-functional character $ \text{و} $ (Vav) `[11]`. This letter can represent the consonant /v/ (as in $ \text{وطن} $ /vætæn/), the long vowel /uː/ (as in $ \text{نور} $ /nuːr/), or the short vowel /o/ (as in $ \text{فوری} $ /fori/) `[11, 12]`. The combination of Vav’s triple functionality and the systematic omission of other short vowels creates the highest probability of G2P failure. Since these vowels are the phonological building blocks of the language, proactively confirming their pronunciation dramatically improves the overall audio fidelity.

### 1.3. The Necessity of Diacritics (Harakat/Vocalization Marks)

Diacritics, known as _E'rāb-gozāri_ (vocalization marks) `[7]`, serve as the primary linguistic tool available to the user to inject explicit phonetic instructions into the source text. For TTS conversion, users must utilize these marks liberally, particularly for verbs, prepositions, or any noun where ambiguity exists.

#### Key Diacritics for AI TTS

|**Diacritic**|**Persian Name**|**Function**|**Phonetic Value**|**Example Use**|
|---|---|---|---|---|
|$ \text{◌َ} $|Fatḥah|Short /a/ (as in cat)|$ \text{/æ/} $|$ \text{بَرد} $ (bærd - stone) `[7]`|
|$ \text{◌ِ} $|Kasrah|Short /e/ (as in bell)|$ \text{/e/} $|$ \text{دِرخت} $ (derakht - tree) `[7]`|
|$ \text{◌ُ} $|Ḍammah|Short /o/ (as in mode)|$ \text{/o/} $|$ \text{گُلاب} $ (golāb - rosewater) `[7]`|
|$ \text{◌ّ} $|Tashdīd|Doubled consonant|Gemination|$ \text{مُدَّت} $ (moddæt - duration) `[7]`|

The explicit use of diacritics is the only way to resolve homographs like $ \text{سَبک} $ (sæbk, 'style') versus $ \text{سِبک} $ (sebk, 'lightweight') `[7]`. Proper vocalization is a prerequisite for achieving semantic accuracy in synthesized speech.

### 1.4. Problematic Consonants and Transliteration Norms

Persian phonology features sounds that may challenge English speakers, particularly those derived from Arabic. A major feature of modern Iranian Persian is the phonetic convergence (or collapse) of several graphemes into a single sound. For instance, the four Arabic letters $ \text{ث} $ , $ \text{س} $ , and $ \text{ص} $ all represent the phoneme /s/ `[2, 7]`. Similarly, $ \text{ذ} $ , $ \text{ز} $ , $ \text{ض} $, and $ \text{ظ} $ all represent the phoneme /z/ `[2, 7]`.

Although AI TTS engines are typically trained to manage this graphemic collapse, users should be aware that letters like $ \text{ق} $ (qāf) and $ \text{غ} $ (ghain) represent uvular sounds (/q/ and /ɣ/) that have no direct parallel in English `[13]`.

While the native Perso-Arabic script should always be used for input, established Romanization standards, such as the BGN/PCGN system `[1, 14]`, provide a guide for understanding the phonetic representation of these sounds, should the user need to utilize Speech Synthesis Markup Language (SSML) for advanced pronunciation control.

## Section II: Precision Text Input: Normalization and Prosody Cues

Achieving natural-sounding Persian TTS requires meticulous text normalization. This involves not only correcting punctuation errors but also adhering to crucial Persian spacing conventions, which directly influence how the AI segments words and applies phonetic stress.

### 2.1. Punctuation as Prosody Control (علائم سجاوندی)

In TTS systems, punctuation marks are not merely grammatical indicators; they are critical prosodic cues that regulate the rhythm, pitch, and duration of synthesized speech `[15, 16]`.

A period ($ \text{.} ![](data:image/png;base64,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) \text{؟} $) signals a rising intonation `[15]`.

The user must adhere strictly to standard Persian spacing rules for punctuation `[7]`:

1. **No space** is placed immediately before a punctuation mark (excluding closing parentheses/quotation marks).
    
2. **One space** is placed immediately after the punctuation mark.
    

Example of correct usage: $ \text{«سلام!} $ not $ \text{«سلام!»} $ `[7]`.

For narrative flow, users are strongly advised to utilize the comma ($ \text{،} $) strategically. Commas introduce a momentary pause—mimicking a natural breath point—which significantly enhances clarity and fluency, especially within long clauses or between items in a list. When writing text for TTS, if a speaker would naturally pause, a comma should be inserted `[17]`.

### 2.2. Mastering the Zero Width Non-Joiner (ZWNJ) or نیم‌فاصله

The Zero Width Non-Joiner (ZWNJ), known in Persian as _Nim-fāṣele_ (short space or in-word space), is perhaps the most critical text preparation requirement for high-quality Persian TTS `[16, 18]`. It is an invisible character (U+200C) that prevents letters from connecting visually while ensuring the sequence of characters is treated by the G2P processor as a _single lexical token_ (one word) `[16]`.

The ZWNJ must be used whenever separating grammatical components that belong to a single word, such as compound verbs, possessive clitics, or affixes.

#### Mandatory ZWNJ Use Cases and Impact on TTS

|**Component**|**Description**|**Correct (ZWNJ)**|**Incorrect (Full Space)**|**TTS Outcome**|
|---|---|---|---|---|
|Compound Verbs|Separating the verb stem from prefixes (e.g., $ \text{می} $ - mi-, durative).|$ \text{می‌روم} $ (I go)|$ \text{می روم} $|Correct final syllable stress.|
|Clitics|Linking pronouns or possessive suffixes.|$ \text{خانه‌ام} $ (my house)|$ \text{خانه ام} $|Incorrect stress and phonological segmentation.|
|Suffixes|Joining plural markers ($ \text{ها} $ - hā).|$ \text{کتاب‌ها} $ (books)|$ \text{کتاب ها} $|Incorrect parsing of the unit.|

The careful regulation of ZWNJ is paramount because Persian word stress typically falls on the final syllable of the lexical item `[19]`. If a user incorrectly separates a compound with a full space, the AI interprets two tokens, applying the final-syllable stress rule to _both_ tokens independently. This produces an unnatural phonological segmentation and erroneous prosody. The ZWNJ ensures that the entire morphological construction is analyzed as a single unit, allowing the stress to fall correctly on the final syllable of that combined unit.

### 2.3. Handling Numbers, Dates, and Abbreviations

TTS systems require careful formatting of numerical data to ensure correct reading.

1. **Individual Digits:** To force the AI to read digits separately (e.g., for an ID number or sequence), they should be separated by a full space or a comma and space (e.g., $ \text{1 2 3} $ or $ \text{1, 2, 3} $). If no space is used (e.g., $ \text{123} $), the AI will read it as a single cardinal number (`one hundred twenty-three`) `[17]`.
    
2. **Dates and Ranges:** For dates and numerical ranges (e.g., $ \text{1380–1390} $), it is often beneficial to normalize the text by explicitly writing out the sequence in Persian (e.g., $ \text{از هزار و سیصد و هشتاد تا هزار و سیصد و نود} $). This preempts any ambiguity regarding the separator's pronunciation `[7]`.
    

## Section III: Managing Prosody, Stress, and Dialectal Variation

The acoustic naturalness of synthesized Persian speech relies heavily on the correct application of suprasegmental features, namely word stress (pitch accent) and the careful management of stylistic differences between formal and colloquial speech.

### 3.1. Persian Pitch Accent (Word Stress) Rules

In Iranian Persian, the default rule is that the primary prominence (often called stress) falls consistently on the **final syllable** of nearly all lexical categories, including simple, derived, and compound nouns, adjectives, and non-prefixed verbs `[19, 20, 21]`.

- **Examples:** $ \text{مدرسه} $ (madreseˈ - school), $ \text{بزرگ} $ (bozoˈrg - big) `[19]`.
    
- **Clitic Stability:** When enclitics (such as possessive or object pronouns) are added, the stress remains stable on the final syllable of the original stem, not shifting to the clitic itself (e.g., $ \text{خانه‌ام} $ xāneˈ-am - my house) `[19, 21]`.
    

However, the application of stress is deeply syntactic. While the lexical rule is a strong default, actual spoken Persian uses pitch accent to mark focus (phrasal stress) `[21]`. A basic TTS engine, relying only on the dictionary's default stress position, may fail to apply necessary rhetorical emphasis to highlight the key element of a sentence. For critical or narrative content, users should not rely solely on the AI's default G2P stress assignment but must be prepared to use SSML tags (Section 3.3) to manually control prominence where syntactic focus dictates.

### 3.2. The Written vs. Spoken Divide (Ketâbi vs. Goftebâri)

Persian is characterized by a pronounced diglossia between its formal, literary written form (_Ketâbi_) and its informal, everyday spoken form (_Goftebâri_) `[22, 23]`. This divergence involves significant phonological and morphological shifts.

If a user inputs the formal spelling, the AI will produce formal audio, which may sound stiff and unnatural in a casual context, such as dialogue or social media content `[24]`.

#### Key Dialectal Shifts (Colloquial Iranian Persian)

|**Feature**|**Formal Written (Ketābi)**|**Colloquial Spoken (Goftebāri)**|**Example**|
|---|---|---|---|
|Vowel Shift|$ \text{ā} $ followed by $ \text{n} $|$ \text{un} $|$ \text{خانه} $ (xāne) becomes $ \text{خونه} $ (xune) `[23]`|
|Verb Contraction|Full verb forms, especially 'to be' ($ \text{هستم} $ - hastam)|Contracted suffix form ($ \text{ـم} $ - am)|$ \text{influencer hastam} $ becomes $ \text{influencer-am} $ `[23]`|
|Vowel Reduction|$ \text{e} $ in certain contexts|$ \text{i} $|$ \text{tehran} $ becomes $ \text{tehrun} $ `[23]`|

To achieve a natural, conversational tone, content creators must first perform a **colloquial normalization phase**, transforming the literary input text into its spoken spelling convention, before feeding it to the TTS engine.

### 3.3. Technical Control of Stress and Pacing using SSML

Speech Synthesis Markup Language (SSML) provides the ultimate level of control over the resulting audio's prosody, enabling users to inject human-like inflection and pacing. SSML utilizes XML tags to instruct the AI beyond simple text rendering `[3]`.

- **Controlling Emphasis:** The $ \text{} $ tag can be used to manually increase the volume or slightly slow down a word, overriding the AI’s default word stress to highlight syntactically or rhetorically important words `[25]`.
    
- **Controlling Pacing and Pauses:** To counter the flat or robotic rhythm common in low-resource TTS, explicit pauses can be added using the $ \text{} $ tag, or the speaking rate can be adjusted using $ \text{} $ `[3, 15]`. This allows the user to introduce natural-sounding timing and rhythm into the speech flow.
    

## Section IV: AI Tool Selection and Advanced SSML Implementation

The selection of an appropriate AI tool depends on the user's need for voice quality versus the required depth of phonetic customization. Projects demanding high-fidelity, error-free pronunciation typically necessitate tools that support advanced SSML capabilities.

### 4.1. Selecting Suitable Persian TTS Engines (fa-IR)

AI TTS development for Persian (specifically the Iranian dialect, fa-IR) is advancing, but the market offers varying degrees of customization.

|**Platform**|**Key Features**|**Voice Quantity**|**Customization Level**|**Use Case Suitability**|
|---|---|---|---|---|
|**Fliki AI** `[26]`|Named Standard voices (Dilara ♀, Farid ♂); supports emotions.|Limited standard selection|Basic SSML (rate, pitch, volume)|Marketing, short narrative content|
|**Narakeet** `[27]`|Focus on natural-sounding audio; fast production of videos/lessons.|Extensive (49+ voices)|Basic SSML (rate, volume controls)|Voiceovers, language lessons, general narration|
|**Enterprise APIs** (Azure/Google) `[28, 29]`|Advanced neural voices; low latency; full IPA support.|High quality, often fewer neural voices|Full SSML, including $ \text{} $ tag|E-learning, broadcasting, complex text disambiguation|

For projects where the risk of semantic error is high (e.g., technical instructions, legal texts, or e-learning modules), prioritizing a platform that supports SSML phonetic injection is mandatory. While off-the-shelf platforms offer ease of use and acceptable quality, enterprise APIs unlock the precision needed to guarantee accurate pronunciation of critical terms.

### 4.2. Leveraging SSML for Custom Pronunciation (Phonemes)

The $ \text{} $ tag is the most powerful tool for absolute phonetic control, bypassing the AI’s G2P model entirely and injecting the exact intended pronunciation `[30]`. This feature is essential for resolving words that are frequently mispronounced by AI, such as technical jargon or high-ambiguity words like $ \text{و} $ (Vav).

The phonetic alphabet recommended by major providers for Persian (fa-IR) is the International Phonetic Alphabet (IPA) `[28, 29]`.

#### Using SSML to Resolve Vowel Ambiguity

To ensure the word $ \text{آرزو} $ (wish) is pronounced correctly with the long vowel $ \text{/uː/} $ for the $ \text{و} $, the user can override the text:

$ \text{آرزو} $ (desired pronunciation: $ \text{ɒːreˈzuː} $)

XML

```
<speak xml:lang="fa-IR">
  <voice name="PersianFemaleVoice">
    <prosody rate="medium">
      داشتن 
      <phoneme alphabet="ipa" ph="ɒːreˈzuː">
        آرزو
      </phoneme>
      ، زیباست.
    </prosody>
  </voice>
</speak>
```

The SSML framework allows users to combine multiple controls for optimal results. For instance, the following snippet applies a slow rate, medium pitch, strong emphasis, and uses IPA to ensure a critical term ($ \text{رسمی} $) is pronounced with high accuracy `[3]`:

XML

```
<speak xml:lang="fa-IR">
  <voice name="PersianFemaleVoice">
    <prosody rate="slow" pitch="medium">
      لطفاً 
      <break time="200ms"/>
      
      <emphasis level="strong">
        <phoneme alphabet="ipa" ph="ræˈsmi">
          رسمی
        </phoneme>
      </emphasis> 
      تلفظ کنید.
    </prosody>
  </voice>
</speak>
```

### 4.3. Technical Constraints and Data Limitations

The development of robust TTS systems for Persian is hampered by significant technical constraints, primarily stemming from its status as a lower-resource language. Current TTS development faces issues related to the limited size, low quality, and restricted topical domain of available datasets, many of which are non-open or skewed toward formal or religious texts `[5, 6]`.

Because AI models have not been exposed to the vast lexical and contextual diversity found in higher-resource languages like English, their capacity for generalization and handling irregular inputs (such as complex names, technical terminology, or highly idiomatic expressions) is inherently weaker. This means the model is more brittle and prone to generating errors when ambiguity is present. Consequently, the reliance on manual normalization—the explicit injection of diacritics, the consistent use of the ZWNJ, and SSML intervention—is not a specialized feature but a foundational prerequisite for producing professional-grade, error-free Persian audio.

## Section V: Troubleshooting and Expert Glossary

### 5.1. Troubleshooting AI-Generated Audio: Symptoms and Solutions

Troubleshooting high-fidelity Persian TTS requires diagnosing phonetic, prosodic, and segmentation errors based on the principles outlined in this guide.

|**Symptom**|**Root Cause**|**Solution/Actionable Fix**|
|---|---|---|
|**Flat, Robotic Rhythm**|Insufficient punctuation to signal natural pauses or breathing points `[15]`.|Insert more commas ($ \text{،} $) strategically in long clauses, or use SSML $ \text{} $ tags to enforce specific pause durations `[17]`.|
|**Incorrect Word Meaning/Pronunciation** (Homograph Error)|Omission of short vowels creates ambiguity (e.g., $ \text{کرم} $) `[10]`.|Explicitly inject diacritics (Harakat) into the source text to resolve ambiguity `[3]`. For non-standard words, use SSML $ \text{} $ as a final override.|
|**Monotone or Lack of Emphasis**|AI failed to apply syntactic focus or rhetorical intonation due to default stress rules `[21]`.|Use SSML $ \text{} $ or $ \text{} $ to force stress/pitch variations where communicative focus is needed `[3, 25]`.|
|**Unnatural Word Segmentation**|Incorrect use of full space instead of ZWNJ, causing misapplication of the final-syllable stress rule `[16]`.|Replace full spaces with the Zero Width Non-Joiner (ZWNJ / $ \text{نیم‌فاصله} $) for all compound structures and clitics (e.g., $ \text{می‌روم} $) `[16]`.|
|**Contractions Sound Too Formal**|Input text is in written _Ketâbi_ form, not colloquial.|Manually normalize the input text to colloquial spelling conventions (e.g., use $ \text{خونه} $ instead of $ \text{خانه} $) before submission `[23]`.|

### 5.2. Glossary of Essential Persian Terms for Text-to-Audio Conversion

|**Persian Term**|**Definition**|**Phonetic Pronunciation (Transliteration)**|**Source**|
|---|---|---|---|
|$ \text{اعراب‌گذاری} $|_E'rāb-gozāri_|The act of adding vocalization marks (diacritics/short vowels) to remove ambiguity.|`[7]`|
|$ \text{مُصَوَّت‌ها} $|_Moṣavvat-hā_|Vowels (includes both short and long vowels).|`[7]`|
|$ \text{علائم سجاوندی} $|_Alā'em-e Sajāvandi_|Punctuation marks (crucial for prosodic pauses and segmentation).|`[7]`|
|$ \text{نیم‌فاصله} $|_Nim-fāṣele_|Zero Width Non-Joiner (ZWNJ); essential for connecting elements within a single lexical word.|`[16]`|
|$ \text{آوانگاری} $|_Āvā-negāri_|Transcription; writing the actual pronunciation using a phonetic alphabet (e.g., IPA).|`[7]`|
|$ \text{کِتابی} $|_Ketābi_|Literary or Formal Written Persian Style.|`[22]`|
|$ \text{گفتاری} $|_Goftebāri_|Colloquial or Spoken Persian Style (often refers to Tehrani dialect).|`[22]`|
|$ \text{فَتْحَه} $|_Fatḥah_|The short vowel diacritic ($ \text{◌َ} $) representing /æ/.|`[7]`|

## Conclusions and Recommendations

The primary conclusion of this expert analysis is that generating high-quality Persian audio using AI TTS shifts the burden of G2P accuracy from the neural network back to the user's initial text preparation phase. Due to the inherent orthographic ambiguity of the Perso-Arabic script and the challenges faced by TTS models trained on limited Persian data, the default output of unnormalized text will frequently suffer from prosodic flatness, word segmentation errors, and semantic mispronunciation.

To mitigate these systemic risks, it is strongly recommended that all users adopt a strict pre-processing protocol:

1. **Vocalization Enforcement:** Explicitly apply diacritics ($ \text{اعراب‌گذاری} $) to all words that possess homographic potential, particularly surrounding short vowels and the ambiguous $ \text{و} $ (Vav). For critical terms, SSML phonetic tags using the IPA standard must be used as the ultimate control measure.
    
2. **Lexical Tokenization:** Consistently utilize the Zero Width Non-Joiner ($ \text{نیم‌فاصله} $) to correctly delimit single lexical units (compound verbs, clitics, suffixes). This ensures the AI accurately recognizes word boundaries, thereby applying the final-syllable stress rule correctly and guaranteeing natural speech segmentation.
    
3. **Stylistic Alignment:** Determine the required speech style (Formal $ \text{کِتابی} $ or Colloquial $ \text{گفتاری} $) before input. If conversational audio is required, the text must undergo manual normalization to reflect spoken spelling and contractions.
    
4. **Prosodic Fine-Tuning:** Utilize SSML $ \text{} $ and $ \text{} $ tags to manually inject necessary rhythm, pauses, and rhetorical focus, overcoming the inherent difficulty AI models have in replicating natural Persian pitch accent and intonation.