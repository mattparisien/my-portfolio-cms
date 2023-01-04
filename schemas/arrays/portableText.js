import { validate } from "../../config/validation/validate";

// portableText.js
export default {
  name: "portableText",
  type: "array",
  title: "Content",
  of: [
    {
      type: "block",
      marks: {
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
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
        storeOriginalFileName: false,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      type: "quote",
      title: "Quote",
      name: "quote",
    },
  ],
};
