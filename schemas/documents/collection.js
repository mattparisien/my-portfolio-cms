//collection.js
//document that holds all collections (projects etc)
import { BsFillCollectionFill } from "react-icons/bs";

export default {
  title: "Collection",
  name: "collection",
  type: "document",
  icon: BsFillCollectionFill,
  fields: [
    {
      name: "collectionName",
      title: "Collection Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "boolean",
      title: "Page Collection",
      name: "pageCollection",
      description:
        "Mark as true if you want to create individual pages (on your live site) for each collection item",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "slug",
      title: "Collection Slug",
      name: "collectionSlug",
      options: {
        source: "collectionName",
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.custom((content, { document }) => {
          if (document.pageCollection && !content) {
            return "Required field";
          }
          return true;
        }),
      hidden: ({ document }) => !document?.pageCollection,
    },
    {
      name: "collectionItems",
      title: "Collection Items",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "testimonial",
              type: "project",
            },
          ],
          title: "Item",
          name: "item",
        },
      ],
    },
  ],
};
