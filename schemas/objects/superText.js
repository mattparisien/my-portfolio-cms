//superText.js
import { BsJustify } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "superText",
  type: "object",
  title: "Text",
  icon: BsJustify,
  fields: [
    ...styles,
    {
      name: "align",
      type: "string",
      title: "Text Alignment",
      options: {
        list: [
          {
            title: "Left",
            value: "left",
          },
          {
            title: "Right",
            value: "right",
          },
          {
            title: "Center",
            value: "center",
          },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "text",
      type: "portableText",
      title: "Text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
