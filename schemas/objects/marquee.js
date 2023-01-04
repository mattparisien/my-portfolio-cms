import { validate } from "../../config/validation/validate";
import theme from "./shared/theme";

export default {
  name: "marquee",
  type: "object",
  title: "Marquee",
  fields: [
    theme,
    {
      name: "marqueeItems",
      type: "array",
      title: "Marquee Items",
      description:
        "Add your marquee items (each item added is seperated by a larger space or bullet point)",
      of: [
        {
          title: "item",
          name: "item",
          type: "object",
          fields: [
            {
              type: "string",
              name: "text",
              title: "Text",
              hidden: ({ parent, value }) => !value && parent?.image,
            },
            {
              type: "image",
              name: "image",
              title: "Image",
              hidden: ({ parent, value }) => !value && parent?.text,
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                  validation: (Rule) => validate(Rule, "alt"),
                },
              ],
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
};
