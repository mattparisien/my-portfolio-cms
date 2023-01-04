//statistics.js

import { BsReception4 } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "statistics",
  title: "Statistics",
  type: "object",
  icon: BsReception4,
  fields: [
    ...styles,
    {
      name: "statistics",
      type: "array",
      title: "Statistics",
      validation: (Rule) =>
        Rule.custom((name, context) => {
          if (context.parent.statistics.length <= 1) {
            return "You must add at least 2 statistics";
          }

          if (context.parent.statistics.length > 4) {
            return "Max number of statistics is 4";
          }

          return true;
        }),
      of: [
        {
          name: "item",
          type: "object",
          title: "Item",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              type: "string",
              title: "Description",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
