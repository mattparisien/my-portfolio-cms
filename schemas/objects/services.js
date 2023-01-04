//services.js

import { BsListCheck } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "services",
  title: "Services",
  type: "object",
  icon: BsListCheck,
  fields: [
    ...styles,
    {
      name: "projectDescription",
      type: "string",
      title: "Project Description",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "clientGoal",
      type: "string",
      title: "Client Goal",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "services",
      type: "array",
      title: "Services",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "service",
          type: "string",
          title: "Service",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
  },
};
