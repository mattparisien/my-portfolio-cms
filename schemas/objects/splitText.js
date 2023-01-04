//superText.js
import { BsJustify } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "splitText",
  type: "object",
  title: "Split Text",
  icon: BsJustify,
  fields: [
    ...styles,
    {
      name: "textLeft",
      type: "portableText",
      title: "Text",
      description: "Text located on the left",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textRight",
      type: "portableText",
      title: "Text",
      description: "Text located on the right",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "ratio",
      title: "Ratio",
      description:
        "Outlines how much weight should be distributed for each text section (1:1 is an even distribution between the two)",
      type: "string",
      options: {
        list: [
          {
            title: "1:1",
            value: "1_1",
          },
          {
            title: "2:1",
            value: "2_1",
          },
          {
            title: "3:1",
            value: "3_1",
          },
          {
            title: "1:2",
            value: "1_2",
          },
          {
            title: "1:3",
            value: "1_3",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
