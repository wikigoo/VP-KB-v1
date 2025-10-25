### Want to influence the content, composition, and colors of your Midjourney creations? Include an image as part of your prompt!

[![image-prompt-header-new.png](https://docs.midjourney.com/hc/article_attachments/35587202934029)](https://docs.midjourney.com/hc/article_attachments/35587202934029)

There are several ways you can use your own pictures when creating prompts with Midjourney. In this article, we'll focus on Image Prompts, but there are also [Style References](https://docs.midjourney.com/hc/en-us/articles/32180011136653), [Omni Reference](https://docs.midjourney.com/hc/en-us/articles/36285124473997), and moodboards using [Personalization](https://docs.midjourney.com/hc/en-us/articles/32433330574221). You can even mix and match to get exactly what you want in your images!

## What are Image Prompts?

Image Prompts let you guide Midjourney by including an image along with your text prompt. Midjourney looks at your image's core elements, and uses it as a source of inspiration for your new and unique image.

#### Three Ways to Use Image Prompts

1. **Single Image Prompt + Text Prompt**  
	Choose an image similar to your vision, then add descriptive text. Your text prompt should include everything you want in the final image, rather than instructions for changing the reference image.
2. **Multiple Image Prompts Without Text Prompt**  
	Upload two or more images *without* text to blend them together—similar to using the [Blend command in Discord](https://docs.midjourney.com/hc/en-us/articles/32635189884557). This is perfect if you want Midjourney to focus on visual elements.
3. **Multiple Image Prompts + Text Prompt**  
	Combine several images with descriptive text for more detailed guidance. Use your text prompt to specify important details not visible in your reference images.

## Using Image Prompts

To add an image to your prompt, start by clicking on the image icon in the Imagine bar. This opens the images panel, allowing you to upload new images or pick from those you've already uploaded. You can even select multiple images to use in your prompt!

[![web-image-prompt.png](https://docs.midjourney.com/hc/article_attachments/32045262768141)](https://docs.midjourney.com/hc/article_attachments/32045262768141)

Click your image in the uploads library to automatically add it as an Image Prompt. You can also drag and drop your image into any of the image sections to use it in different ways. To remove your image from the Imagine bar, hover your mouse over it and click the X icon.

If you want to use your images with multiple prompts, click the lock icon to keep your images pinned to the Imagine bar.

**Image Reference Types:**  
[Starting Frame](https://docs.midjourney.com/hc/en-us/articles/37460773864589)  
Image Prompt  
[Style Reference](https://docs.midjourney.com/hc/en-us/articles/32180011136653)  
[Omni Reference](https://docs.midjourney.com/hc/en-us/articles/36285124473997) (replaces [Character Reference](https://docs.midjourney.com/hc/en-us/articles/32162917505293))

To use Image Prompts in Discord, paste your image URL at the beginning of your text prompt. If you want to use multiple images, separate each URL with a space. To easily use multiple images without a text prompt, check out the [Blend command](https://docs.midjourney.com/hc/en-us/articles/32635189884557).

[![discord-image-prompt.png](https://docs.midjourney.com/hc/article_attachments/32045557877901)](https://docs.midjourney.com/hc/article_attachments/32045557877901)

It's important to ensure that you have a valid image URL, meaning the image should already be online. If your image is stored on your computer or device, you can [host it on Discord](https://docs.midjourney.com/hc/en-us/articles/32558957919117) to generate an image URL.

Midjourney uses Image Prompts and references as inspiration to guide new creations, not to copy them exactly. If you're looking to make precise changes on your own images, check out the [Editor](https://docs.midjourney.com/hc/en-us/articles/32764383466893).

## Image Weight

If you want more control over how much your Image Prompt affects the final image, try using the image weight parameter `--iw`.

If you don't set an `--iw` value, Midjourney will use the default setting. By choosing a higher weight, your Image Prompt will have a bigger impact on the finished image.

Remember, different [Midjourney versions](https://docs.midjourney.com/hc/en-us/articles/32199405667853) may have different image weight ranges.

|  | Version 7 | Version 6 | Niji 6 |
| --- | --- | --- | --- |
| Image Weight Default | 1 | 1 | 1 |
| Image Weight Range | 0 - 3 | 0 - 3 | 0 - 3 |

- [
	## More Information
	](https://docs.midjourney.com/hc/en-us/articles/#zp-2-0)
	• For your prompts to work, you need either multiple Image Prompts or a combination of one Image Prompt and a text prompt.  
	• Your image file should end in.png,.gif,.webp,.jpg, or.jpeg.  
	• For the best results, crop your image to match the aspect ratio of your final image.  
	• Prompts that only use images and no text are not compatible with the `--stylize` or `--weird` parameters.

Need Help Getting Started?  
  
[Getting Started Guide](https://docs.midjourney.com/hc/en-us/articles/33329261836941)