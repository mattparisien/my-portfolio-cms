export default {
  title: "Text Alignment",
  name: "textAlignment",
  type: "object",
  fields: [
    {
      title: "Content",
      name: "text",
      type: "portableText",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Alignment",
      name: "alignment",
      type: "string",
      options: {
        list: [
          { title: "Left", value: "left" },
          { title: "Right", value: "right" },
          { title: "Center", value: "center" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
};
