import { BsPaletteFill } from "react-icons/ai";

export default {
  title: "Palette",
  type: "document",
  name: "palette",
  icon: BsPaletteFill,

  fields: [
    {
      type: "string",
      title: "Palette Name",
      name: "paletteName",
      description: "Use numbered palettes if possible (ex: Primary Palette)",
    },
    {
      type: "array",
      title: "Colors",
      name: "colors",
      of: [
        {
          type: "reference",
          title: "Color",
          name: "paletteColor",
          to: [{ type: "customColor" }],
          validation: (Rule) => Rule.required(),
        },
      ],
    },

    // {
    //   type: "object",
    //   title: "Secondary Color",
    //   name: "secondaryColor",
    //   description: "Pick your secondary color",
    //   fields: [
    //     {
    //       type: "string",
    //       name: "name",
    //       title: "Color Name",
    //     },
    //     {
    //       type: "color",
    //       name: "value",
    //       title: "Color Value",
    //     },
    //   ],
    // },
    // {
    //   type: "object",
    //   title: "Accent Color",
    //   name: "accentColor",
    //   description: "Pick your accent color",
    //   fields: [
    //     {
    //       type: "string",
    //       name: "name",
    //       title: "Color Name",
    //     },
    //     {
    //       type: "color",
    //       name: "value",
    //       title: "Color Value",
    //     },
    //   ],
    // },
  ],
};
