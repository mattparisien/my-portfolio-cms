const widthOptions = {
  list: ["1/2", "1/3", "1/4", "3/4", "3/8", "1/16", "3/16"],
};

export default {
  name: "layoutItem",
  title: "Layout Item",
  type: "object",
  fields: [
    {
      title: "Flex basis",
      name: "flexBasis",
      type: "object",
      fields: [
        {
          title: "Desktop",
          name: "desktop",
          type: "string",
          options: { ...widthOptions },
        },
        {
          title: "Laptop",
          name: "laptop",
          type: "string",
          options: { ...widthOptions },
        },
        {
          title: "Tablet",
          name: "tablet",
          type: "string",
          options: { ...widthOptions },
        },
        {
          title: "Mobile",
          name: "mobile",
          type: "string",
          options: { ...widthOptions },
        },
      ],
    },
    {
      type: "array",
      title: "Module",
      name: "module",
      of: [{ type: "figure" }, { type: "textContent" }, { type: "card" }],
      validation: (Rule) => Rule.max(1),
    },
    {
      type: "object",
      name: "color",
      title: "Color",
      fields: [
        {
          type: "color",
          name: "background",
          title: "Background",
        },
        {
          type: "color",
          name: "foreground",
          title: "Foreground",
        },
      ],
    },
  ],
};
