import modules from "../modules";
import { Button } from "@sanity/ui";
import validateBuilder from "../../config/validation/validateBuilder";

export default {
  name: "pageBuilder",
  type: "object",
  title: "Page Builder",
  fields: [
    {
      type: "array",
      name: "modules",
      title: "Add modules",
      validation: (Rule) => validateBuilder(Rule),
      of: modules,
    },
    {
      type: "string",
      inputComponent: Button,
      title: "Save this layout as a template",
      name: "saveAs",
    },
  ],
  preview: {
    select: {
      title: "modules.0.title",
    },
    prepare(selection) {
      return {
        title: selection.name,
      };
    },
  },
};
