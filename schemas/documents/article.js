// project.js
import { BsEyeFill, BsFillPencilFill } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { validate } from "../../config/validation/validate";
import axios from "axios";
import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "article",
  type: "document",
  title: "Article",
  groups: [
    { name: "editor", title: "Editor", icon: BsFillPencilFill },
    { name: "seoPreview", title: "SEO Preview", icon: BsEyeFill },
    { name: "webPreview", title: "Web Preview", icon: BsEyeFill },
  ],
  fields: [
    {
      name: "parentCollection",
      type: "reference",
      to: [{ type: "collection" }],
      hidden: true,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "editor",
      validation: (Rule) => [
        [
          Rule.required().warning("Short title are usually better"),
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
      group: "editor",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          type: "image",
          title: "Image",
          name: "image",
          options: {
            hotspot: true,
            sources: [AssetSource],
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
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page Builder",
      group: "editor",
    },
  ],
  initialValue: async () => {
    const collectionQuery = `
      *[_type == "collection"]
    `;

    try {
      const result = await axios.get(
        `https://igfxoph1.api.sanity.io/v1/data/query/production?query=${collectionQuery}`
      );

      if (result.data.result[0]) {
        return {
          parentCollection: {
            _ref: result.data.result[0]._id,
          },
        };
      }
    } catch (err) {
      return null;
    }
  },
  preview: {
    image: MdLocalMovies,
    select: {
      title: "title",
      subtitle: "tagLine",
      media: "mainImage.image.asset",
    },
  },
};
