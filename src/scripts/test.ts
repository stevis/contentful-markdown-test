import { richTextFromMarkdown } from "@contentful/rich-text-from-markdown";

export const test = async () => {
  const richText = await richTextFromMarkdown("# Hello world");
  console.log(richText);

  return richText;
};
