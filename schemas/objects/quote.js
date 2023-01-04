export default {
  name: "quote",
  type: "object",
  title: "Quote",
  fields: [
    {
      name: "text",
      type: "text",
      title: "Text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "author",
      type: "string",
      title: "Author",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
