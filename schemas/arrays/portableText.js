import { validate } from "../../config/validation/validate";

// portableText.js
export default {
  name: "portableText",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
      styles: [
        { title: "Paragraph Small", value: "p-sm" },
        { title: "Paragraph Medium", value: "p-md" },
        { title: "Paragraph Large", value: "p-lg" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Indent", value: "indent" },
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
          { title: "Code", value: "code" },
          { title: "Highlight", value: "highlight" },
        ],
        annotations: [
          {
            name: "link",
            type: "object",
            title: "External link",
            fields: [
              {
                name: "href",
                type: "url",
                title: "URL",
              },
              {
                title: "Open in new tab",
                name: "blank",
                description: "Read https://css-tricks.com/use-target_blank/",
                type: "boolean",
              },
            ],
          },

          {
            name: "emailLink",
            type: "object",
            title: "Email link",
            fields: [
              {
                name: "email",
                type: "string",
                description:
                  "Please enter the e-mail address you want to link to",
                validation: (Rule) => Rule.required(),
              },
              {
                name: "subject",
                type: "string",
                description:
                  "Enter the subject line you want to insert automatically when someone clicks this line (optional)",
              },
            ],
          },
        ],
      },
    },
    {
      name: "figure",
      type: "figure",
      title: "Figure",
    },
    {
      type: "quote",
      title: "Quote",
      name: "quote",
    },
    {
      type: "textAlignment",
      title: "Text Aligment",
      name: "textAlignment",
    },
  ],
};
