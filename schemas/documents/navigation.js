import { GrNavigate } from "react-icons/gr";

export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  icon: GrNavigate,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "navId",
      type: "slug",
      title: "Navigation Id",
    },
    {
      name: "items",
      type: "array",
      title: "Navigation items",
      validation: (Rule) => Rule.min(1).max(6),
      of: [{ type: "navItem" }],
    },
  ],
};
