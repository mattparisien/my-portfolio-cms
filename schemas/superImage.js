//superImage.js
import { validate } from "../config/validation/validate";
import { BsFillImageFill } from "react-icons/bs";

export default {
  title: "Image",
  name: "superImage",
  type: "image",
  icon: BsFillImageFill,
  fields: [
    {
      name: "backgroundColor",
      type: "string",
      title: "Background Color",
      options: {
        list: ["light", "dark"],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Alternative Text",
      name: "alt",
      type: "string",
      validation: (Rule) => validate(Rule, "alt"),
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
