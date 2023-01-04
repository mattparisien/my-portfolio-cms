import React from "react";
import { ImMinus } from "react-icons/im";
import { validate } from "../../config/validation/validate";

const Icon = () => <ImMinus />;

export default {
  name: "header",
  title: "Header",
  icon: Icon,
  type: "document",
  fields: [
    {
      name: "headerTitle",
      title: "Header Title",
      type: "string",
      description: "Only used internally in the CMS",
    },
    {
      name: "headerTagline",
      title: "Header tagline",
      type: "string",
      required: true,
    },
    {
      name: "headerLogo",
      title: "Header Logo",
      type: "image",
      description: "Add your brand's logo (SVG format is preferable)",
      readOnly: true,
      fields: [
        {
          title: "Alternative Text",
          name: "alt",
          type: "string",
          validation: (Rule) => validate(Rule, "alt"),
        },
      ],
      options: {
        useOriginalFileName: false,
      },
    },
    {
      name: "desktopNavigation",
      title: "Desktop Navigation",
      type: "reference",
      to: [{ type: "navigation" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mobileNavigation",
      title: "Mobile Navigation",
      type: "reference",
      to: [{ type: "navigation" }],
      validation: (Rule) => Rule.required(),
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
