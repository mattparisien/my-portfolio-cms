//textContent.js
import { BsJustify } from "react-icons/bs";

export default {
  name: "textContent",
  type: "object",
  title: "Text",
  icon: BsJustify,
  fields: [
    {
      name: "content",
      type: "portableText",
      title: "Text",
      validation: (Rule) => Rule.required(),
    },
  ],
};
