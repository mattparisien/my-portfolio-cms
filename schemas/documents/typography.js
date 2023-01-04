export default {
  title: "Typography",
  type: "document",
  name: "typography",
  fields: [
    {
      name: "fontSize",
      title: "Base Font Size",
      type: "number",
      description: "Value is recorded in pixels (px)",
      validation: (Rule) => Rule.required().min(12).max(24),
    },
  ],
  preview: {
    title: "maxWidth",
  },
};
