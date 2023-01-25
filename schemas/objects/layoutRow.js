const layoutOptions = {
  gutter: ["xs", "sm", "md", "lg", "xl"],
  alignItems: ["start", "center", "end"],
  justifyContent: ["start", "center", "end", "between", "around", "evenly"],
};

export default {
  type: "object",
  title: "Layout Row",
  name: "layoutRow",
  fields: [
    {
      title: "name",
      name: "internalName",
      type: "string",
      initialValue: "Row",
      hidden: true,
    },
    {
      type: "string",
      title: "Align Items",
      name: "alignItems",
      description: "How the items are aligned vertically",
      options: {
        list: [...layoutOptions.alignItems],
      },
    },
    {
      type: "string",
      title: "Justify Content",
      name: "justifyContent",
      description: "How the items are distributed horizontally",
      options: {
        list: [...layoutOptions.justifyContent],
      },
    },
    {
      type: "string",
      title: "Gutter",
      name: "gutter",
      description: "The vertical spacing between each row",
      options: {
        list: [...layoutOptions.gutter],
      },
    },
    {
      type: "array",
      title: "Layout Item",
      name: "items",
      of: [{ type: "layoutItem" }],
    },
  ],
  preview: {
    select: {
      title: "internalName",
      media: "items[0].module[0].image.asset"
    },
  },
};
