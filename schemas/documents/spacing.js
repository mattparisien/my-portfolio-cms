
export default {
  title: "Spacing",
  type: "document",
  name: "spacing",
  fields: [
    {
      name: "maxWidth",
      title: "Page Width (Max)",
      type: "number",
      description: "Value is recorded in pixels (px)",
      validation: (Rule) => Rule.required().min(800).max(3000),
    },
    {
      name: "margin",
      title: "Site Margin",
      type: "number",
      description: "Value is in viewport width (vw)",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0).max(12),
    },
  ],
  preview: {
    title: "maxWidth"
  }
};
