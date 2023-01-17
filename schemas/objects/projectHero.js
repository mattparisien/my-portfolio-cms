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
      type: "portableText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "figure",
      type: "figure",
      title: "Visual",
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
