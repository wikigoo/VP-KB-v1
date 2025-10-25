---
title: Midjourney Mastery Guide
source: https://godmodechatgpt.notion.site/Midjourney-Mastery-Guide-ddaa7e9f6ac2425ca645deb4adc0ca18
created: 2025-08-29
description: A tool that connects everyday work into one space. It gives you and your teams AI tools—search, writing, note-taking—inside an all-in-one, flexible workspace.
---
### Midjourney Prompt Engineering Guide

This guide is split into the following parts:
Part One: Prompt Types
Part Two: Parameters
Part Three: Advanced Commands
Part Four: Versions and Style
Part Five: Custom Options
Part Six: Pan Feature
Part Seven: Style Tuner
Part Eight: Consistent Characters/Objects
## How to prompt with Midjourney 101

The more detailed and descriptive your prompt the more vibrant and unique the output!
The standard parameters explained:
Subject: What is the main theme of your prompt?
Prompt: Copy the finished prompt out of this field and enter it as a Midjourney prompt on Discord.
Style: The style of the prompt. Provide a set of supporting prompt keywords. You can select multiple styles per prompt.
Scenery: Be even more specific and select a specific scenery for your prompts like GTA, Mars, or Wild West
Artist: Use this property to create images in the style of your favorite artist.
Emotion: Add emotions to your prompt to make the outcome even more unique.
Lightning: Choose how you want your image exposed. This can drastically change your image.
Camera: Create prompts in the style of a specific camera or lens.
Colors: Add colors that should be included in the prompt
Materials: Try experimenting with adding different materials. I have for example created an image of Anubis as a chocolate statue.
Ratio: Select the aspect ratio of your prompt.
Height & Width: Midjourney creates pictures between 512 x 512 and 1664 x 1664 pixels But you can also specify the exact height and width in your prompt.
Image Prompt: Base your Prompt on a picture you have [uploaded to Discord](https://docs.midjourney.com/docs/image-prompts). To use the image, simply type the URL into this property.
Image Weight: To adjust the importance of the image URLs vs. the text.
\--iw 0.25
is the default and is used when no
\--iw
is specified. Higher
\--iw
values mean the image prompt will have more impact on the finished job.
The advanced parameters explained:
Chaos:
\--chaos <number 0–100>
Change how varied the results will be. Higher values produce more unusual and unexpected generations.Don’t include (no):
\--no
Negative prompting,
\--no plants
would try to remove plants from the image.Quality:
\--quality <.25,.5, 1, or 2>
, or
\--q <.25,.5, 1, or 2>

How much rendering quality time you want to spend. The default value is 1. Higher values cost more and lower values cost less.Seed:
\--seed <integer between 0–4294967295>
The Midjourney bot uses a seed number to create a field of visual noise, like television static, as a starting point to generate the initial image grids. Seed numbers are generated randomly for each image but can be specified with the --seed or --sameseed parameter. Using the same seed number and prompt will produce similar ending images.
Style Version:
\--style <4a, 4b or 4c>
Switch between versions of the Midjourney [Model Version](https://docs.midjourney.com/v1/docs/models) 4
Learn more: [https://docs.midjourney.com/docs/parameter-list](https://docs.midjourney.com/docs/parameter-list)
This ultimate prompt guide is divided into 7 parts (with updates):
Part One: Prompt types
Part Two: Parameters
Part Three: Advanced Command
Part Four: Version and Style
Part Five: Custom Options
Part Six: Pan Feature
Part Seven: Style Tuner
As you all know, to interact with the Midjourney Bot on Discord, we will need to use commands. Commands are used to create images, customize settings, track user info, and perform other helpful functions.
In order to create images in Midjourney, we need to input a prompt followed by the command “ /imagine”.

The command for image generation: /imagine prompt
That’s what we are going to start today — Prompt.

## Part One: Prompt Types

A Promptis a short text phrase that the Midjourney Bot interprets to produce an image and can be broken down into three major types in the following structure.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*fedx9iUbpPzmBT1npo4vAg.jpeg?table=block&id=254d9eb4-137c-47e7-ba4b-8a090eedf9ff&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 1\. Image Prompt
Use images to impact a Job’s composition, style, and colors.

### 2\. Text Prompt
Description of the image. Combine image prompts with text prompts for varied outcomes.

### 3\. Advanced Text Prompt

### 3.1 Multi Prompt “::”

Using “

::

” in the prompt lets Midjourney consider each part individually, allowing for assigning relative importance to the prompt.For instance, “Space ship” results in a sci-fi spaceship, while “

space::ship

” creates a sailing ship in space.![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*gQyRHg_3HzN5Kj0a0l9kXw.jpeg?table=block&id=86e73f9d-6866-4078-87a0-b54a050c542e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### Prompt Weights

Besides, We can also add a number after it determines the relative importance of that specific part.

Modifying the prompt to “

space::2 ship

” prioritizes “space” twice as much as “ship,” resulting in space-themed images with ships as secondary elements.![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*tWDpO50COwa6ACGxGxWOTw.png?table=block&id=ed511ac4-a851-428d-8d52-0a860ef048b3&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

space::2 ship

### Order of the Prompt

Besides utilizing prompt weight, the order of your words also has a significant effect on the final image.

Begin with the key keywords that hold the most significance.

Words 1–5: carry significant influence and are likely to appear prominently in the initial results.

Words 5–20: also hold influence, but may need 2–3 rerolls to highlight them in the image.

Words 21–40: remain relevant, but might require several rerolls to be noticeable.

Words 40+: likely to be overlooked

### 3.2. Advanced Text Prompt — Permutation Prompt

Permutation Prompt allows users to generate prompt variations using a list of options separated with commas

","

within curly braces “

{ }

” to create different combinations.

> Prpmpt: A Fox { Inkpaint, Pop art, Cyberpunk}

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*U6CPRzpchkEMu-Ax6PLbdA.jpeg?table=block&id=82b94c0a-273d-4fab-a095-f582dc04b960&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

A Fox { Inkpaint, Pop art, Cyberpunk}

## Part Two: Parameters

## What are Parameters?

Parameters are additional choices incorporated into a prompt, which modify the generation process of an image.

Parameters go at the end of the prompt, usually in this way

> \--parameter <value>

### 1\. Aspect Ratios -ar \[ width: height \]

Here are common aspect ratios used in various contexts:

\-ar 1:1

Default aspect ratio.

Landscape:

\-ar 5:4

Common print ratio.

\-ar 3:2

Common in print photography.

\-ar 16:9

Televisions and computer monitors

Portrait:

\-ar 9:16

Good for Stories and Video

The aspect ratio impacts the shape and composition of a generated image. V5 brings in various aspect ratios, including unconventional ones like 100:1.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*oJAvV64D0WHeLOirmNTwgA.png?table=block&id=500f8dad-510c-4bf0-9e3c-ab32de0fd154&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 2\. Chaos -c < 0–100 >

Higher values result in more unusual and unexpected results and compositions.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*BMwBEkhkBbysi4VWk6fxAA.jpeg?table=block&id=cae2363c-0dac-4b76-8b47-b112e904d60e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 3\. Image Weight --iw < 0–2 >

Image prompt weight relative to text weight. The higher the iw value, the closer the final result will resemble the image.

Use 2 if you want the result to look close to the original image. It is great for [creating your own](https://medium.com/design-bootcamp/turn-your-photo-into-captivating-anime-avatar-with-midjourney-885ee322de3b) avatar and replicating images.

[How to use Midjourney to Replicate Your ImagesLearn How to use /Describe and Image Prompt](https://bootcamp.uxdesign.cc/how-to-use-midjourney-to-replicate-your-images-59c8a911288e?source=post_page-----27e9975cce9c--------------------------------) [bootcamp.uxdesign.cc](https://bootcamp.uxdesign.cc/how-to-use-midjourney-to-replicate-your-images-59c8a911288e?source=post_page-----27e9975cce9c--------------------------------)

### 4\. Stop --stop < 10–100 >

Stop a job partway to create less detailed and blurrier results.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*unXAAkOV7NM6UWW6mT9nIQ.jpeg?table=block&id=f7042abc-f749-4729-9a58-32efcfe27970&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 5\. Stylize --s < 0-1000 >

Application of Midjourney’s default aesthetics including artistic color, composition, and forms. High stylization values create images that are very artistic but less connected to the prompt.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*XEEuLGVeNhml8z_oqjzXtQ.jpeg?table=block&id=55c90843-f35b-4c8c-9b0f-0d5d2ea53539&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 6\. Weird: --w < 0–3000 >

Adds quirky and offbeat qualities to your generated images, resulting in unique and unusual aesthetics.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*fiPAGhlAO7rkeI4XfiyVlg.jpeg?table=block&id=ae8f6b33-4f81-4ea4-b710-a3da7b94d511&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

> Note that using “ — stylize and — weird” together with the same value can result in strange yet pretty images.

### 7\. No: --no \[ \]

Negative prompting, for instance

\--no red

remove the red color from the image.

To eliminate more than one element, separate it with “,” like this

> Your prompt --no item1, item2, item3

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*goU_2YQE1_yhCSrgAbj13A.png?table=block&id=db14c88c-394f-412f-8ad5-2290a8c49cf7&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Prompt: Spiderman — no red

### 8.Seed --seed < 0–4294967295 >

Using the same seed number will produce a similar style.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*XeoebW5eoUdfKPp-JwwzkQ.jpeg?table=block&id=319aac2d-9904-4610-848d-eff724d78f9e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Images with the seed number: 3114655039

9\. Tile:

\--tile

Generate images that can be used to create seamless patterns for print-on-demand products or packaging

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*w6MWzFFzGeCes_GH4kP-ng.png?table=block&id=8a345344-c375-4019-b7ec-34516822071b&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### Other Parameters

Modes:

\--relax,--fast & --turbo

Run a job using Relax/Fast/Turbo Mode.

Quality:

\--q <.25,.5, or 1>

Higher values use more GPU minutes.

Repeat:

\--r < 1–40 >

Create multiple Jobs from one prompt.

[Video](https://medium.com/design-bootcamp/midjourney-v5-3-is-around-the-corner-e988a592e477):

\--video

Create a short video of image creation.

## Part Three: Advanced Commands

### 1\. /blend

Allow you to upload 2–5 images and merge the aesthetics.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*ZSGNXbv4RtEABJJL9q3lUA.jpeg?table=block&id=6f9cbe0b-9568-4c3c-b6ec-35c0dd05dad1&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 2\. /describe

Generate four prompts based on an uploaded image. It allows you to learn more about prompts writing as well!

### 3\. /prefer option:

Create a custom option. Set up parameters that you can add to the end of prompts, making your workflow more efficient.

For example:

/prefer option set

my

\--s 500--ar 16:9

creates an option called "my” that translates to

\--s 500--ar 16:9

.

/imagine prompt: “Cat — my” will become “ Cat — s 500 — ar 16:9” directly

/prefer option list: View current custom options.

/prefer suffix: Specify a suffix at the end of every prompt.

### 4./shorten:

Analyze a prompt and return shorter prompts omitting redundant words

### 5\. /remix:

Remix Mode can alter prompts, parameters, model versions, or aspect ratios in variations. It takes the general composition of your starting image and incorporates it into the new Job. Remixing helps change the image’s setting, lighting, subject, or composition.

## Part Four: Versions and Style

Midjourney provides an easy way for you to switch between various versions and styles either by selecting in the setting panel  or adding a  parameter.

### 1\. Settings

/settings: Using the settings command will open a panel that allows you to switch between version, style, quality, and modes.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*u-GW2VEOHJAq_Gyn0XxAbg.png?table=block&id=b28cae3d-1303-4994-915a-2e404b08259c&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 2\. Changing Parameters

Alternatively, you can switch versions and styles through the use of parameters.

\-v \[1/2/3/4/5/5.1/5.2\]:

Switch between versions

\-style raw:

Reduce default aesthetic ( V5.1 and V5.2 ) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*LLujy9GuxUqtUtKPhGkSDg.jpeg?table=block&id=f2ad91a1-a8e1-4c23-bb53-9ef2167ef03f&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 3\. Niji Styles

Niji Mode is an anime-specific model with a vast knowledge of anime, styles and aesthetics. It comes with three styles aside from the default:

\-style \[cute/ expressive/ scenic\]

Cute: Lovable and delightful

Expressive: A more sophisticated and western style

Scenic: Produces stunning backgrounds and cinematic moments for characters within their imaginative settings

Here is a demonstration of the 4 different styles of Niji Journey V5 with the same prompt:

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*ryuY11L3tD6J1pxSAtq3EA.jpeg?table=block&id=16d4ac9f-f6e9-43bc-945e-aa7ded1cb04d&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Prompt: A shojo anime kitsune girl with a white dragon, in front of a red temple, wonder cultural themes, fantasy — ar 3:2— niji 5 — style <default, expressive, cute, scenic>

## Latest Features of Midjourney

### 1\. Vary (Region) — Inpainting

The “Vary (Region)” option allows you to select and regenerate specific parts of an image. This allows users to remove unwanted objects or fill in missing parts which works similarly as inpainting.

### 2\. Zoom Out

It allows you to expand the canvas of an upscaled image by 1.5x, 2x or in custom aspect while keeping the original content intact.

### 3\. Panning

Panning extends your image in four different directions . You can keep panning multiple times, resulting in a large and detailed panoramic image.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*AdTZ1jFKBe5G3kPjD9Sy4g.jpeg?table=block&id=6d4c2798-fe10-4cba-970c-0e3fcaf7e160&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

While the zoom-out feature allows you to tell a great story, create animation and even create beautiful mockups, the panning feature is great for panoramic images and more creative usage.

### Example Usage of the 3 features

Let’s look at the example below where I regenerated a new scene with the same character

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*GSHdMSAflwF9Py4fjrTbww.jpeg?table=block&id=7a9c67b4-e67e-4983-8e36-973463bd38b4&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

To add more settings, I used “Zoom-out 2x” and pan left with a custom prompt here.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*LvHwweeLiIsXpzIJdnlU9Q.jpeg?table=block&id=aa237fe5-d022-4da6-a188-dd22601e75f6&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

## Part Five: Custom Options

## Prefer option

With /prefer option, you can set up parameters that you can add to the end of prompts quickly and easily, making your workflow much smoother and more efficient.

## How to create a custom option

Type / prefer option set

Select the option, and set a name

Set the value for the option

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*SQGdEuojmic6jVCI_7Yvfw.png?table=block&id=ecf23641-0590-4948-b140-ec27d304fe10&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

By setting this option you just created a command called “IG” that translates to — upbeta — ar 9:16 which is perfect for IG story

## Apply the Set Option to Your Job

After setting the option, it’s time to use it.

Add “ — \[ your option \]” to the end of your prompt.

> /imagine prompt \[ your prompt \] — \[ your option \]

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1256%2F1*EWv1lnSohwJvx8FJw8CKIQ.png?table=block&id=8e86ed8d-5dac-4117-b5f6-7842f7537fe2&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1260&userId=&cache=v2)

By typing /imagine prompt surrealistic bunny — IG, it will be interpreted into

/imagine prompt surrealistic bunny — upbeta — ar 9:16

> Note: You can add additional parameters to the prompt just don’t just the same parameters twice so they don’t clash with each other.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*KaCFos83F_2dM_D3MyBfQw.png?table=block&id=09456854-b47e-4fa4-9663-d1a5abfdb649&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1250&userId=&cache=v2)

Surrealistic bunnies created with MidJourney

You can also save longer prompts like this so you can create similar style each time without having to type or doing “copy and paste”.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*N3n3Plo24HbCde7eiAKiQg.png?table=block&id=21201748-ece5-450e-805c-839130009fbb&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Setting option in MidJourney

After setting the option, you just need to add the option command at then end of the prompt and there you go! No more copy and paste every time.

/imagine prompt hourglass — photorealistic

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*sI9Lhel871o0EojfDPP5qA.png?table=block&id=d9cc32f2-a9bc-481b-9c35-b172892f472c&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Photorealistic hourglass image created with option with MidJourney

## Prefer Suffix

/prefer suffix

With /prefer suffix, you can easily and quickly add a suffix after all prompts — effortless! And if you don’t have a value to use, no problem; just use the command without it to reset.

Example: /prefer suffix — uplight — hd

> Note that only parameters can be used /prefer suffix
> 
> prefer suffix — no cat is accepted
> 
> prefer suffix cat::1 is not accepted

## Delete an Option

To delete an option, just leave the “value” field empty.

Command: /prefer option set < name to delete > and leave the value field blank

## View Your Options

/prefer option list

To see all of them, just use the /prefer option list command — it’s that easy!

You can create up to 20 distinct options!

You can also use /prefer auto\_dm to send completed jobs to Direct Message

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*_pFsjLw0vYdFkd_hycMFdw.png?table=block&id=db0ae9bb-8374-41f9-8583-4dd38628d829&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Hourglass created with MidJourney

As you keep exploring and discovering the features of Midjourney, you’ll want to create even more unique visuals. The capabilities of this AI Art platform are truly remarkable and allow you to unleash your creative potential.

## Part Six: Pan Feature

### How to use Panning?

#### 1\. Generate an image

Generate your image as usual with the “/imagine” command

#### 2\. Upscale the Image

Use the U buttons to upscale your selected image.

#### 3\. Pan with the 4 arrows

Below the image, you will find 4 arrows underneath the zoom-out buttons which you can use to reframe the image.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*EHrVELBix1ff6uv29D0Wyw.jpeg?table=block&id=d6e12f95-1a91-4512-bc62-7e3e68ed01bf&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Panning arrows

### 4\. Extend your image

Clicking an arrow button will extend your image in the corresponding direction

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*aUOyb3KjF1acp9Gn2o_2Wg.png?table=block&id=df3bb3b3-9536-4177-a14e-b8b173d27497&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

An image expanded in different directions

## Captivating Story

Panning is a unique technique that allows you to capture a larger area than a single shot and tell stories in a new and creative way. With this feature, you can capture stunning visuals and create beautiful stories.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*XSj0RyYijBBNZIEE3hTkBw.png?table=block&id=9cb0ec2e-1a66-4973-8c7b-3d8a07041e1d&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Girls with Bears in the Woods

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*Z8d8EHps2vdfuhwyxGBjkg.png?table=block&id=470ff0dd-8a13-4f4c-92d1-8ab78a1e42ea&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

A group of beautiful witches gathering under the moonlit sky to enjoy cakes

## Pan With New Prompt

Sometimes, you may see ‘repetition’ when panning, but this can be avoided by changing your prompt to include new details.

To do that, you will need to turn on the Remix Mode by typing /settings and clicking “Remix Mode”.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*SxtZawLRGlWycLwNRNMrSQ.png?table=block&id=d1bcbfdb-780e-49ec-bb6a-5b1cd6e6475a&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Turn on the “Remix Mode”

Whenever you press the arrow buttons for panning, a text box will now pop up simultaneously for you to customize your prompt as you extend your image.

Take this as an example:

> Prompt: The underwater fantasy, whimsical and intricate architectures, aquamarine, romantic academia, panoramic scale, dreamy pastel palette

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*-lh35UNF2wTaGTaF8fv7yA.png?table=block&id=a2904ef5-1234-400f-bf0a-b0ae37b77e44&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

The underwater fantasy

You will now have the ability to adjust the prompt to incorporate additional context that was absent in the original shot. This works similarly to Custom Zoom.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*eCgiHPXnwAumCnr5jHGEdA.png?table=block&id=8cb96bc6-c9bc-46ed-9c3a-1cd8c4451427&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Pan with New Prompt

Let’s dive deep into the enchanted ocean and discover what’s deep down.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*tkO2hJAcQcQrrU-ICK0b0A.png?table=block&id=f2406d45-48fb-41fc-bec3-8e5ddd1b02ce&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

The underwater fantasy

You can pan multiple times to create stunning visuals and beyond! Experiment with combining panning with two new features, Weird and Zoom to create some captivating visuals!

## More Creative Usage of Panning

As you pan out your image, it will keep extending even though the resolution will become very large. You can keep panning multiple times and create stunning visuals and even more!

### 1\. Cosmic & Manga

In addition to captivating stories, the pan-down feature enables you to create anime cosmic or manga that maintains a consistent style.

> Prompt: A manga page of marvel spider man — niji 5 — s 180

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*mkJ_KZhKAS8xoP2uaRQGNA.png?table=block&id=52e08a44-1421-43c5-aa8c-6abd0bf3bb15&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Manga of spider man

### 2\. UI Design

This new feature is great for creating user interface design, such as a landing page.

As you utilize the custom prompt, you can seamlessly add in additional content such as product collection and more by utilizing the pan-down feature.

Take this as an example:

> Prompt: UI interface design of a floral shop with dreamy flowers, landing page, dreamy pastel color palette, Victo Ngai style — ar 4:3

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*SillKEobvx44ScyJ8XA6Ag.png?table=block&id=87483a48-ba64-42b6-a879-af60ae5c9f32&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

UI interface design of a floral shop

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*Jh8eSP9MliZ2G8fk2kKUHw.png?table=block&id=409fede9-f312-47a6-8e97-0d6a9e9baed6&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### 3\. Interior and Architectural Design

By modifying the prompt, you have the ability to alter the design, providing a variety of inspirations.

> Prompt: Interior of a pavilion, by Kengo Kuma, natural elements, botanical surroundings gardens — ar 16:9

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*LDl6L_RS6LIvas7sm_0N_w.png?table=block&id=355bc257-b265-4ecc-a7a4-f808fd4b7905&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Interior of a pavilion

Look at this example below and see the difference between sleeping pods and indoor library

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*CXOoS6AzeTvewAhazLD8yQ.png?table=block&id=04e9427e-2357-4ab0-b052-8b217b38da7e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Custom Prompt: With sleeping pods

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*YaCKmrRR8CEn5ej7Jcdl8Q.png?table=block&id=301733bf-52ce-461b-82c1-b584521faed1&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Custom Prompt: With an indoor library

## Limitation

Panning is an exciting feature, but it does come with some limitations.

No Variations: Panned images cannot have variations.

Decreased Resolution: Zooming out on a panned image may result in decreased resolution.

It’s not possible to pan both horizontally and vertically on the same image.

The amount of panning cannot be controlled

## Part Seven: Style Tuner

Personalize the appearance of your Midjourney images using the Style Tuner. Use the /tune command to generate a range of sample images showing different visual styles based on your prompt. Choose your favorite images, and you'll receive a unique code you can use to customize the look of future Jobs.

/tune

 and codes are only compatible with  [Midjourney Model Version 5.2](https://docs.midjourney.com/models)

/tune

 and codes are  not  compatible with  [Niji Model Versions](https://docs.midjourney.com/models)

/tune

is only available while in Fast Mode.

\-style

parameters created with the Style Tuner are compatible with

\-stylize

values between 20–1000.

### How to Use the Style Tuner

#### 1\. Generate Your Custom Style Tuner

Create a Style Tuner page using the

/tune

command.![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

#### 2\. Select Your Preferred Options

Style Directions: Choose the number of image pairs you want to see in your Style Tuner (16, 32, 64, or 128 pairs).

Default Mode: Select the [style](https://docs.midjourney.com/style) mode for your sample images (Default or Raw). If you typically do not use the --style raw parameter with your prompts, choose "default."

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

Use an Exisiting Style Tuner

If another user has previously generated a Style Tuner with your prompt, you will receive a link to that Tuner. Click the link to access the existing Style Tuner. Using a previously generated Style Tuner does not use your subscription's GPU minutes.

#### 3\. Submit your Job

Click the

Submit

button.

Confirm your submission.

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

Your Style Tuner generates a pair of images for each Style Direction. A Style Tuner with 16 directions will generate 32 images. A Style Tuner with 128 directions will generate 256 images. Generating these images uses your subscription's Fast GPU time.

#### 4\. Open Your Custom Style Tuner

When your Style Tuner is ready, the Midjourney Bot will send you a [direct message](https://docs.midjourney.com/direct-messages) with a link to your Tuner.

Click the link to open your Style Tuner in your web browser.

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

Try this Style Tuner: [https://tuner.midjourney.com/ejYLCOY](https://tuner.midjourney.com/ejYLCOY)

#### 5\. Select images

Your Style Tuner will show rows of image pairs, each representing a distinct visual direction for your prompt. Click on the image you prefer in each pair. If you don't feel strongly about either image, leave the empty middle box selected.

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

#### 6\. Copy Your Code

The Style Tuner generates a code you can add to your prompts with the

\--style <code>

Parameter. [Learn more about parameters.](https://docs.midjourney.com/parameter-list)

To copy your prompt and Parameter

Find your customized code at the bottom of the page.

Click the

Copy

button to copy your original prompt and newly generated

\-style <code>

parameter.![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

#### 7\. Generate an Image

Return to Discord

Use the

/imagine

command and paste your copied prompt and

\-style <code>

parameter into the

prompt

field.

Generate your image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

#### 8\. Use Additional Midjourney Tools

Take your image further by using other Midjourney tools like [Upscale](https://docs.midjourney.com/upscalers), [Pan](https://docs.midjourney.com/pan), [Zoom-Out](https://docs.midjourney.com/zoom-out), [Remix](https://docs.midjourney.com/remix), or  [Vary-Region](https://docs.midjourney.com/vary-region).

#### 9\. Experiment and Explore

Use your style code with a new prompt:

The Style Tuner you create uses your initial prompt to create sample images and help you visualize the impact of your choices. However, the generated codes can be used with any prompt. Remember that styles and prompts always work together to generate an image, so a style code may not transfer as intended to other prompts.

Experiment: Style codes and prompts interact in complex ways. A code may have a strong effect on one prompt and a subtle effect on a similar prompt. The images you choose in your Style Tuner can combine in unexpected and creative ways. Use style codes as a tool to explore new looks and visuals.

Generate more codes: You can return to your Style Tuner page at any time to change your selections and create new codes.

Find a Style Tuner page: Find the Style Tuner page for any style code by adding it to this URL: https://tuner.midjourney.com/code/StyleCodeHere.

#### 10\. Save and Reuse Your Codes

Use the

/settings

 command and turn on 

Sticky Style

. Sticky Style will save the last

\-style

parameter used in your personal suffix, so you don't have to repeat the code on future prompts. Change codes by using a new

\-style

 or unselecting 

Sticky Style

.

Use [custom options](https://docs.midjourney.com/docs/settings-and-presets#custom-preferences) to store your favorite codes.

Or, [create your own Discord server](https://support.discord.com/hc/en-us/articles/204849977-How-do-I-create-a-server-) to organize your images, prompts, image references, and Style Tuner codes.

### Style Tune Examples

prompt

vibrant california poppies

All images made with style codes made using using this [Style Tuner](https://tuner.midjourney.com/ejYLCOY)

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

### Random Codes

Use the

\--style random

parameter to apply a random 32 base styles Style Tuner code to your prompt. You can also use

\--style random-16

,

\--style random-64

or

\--style random-128

to use random results from other lengths of tuners.

### Combine Codes

Combine multiple codes in one parameter with a hyphen,

\--style code1-code2

.Combine multiple codes and style raw:

\--style raw-code1-code2

### Style Tuner and --stylize

The [\--stylize](https://docs.midjourney.com/stylize) [parameter](https://docs.midjourney.com/stylize) adjusts the influence of the --style parameter on your generated images. If you're not seeing the desired effect from your code, consider combining it with higher stylization values, like

\--stylize 250

, or

\--stylize 500

.

#### Comparison

prompt

vibrant California poppies --style fdeQ4zOX5jd --stylize 250

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

\-stylize 20

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

\-stylize 100 (default)

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

\-stylize 250

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

\-stylize 750

### Style Raw

Combine your custom style code with Midjourney Style Raw by using

\--style raw-<code>

.Example: To use Style Raw and

\--style fjo5S8BgMoV

use

\--style raw-fjo5S8BgMoV

.

### Technical Details

/tune

is compatible with prompts that include the following:

\-aspect

\-chaos

\-tile

[multi prompts](https://docs.midjourney.com/multi-prompts)

/tune

 and style codes are not compatible with  [image prompts](https://docs.midjourney.com/image-prompts) that do not include a text prompt.

If your

/tune

 command does not return a clickable link, check that  Embeds and Link Previews  is enabled in your Discord  App Settings

![](https://godmodechatgpt.notion.site/yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)

Go online to view this image

## Part Eight: Consistent Characters/Objects

Use —cref \[IMAGE URL\] and —cw \[0-100\]

Thankfully, creating consistent characters in Midjourney is now easier than ever.

This is how you do it:

#### Step #1: Create the Character in Midjourney You Want to Use

You can’t go anywhere until you have the character created, to begin with, to use as your base image. For now, you need to use something you made in Midjourney and cannot use an image of yourself or any dumb picture you have on your local computer. Sorry.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-base-image.jpg?table=block&id=e8d78510-ce63-48e4-a679-10cdffe2f7ab&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### Step #2: Go to “Copy Link”

Right-click on your character’s image and click on “ Copy Link ”.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-copy-link.jpeg?table=block&id=9f88cd1b-18b3-4b17-9a32-e2d0d6aeebd2&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### Step #3: Run a Prompt with the CREF Parameter

Now, create a prompt describing the new scene and art style you want your character to be placed in. At the end of your prompt, insert the “ –-cref <<image URL> ” and “ –cw <<weight>> ”.

The <<image URL>> will just be the URL you copied from step #2. You’ll notice that in the screenshot, the URL is shorter than the one you copied from step #2. Stop trembling. It’s okay. What happened is that Midjourney shortened the URL after the prompt was run.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-cref-cw-parameters-consistent-characters-1344x917.jpeg?table=block&id=67a33525-6b07-4eef-8f39-88cefe4a3b9d&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Nice!

#### Step #4: Create a Shortcut for Your Character via “Prefer Option Set” (OPTIONAL)

If you want to speed up your character creations moving forward (and I’m sure you do), then you can create a quick shortcut to your character.

To do this, type “ /prefer option set ” into the Discord search bar.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-prefer-option-set-edited.jpeg?table=block&id=ff737c8c-d336-4082-8031-7d36ade6ef5b&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Then, click “ +1 more ”, then click “ value ”.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-plus-one-more-value.jpeg?table=block&id=8f104d4e-0e8b-47ba-90c3-3d8385909edd&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

In “ value ”, paste the URL to the base image of your character. In “ option ”, name it something memorable. I named it “Dick”.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-option-and-value-1344x177.jpeg?table=block&id=0596e196-2cbb-4e7f-bf67-422dc2f227fd&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

You should now see a screen that looks like this, which shows you that you set up your shortcut correctly. Damn you’re good.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-custom-option-set-1344x259.jpeg?table=block&id=1e055bfa-b839-4258-a6b3-5e2b45f8a4be&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Now, I can use “Dick” in my prompt to trigger my character whenever I want, without having to copy/paste the base image URL over and over. It’s a time saver. Cool, right?

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fmidjourney-shortcut-in-prompt-1344x138.jpeg?table=block&id=545d6d2c-920e-43ca-ae46-d749f946ae7e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Here’s the image that resulted from that prompt:

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-corn-field.jpeg?table=block&id=d129d4d7-371b-4193-bb34-50fbd1c32057&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### The Quirks: What to Know When Working with Consistent Characters

Right out of the gate, there are some things you need to keep in mind going into this new game. Although consistent character creation is amazing, they aren’t perfect (yet). There are also some nuances you need to be aware of, so pay attention.

Experiment with different Character Weight values via the Character Weight (–cw) parameter for the best results.

Be patient. You may not get exactly what you want on the first try, okay? That should be your mindset going into Midjourney anyway, but in this case, I need to stress it harder.

Get creative. I shouldn’t need to tell you this, but it’s really key here. Your characters can be placed in any environment or art style imaginable. This unlocks the door to whatever the hell you want to make. Cool, right?

Limitations:

The feature doesn’t perfectly replicate clothing or accessories, limiting detailed character consistency. It’s more about the face and “overall” look of the clothes/accessories. For now.

Consistent Characters works best with native Midjourney images, not with real-world photographs or pictures of your ugly face via an image prompt. That may be coming in the future though, just don’t place your bets on it.

### Midjourney Consistent Character Prompts & Examples:

#### 1\. Meet Dick, Your Friendly New Starbucks Barista

(Copy/Paste into Midjourney)

A man working at Starbucks and yelling loudly –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-starbucks.jpeg?table=block&id=3e9f6ca7-ea89-47af-bf16-bbdf43949107&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 2\. Dick Got Airdropped into The Middle of Nowhere and Turned into a Video Game Character

(Copy/Paste into Midjourney)

16-bit video game action hero character, pixel art, midnight sky –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-pixel-art.jpeg?table=block&id=a4067dd1-d23c-4439-8be5-1b07c9abd4ff&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 3\. Dick Got Wrongfully Invited to a Block Party Full of Characters in the Ghetto

(Copy/Paste into Midjourney)

A man partying at a huge block party in the ghetto with black people, drinking, dancing, smoking, lights –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-party.jpeg?table=block&id=c376539d-ce87-4a91-86bb-0f43399d5147&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 4\. Dick is an Arsonist and a Communist

(Copy/Paste into Midjourney)

A man celebrating in the Detroit ghetto with his fist in the air –cref https://s.mj.run/3HsTAZovI-8 –cw 80 –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-fist-pump.jpeg?table=block&id=ae51fa89-27d4-4f10-8ab8-fa1540f7dcf5&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 5\. Dick is a 1990’s Cartoon Character

(Copy/Paste into Midjourney)

1990’s cartoon character in the detroit ghetto, illustration –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-cartoon-ghetto2.jpeg?table=block&id=9a0e062c-bfee-46a8-a2d6-6d537f6e8af1&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 6\. Dick Trying Out for a High School Baseball Team at Age 39

(Copy/Paste into Midjourney)

A 39 year old man playing baseball for a high school team –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-baseball.jpeg?table=block&id=5553021a-1826-45cf-9a5b-303990ecd8a3&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 7\. Dick is a Banksy Art Character

(Copy/Paste into Midjourney)

Painting of a man in the style of Banksy –ar 2:3 –cref https://s.mj.run/3HsTAZovI-8 –cw 100 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-banksy.jpeg?table=block&id=a522635e-6ae4-49bc-a702-a7066d9bfc94&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

#### 8\. Action Figure Dick

(Copy/Paste into Midjourney)

An action figure of a man in a suite –ar 2:3 –cref https://s.mj.run/3HsTAZovI-8 –cw 80 –no fire –v 6.0

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fruntheprompts.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fdick-smith-action-figure.jpeg?table=block&id=ae23e3b2-4dbe-4868-b121-ecc8f51d5893&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

### Midjourney Cheatsheets

### Midjourney + Text Generation

### Midjourney + Mockup Designs

### ChatGPT + Midjourney Prompt Generator

This guide is designed to teach you how to use ChatGPT to create and explore Midjourney prompts!

If you find this useful, consider getting my Complete AI Bundle:

30,000+ AI Prompts for ChatGPT, Claude & Midjourney AI

How-to guides, prompts & instructions

Every product I ever created

Click below to get lifetime access & updates:

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F0*rlmwZq1LCjfPgIL1.png?table=block&id=33796935-afcb-4489-bea1-3253e9478172&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

There already are dozens of prompts that let ChatGPT produce amazing templates for Midjourney imagery. However, in this article, I want to show you how to create these prompts yourself, tailored to your personal use case, keeping full control while turning ChatGPT into a Midjourney Prompt Generator.

## Step 1: Choose a prompt template

There are endless ways to structure a Midjourney prompt. Depending on your use case, you can modify the templates to your liking or create your own ones.

One way or another, you need to find a structure that ChatGPT can work with. For this tutorial, we will use:

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*CVMvKN5zOQFyZRaJAG7DWw.png?table=block&id=f5c9136c-40f6-4993-a773-33a20f024d58&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

Basic Midjourney Prompt Anatomy

## Step 2: Creating a ChatGPT prompt

First, we’ll create a prompt that allows ChatGPT to iterate over our ideas and create image prompts that relate to it. Note that this is a very basic way to do it. Once you get the idea, please do explore your own creative ways to apply this to your use cases and image ideas.

We know that a solid and effective ChatGPT prompt has two main ingredients:

an instruction

and context

Let’s start with the context part. For starters, we simply describe the prefix, scene, and suffix from the above prompt anatomy:

Plain Text

Copy

This is the basic prompt anatomy for image generation with Midjourney: /imagine prompt: PREFIX, SCENE, SUFFIX PREFIX defines the image's medium and style SCENE defines the content SUFFIX modulates PREFIX and SCENE

In the next step, we combine the context with an instruction on what ChatGPT should actually do with all the information:

Plain Text

Copy

This is the basic prompt anatomyfor image generation with Midjourney: /imagine prompt: PREFIX, SCENE, SUFFIX PREFIX defines the image's medium and style SCENE defines the content SUFFIX modulates PREFIXand SCENE ### Create10 prompts that illustrate the theme "father-son relationship"

(note: we use “###” to separate the context from the instruction, which makes it easier for the model to follow)

In return, ChatGPT will give us something like this:

Plain Text

Copy

1\. /imagine prompt: Vintage sepia photograph, A father teaching his son how to ride a bicycle in a park, With a sense of warmth and nostalgia. 2. /imagine prompt: Renaissance oil painting, A king passing his crown to his son in a lavish throne room, With an atmosphere of grandeur and responsibility. 3. /imagine prompt: Animated family movie style, A dad and son building a rocket ship in their backyard, Infused with a sense of adventure and bonding. 4. /imagine prompt: Watercolor sketch, A father and son fishing on a quiet lake as the sun sets, With a serene and tranquil atmosphere. 5. /imagine prompt: Comic book art, A superhero father with his sidekick son saving the day, With dynamic action and a sense of camaraderie. 6. /imagine prompt: Traditional Japanese Ukiyo-e style, A samurai father and his young son practicing martial arts under a cherry blossom tree, With a sense of discipline and tradition. 7. /imagine prompt: 90s sitcom illustration, A dad and son laughing together while attempting to fix a car in a garage, With a vibe of humor and togetherness. 8. /imagine prompt: Modern abstract art, An interpretation of the emotional bond between a father and son, With swirling colors that convey deep connection and love. 9. /imagine prompt: Children’s book illustration, A boy on his father’s shoulders, looking up at the stars, With a sense of wonder and shared curiosity. 10. /imagine prompt: Sci-fi concept art, A father and son in futuristic gear exploring an alien planet, With a sense of discovery and shared adventure.

We can now simply copy/paste these prompts into Midjourney. Here are some of the results:

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*7H-JOCkdC51J7aYV.png?table=block&id=76691e2d-c638-4052-80f5-5782e6bd6679&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1000&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*daDknSGHvkhABC7C.png?table=block&id=90867cbb-ede4-4eaa-9b50-428581455abf&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1000&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*58Oee-gw4t1U7Qcb.png?table=block&id=7835f2ed-0932-43cd-af9c-fdeea69fe646&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1000&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*82twmBlJRkwhbKBV.png?table=block&id=b2aeafe8-b4df-4c3d-b1ba-e1ca4e8a1801&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1000&userId=&cache=v2)

## Step 3: Exploring ideas

See how you can use a single prompt to easily iterate over ideas and explore combinations of styles and tropes?

Here’s an example of how to further explore these with a follow-up prompt:

Plain Text

Copy

keep theme, set prefix to "modern abstract art", scene should contain metaphors (without explanations), use suffix to implement lens and camera types. list 5 prompts

## Results:

Plain Text

Copy

/imagine prompt: Modern abstract art, An anchor and a soaring kite entwined, With a fisheye lens capturing the circular interplay of stability and freedom. /imagine prompt: Modern abstract art, A torch casting shadows of successive taller figures, With a tilt-shift lens emphasizing the central flame as the source of growth. /imagine prompt: Modern abstract art, Rivers of color weaving from a storm to a calm sea, With a wide-angle lens to envelop the viewer in the journey. /imagine prompt: Modern abstract art, A lighthouse beam morphing into a tapestry of music notes, With a telephoto lens bringing focus to the distant harmony. /imagine prompt: Modern abstract art, Clock gears turning into an unfolding map, With a macro lens capturing the intricacies of time and adventure's intertwinement.

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*y-NuRZxsE3oZeV1A.png?table=block&id=f2439060-1a99-40c6-b9ce-a6be13b39992&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*V9D-aGXoyidcFwYC.png?table=block&id=8ecf1926-bd36-45e7-9cd7-eb36b0aa731e&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*WRD_bDqvJ4DHanDz.png?table=block&id=404a3a0b-e955-489c-bec8-c55c47428697&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2)

## Step 4 (optional): Optimizing ChatGPT output for batch processing

Now you may not want to copy/paste one prompt after another from ChatGPT to Midjourney. In this case we can use Midjourney’s permutation feature.

### Prompt permutation

We can change the initial prompt to use permutation by explaining the syntax to ChatGPT as follows:

Plain Text

Copy

You can group variations in comma-separated lists like this: {PREFIX 1, PREFIX 2, PREFIX 3} or {SCENE 1, SCENE 2} or {SUFFIX 1, SUFFIX 2} Important: when using variations, each item in the list has to be a single word or a phrase without comma (otherwise we'd break the syntax)

The new prompt will then read as follows:

Plain Text

Copy

This is the basic prompt anatomy for image generation with Midjourney: /imagine prompt: PREFIX, SCENE, SUFFIX PREFIX defines the image's medium and style SCENE defines the content SUFFIX modulates PREFIX and SCENE You can group variations in comma-separated lists like this: {PREFIX 1, PREFIX 2, PREFIX 3} or {SCENE 1, SCENE 2} or {SUFFIX 1, SUFFIX 2} Important: when using variations, each item in the list has to be a single word or a phrase without comma (otherwise we'd break the syntax) ### Create a prompt that illustrate the theme "father-son relationship". Use 2 variations for prefix and 3 variations for suffix

ChatGPT responds with ready-to-use permutation prompts like this one:

Plain Text

Copy

/imagine prompt: {oil painting, watercolor}, a father teaching his son how to ride a bike in a park, {with a touch of nostalgia, under a warm sunset, captured in a moment of laughter}

If we copy/paste this prompt into Midjourney and confirm it…

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1400%2F1*81Vuzm_aWUeOLt2vTyqlIQ.png?table=block&id=df648095-d8ab-411b-b4e0-6f860b053333&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=1360&userId=&cache=v2)

… all possible combinations will be run automatically:

Plain Text

Copy

oil painting, a father teaching his son how to ride a bike in a park, with a touch of nostalgia oil painting, a father teaching his son how to ride a bike in a park, under a warm sunset oil painting, a father teaching his son how to ride a bike in a park, captured in a moment of laughter watercolor, a father teaching his son how to ride a bike in a park, with a touch of nostalgia watercolor, a father teaching his son how to ride a bike in a park, under a warm sunset watercolor, a father teaching his son how to ride a bike in a park, captured in a moment of laughter

![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*-NjfT-pQ9XMM4Bte.png?table=block&id=6eaa9f86-bb47-4df4-9068-2bbfc4bc63e5&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*m48ZrVyaevMpP7NN.png?table=block&id=f3fe5b8f-e409-4884-8895-93da4006c640&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*0RiyLiPaFql76Xsn.png?table=block&id=e60cbb67-0d53-40b0-8f01-44d280e268b7&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*-cNaMWelpLPHyLGy.png?table=block&id=5a1eeed6-b286-483b-affe-ef212b7d06d0&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*C80ffK3uqvpz1DdP.png?table=block&id=83b10c34-d186-4bc8-a75b-52ffed776b5d&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2) ![](https://godmodechatgpt.notion.site/image/https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A2048%2F0*uaO6duMNkZD2WR1l.png?table=block&id=dd5409ed-49ad-4e11-949d-647b1c5326ce&spaceId=31daba85-b348-4c1f-95de-f68a5f6f3267&width=670&userId=&cache=v2)

If you find this useful, consider getting my Complete AI Bundle:

30,000+ AI Prompts for ChatGPT, Claude & Midjourney

How-to guides, prompts & instructions

Every product I ever created

Get lifetime access & updates:

### Request God of Prompt for more!

> Contact: info@godofprompt.ai

In the infinite realm of AI possibilities, don't forget that the God of Prompt is ever-ready to bestow upon you more wisdom. If your heart desires more prompts, don't hesitate to ask!

Best wishes,

God of Prompt

If you find this useful, consider getting my Midjourney AI Prompt Library:

10,000+ AI Prompts for Midjourney

100+ Prompt Templates

How-to Guides, Tips & Tricks

Get lifetime access & updates:

### Request God of Prompt for more!

> Contact: info@godofprompt.ai

In the infinite realm of AI possibilities, don't forget that the God of Prompt is ever-ready to bestow upon you more wisdom. If your heart desires more prompts, don't hesitate to ask!

Best wishes,

God of Prompt