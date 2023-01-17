export default {
  type: "document",
  name: "intro",
  title: "Intro",
  fields: [
    {
      type: "string",
      title: "Name",
      name: "name",
      description: "Only used internally",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "array",
      title: "Images",
      name: "images",
      of: [{ type: "image" }],
    },
  ],
};
