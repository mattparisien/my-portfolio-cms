const aspectRatios = [
  {
    title: "Square",
    value: "1/1",
  },
  {
    title: "Full (100% height)",
    value: "full",
  },
  {
    title: "Screen (100vh)",
    value: "screen",
  },
  {
    title: "Landscape 3/2",
    value: "3/2",
  },
  {
    title: "Landscape 16/9",
    value: "16/9",
  },
  {
    title: "Landscape 5/4",
    value: "5/4",
  },
  {
    title: "Portrait 4/5",
    value: "4/5",
  },
  {
    title: "Portrait 9/16",
    value: "9/16",
  },
  {
    title: "Portrait 9/13",
    value: "9/13",
  },
  {
    title: "Preserve aspect ratio",
    value: "preserve",
  },
];

const hiddenRule = (doc) => {
  return (
    doc.modules.modules.filter(
      (mod) => mod._type === "grid" && mod.style === "masonry"
    ).length > 0
  );
};

export default {
  name: "figure",
  title: "Figure",
  type: "object",
  validation: (Rule) =>
    Rule.custom((self, context) => {
      if (self.type === "image" && !self.image) return "Please add an image";
      if (self.type === "video" && !self.video) return "Please add a video";
      return true;
    }),
  fields: [
    {
      title: "Aspect Ratio",
      type: "string",
      name: "aspect",
      options: {
        list: [...aspectRatios],
      },
    },
    {
      title: "Parallax?",
      name: "parallax",
      type: "boolean",
      hidden: ({ document }) => hiddenRule(document),
    },
    {
      type: "string",
      title: "Type",
      name: "type",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {
            title: "Image",
            value: "image",
          },
          {
            title: "Video",
            value: "video",
          },
        ],
        layout: "radio",
      },
    },
    {
      type: "image",
      name: "image",
      title: "Image",
      hidden: ({ parent }) => parent.type && parent.type !== "image",
    },
    {
      type: "file",
      name: "video",
      title: "Video",
      hidden: ({ parent }) => parent.type && parent.type !== "video",
      options: {
        accept: ".mov, .mp4",
      },
    },
  ],
};
