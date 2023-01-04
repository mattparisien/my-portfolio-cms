export default {
  name: "footerBuilder",
  type: "object",
  title: "Footer Builder",
  fields: [
    {
      name: "blocks",
      type: "array",
      title: "Blocks",
      of: [
        { type: "superText" },
        { type: "textWithGraphic" },
        { type: "marquee" },
        { type: "splitText" },
      ],
    },
  ],
};
