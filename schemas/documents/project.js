// project.js
import { BsEyeFill, BsFillPencilFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { validate } from "../../config/validation/validate";

export default {
  name: "project",
  type: "document",
  title: "Projects",
  groups: [
    { name: "editor", title: "Editor", icon: BsFillPencilFill },
    { name: "seoPreview", title: "SEO Preview", icon: BsEyeFill },
    { name: "webPreview", title: "Web Preview", icon: BsEyeFill },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "editor",
      validation: (Rule) => [
        [
          Rule.required().warning("Short titles are usually better"),
          Rule.required(),
        ],
      ],
    },
    {
      name: "tagLine",
      title: "Tag Line",
      type: "string",
      group: "editor",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "object",
      group: "seoPreview",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          type: "image",
          title: "Image",
          name: "image",
          options: {
            hotspot: true,
            storeOriginalFileName: false,
          },
          validation: (Rule) => Rule.required(),
        },
        {
          type: "string",
          title: "Caption",
          name: "caption",
          validation: (Rule) =>
            Rule.required().warning("Please credit the artist if applicable"),
        },
        {
          type: "string",
          title: "Alternative Text",
          name: "alt",
          validation: (Rule) => validate(Rule, "alt"),
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "editor",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((name, context) => {
          if (typeof name === "undefined") {
            return "Slug field cannot be empty";
          }

          if (!context.document.title) {
            return "Slug must match project title (click generate)";
          }

          const title = context.document.title
            .split(" ")
            .map((x) => x.toLowerCase())
            .join("-");

          if (name.current !== title) {
            return "Slug must match project title (click generate)";
          }

          return true;
        }),
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "editor",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "modules",
      type: "pageBuilder",
      title: "Modules",
      group: "editor",
    },
  ],
  preview: {
    image: MdLocalMovies,
    select: {
      title: "title",
      subtitle: "tagLine",
      media: "mainImage.image.asset",
    },
  },
};
