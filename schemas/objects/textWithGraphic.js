// textWithIllustration.js
import styles from "./shared/styles";
import AssetSource from "part:sanity-plugin-media-library/asset-source";

export default {
  name: "textWithGraphic",
  type: "object",
  title: "Text with Graphic",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "styles",
      title: "Styles",
    },
  ],
  fields: [
    ...styles,
    {
      title: "Text",
      name: "text",
      group: "content",
      type: "portableText",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      type: "image",
      group: "content",
      title: "Image",
      options: {
        sources: [AssetSource],
        storeOriginalFileName: false,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) => Rule.required(),
        },
        {
          type: "string",
          title: "Caption",
          name: "caption",
          validation: (Rule) =>
            Rule.required().warning("Please credit the artist if applicable"),
        },
      ],
    },
    {
      title: "Crop",
      name: "crop",
      group: "styles",
      type: "string",
      validation: (Rule) => Rule.required(),
      description:
        "Choose your crop (usually square or portrait is recommended for this block - landscape tends to make the text look too long)",
      options: {
        list: [
          {
            value: "portrait",
            title: "Portrait",
          },
          {
            title: "Landscape",
            value: "landscape",
          },
          {
            value: "square",
            title: "Square",
          },
        ],
      },
      initialValue: "portrait",
    },
    {
      title: "Graphic Width",
      name: "graphicWidth",
      type: "object",
      group: "styles",
      validation: (Rule) => Rule.required(),
      description:
        "The width of the graphic in relation to its parent container",
      fields: [
        {
          type: "string",
          name: "desktop",
          title: "Desktop",
          options: {
            list: [
              {
                title: "20%",
                value: "20",
              },
              {
                title: "30%",
                value: "30",
              },
              {
                title: "40%",
                value: "40",
              },
              {
                title: "50%",
                value: "50",
              },
            ],
          },
          validation: (Rule) => Rule.required(),
          initialValue: "100%",
        },
        {
          type: "string",
          title: "Mobile",
          name: "mobile",
          options: {
            list: [
              {
                title: "20%",
                value: "20",
              },
              {
                title: "30%",
                value: "30",
              },
              {
                title: "40%",
                value: "40",
              },
              {
                title: "50%",
                value: "50",
              },
              {
                title: "60%",
                value: "60",
              },
              {
                title: "70%",
                value: "70",
              },
              {
                title: "80%",
                value: "80",
              },
              {
                title: "90%",
                value: "90",
              },
              {
                title: "100%",
                value: "100",
              },
            ],
          },
          validation: (Rule) => Rule.required(),
          initialValue: "50%",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "title",
    },
  },
};
