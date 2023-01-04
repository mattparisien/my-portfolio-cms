// imageGallery.js

import { BsGrid1X2Fill } from "react-icons/bs";
import { validate } from "../../config/validation/validate";
import styles from "./shared/styles";

export default {
  name: "gallery",
  type: "object",
  title: "Gallery",
  icon: BsGrid1X2Fill,
  fields: [
    ...styles,
    {
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          title: "Image",
          name: "image",
          type: "image",
          options: {
            hotspot: true,
            useOriginalFileName: false,
          },
        },
      ],
    },
    {
      name: "layout",
      type: "string",
      title: "Layout",
      validation: Rule => Rule.required(),
      options: {
        list: [
          {
            title: "Masonry",
            value: "masonry",
          },
          {
            title: "Grid",
            value: "grid",
          },
        ],
      },
    },
    {
      name: "hoverEffect",
      type: "string",
      title: "Hover Effect",
      description:
        "Choose an effect to trigger when someone hovers over a gallery item (optional)",
      options: {
        list: [
          {
            title: "Frame",
            value: "frame",
          },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title} = selection;
      return {
        title: title,
      };
    },
  },
};
