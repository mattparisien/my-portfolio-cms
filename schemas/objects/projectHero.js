import { BsLightningFill } from "react-icons/bs";

export default {
  name: "projectHero",
  type: "object",
  title: "Project Hero",
  icon: BsLightningFill,

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      type: "string",
      title: "Tagline",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
