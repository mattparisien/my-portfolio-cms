import { BsGoogle, BsHammer, BsPencilFill } from "react-icons/bs";

export default {
  name: "page",
  title: "Page",
  type: "document",
  groups: [
    { name: "main", title: "Main", icon: BsPencilFill },
    { name: "builder", title: "Page Builder", icon: BsHammer },
    { name: "seo", title: "SEO", icon: BsGoogle },
  ],
  fields: [
    //
    // === Main ===
    //

    {
      name: "title",
      title: "Title",
      type: "string",
      group: "main",
      description: "Enter the title for your page",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Enter the path to your page (please enter a '/' if this is your home page)",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "main",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "seo",
      name: "seo",
      group: "seo",
    },
    {
      name: "modules",
      type: "pageBuilder",
      title: "Modules",
      description: "Build your page's interface with reusable ",
      group: "builder",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "url",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
