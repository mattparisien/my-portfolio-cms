export default {
  name: "card",
  title: "Card",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "link",
      name: "link",
      type: "reference",
      to: [{ type: "project" }],
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
    {
      type: "figure",
      name: "figure",
      title: "Figure",
    },
  ],
};
