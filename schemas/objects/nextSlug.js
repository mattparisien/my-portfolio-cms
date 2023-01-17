export default {
  title: "Next Slug",
  description: "Links to the next path in the collection",
  name: "nextSlug",
  type: "object",
  fields: [
    {
      type: "string",
      title: "Name",
      name: "name",
      description: "Give a name to this module (only used internally)",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      title: "next",
      name: "next",
      readOnly: true,
    },
  ],
};
