import React from "react";
import { ImMinus } from "react-icons/im";
import footerBuilder from "../arrays/footerBuilder";

const Icon = () => <ImMinus />;

export default {
  name: "footer",
  title: "Footer",
  icon: Icon,
  type: "document",
  fields: [
    {
      title: "Footer Title",
      name: "title",
      type: "string",
      description: "Used only internally in the CMS",
    },
    {
      name: "theme",
      type: "reference",
      title: "Theme",
      description: "Pick one of your premade themes for this block",
      to: [{ type: "theme" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "builder",
      type: "footerBuilder",
      title: "Footer Builder",
      description: "Build your footer's interface with reusable blocks",
    },
  ],
  preview: {
    select: {
      title: "headerTitle",
    },
    prepare: (selection) => {
      return {
        ...selection,
      };
    },
  },
};
