//Templates are collections of reusable blocks
import blocks from "../modules";
import axios from "axios";
import validateBuilder from "../../config/validation/validateBuilder";
import { BsFillGrid3X3GapFill } from "react-icons/bs";

export default {
  name: "templateInstance",
  icon: BsFillGrid3X3GapFill,
  title: "Template",
  type: "object",
  fields: [
    {
      type: "reference",
      title: "Template Name",
      name: "reference",
      description: "Enter the name of the template you would link to use",
      to: [{ type: "template" }],
    },
    {
      type: "array",
      title: "Blocks",
      name: "blocks",
      initialValue: async (ctx) => {
        const templateQuery = `
      *[_type == "template"][0]{
        blocks[]{
          ...
        }
      }
    `;

        try {
          const result = await axios.get(
            `https://igfxoph1.api.sanity.io/v1/data/query/production?query=${templateQuery}`
          );

          if (result.data.result.blocks) {
            return result.data.result.blocks;
          }
        } catch (err) {
          return null;
        }
      },
      of: blocks,
      validation: (Rule) => validateBuilder(Rule),
      hidden: (context) => !context.parent?.reference,
    },
  ],
  preview: {
    select: {
      title: "reference.title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
};
