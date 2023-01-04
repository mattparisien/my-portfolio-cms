export default {
  name: "seo",
  title: "Seo",
  type: "document",
  fields: [
    {
      type: "string",
      title: "Meta Title",
      name: "metaTitle",
      description: "Enter the title for this page",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      title: "Meta Description",
      name: "metaDescription",
      description: "Enter the description for this page",
      validation: (Rule) =>
        Rule.max(155).error("Meta description must be below 155 characters"),
    },
    {
      type: "string",
      title: "Keywords",
      name: "metaKeywords",
      description:
        "Enter the top keywords for this page (seperate with commas)",
    },
  ],
};
