// imageGallery.js

import { BsGrid1X2Fill } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "linkedGallery",
  type: "object",
  title: "Linked Gallery",
  icon: BsGrid1X2Fill,
  fields: [
    ...styles,
    {
      name: "items",
      type: "object",
      title: "Items",
      fields: [
        {
          title: "Add items by reference",
          description: "Link your gallery items to an existing collection",
          name: "referenceItems",
          type: "reference",
          to: [{ type: "collection" }],
          hidden: (context) => context.parent && context.parent.manualItems,
        },
      ],
    },
    {
      name: "layout",
      type: "string",
      title: "Layout",
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
      initialValue: "Grid",
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
  },
};
