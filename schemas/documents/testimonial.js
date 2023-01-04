export default {
  name: "testimonial",
  type: "document",
  title: "Testimonial",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      description:
        "Give your testimonial a title (this field is only used internally for reference)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      type: "portableText",
      description: "Add your testimonial text",
      title: "Text",
      validation: (Rule) => [
        Rule.warning("Please omit the quotation marks"),
        Rule.required(),
      ],
    },
    {
      name: "author",
      type: "string",
      title: "Author",
      validation: (Rule) => Rule.required(),
    },
  ],
};
