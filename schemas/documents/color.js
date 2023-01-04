export default {
  name: "customColor",
  title: "Color",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Color name",
      type: "string",
      description: "Give your color a name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "value",
      title: "Color value",
      description: "Pick your color",
      type: "color",
      validation: (Rule) => Rule.required(),
    },
  ],
};
