// showcase.js

import { BsGrid1X2Fill } from "react-icons/bs";

export default {
  name: "showcase",
  type: "object",
  title: "Showcase",
  icon: BsGrid1X2Fill,
  fields: [
    {
      title: "Add items by reference",
      description: "Link your gallery items to your projects",
      name: "items",
      type: "reference",
      to: [{ type: "collection" }],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
