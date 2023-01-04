// carousel.js
import { BsImages } from "react-icons/bs";
import styles from "./shared/styles";

export default {
  name: "carousel",
  type: "object",
  title: "Carousel",
  icon: BsImages,
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
      title: "Heading",
      name: "heading",
      type: "string",
      description: "Add a heading at the top of your carousel block",
      group: "content",
    },
    {
      name: "carouselItems",
      type: "object",
      title: "Items",
      group: "content",
      fields: [
        {
          title: "Add items",
          description: "Add your carousel items",
          name: "items",
          type: "array",
          of: [
            {
              title: "Item",
              name: "item",
              type: "object",
              fields: [
                {
                  type: "image",
                  name: "image",
                  title: "Image",
                  validation: (Rule) => Rule.required(),
                  options: {
                    hotspot: true,
                  },
                },
              ],
            },
          ],
          hidden: (context) => context.parent && context.parent.referenceItems,
        },
      ],
    },
    {
      name: "slidesPerView",
      title: "Slides Per View",
      type: "number",
      group: "styles",
      description:
        "Choose the amount of slides you want to display until someone has to navigate forward (this option is for desktop, slides will always reset to 1 per view on mobile)",
      validation: (Rule) => Rule.required().min(1).max(5),
    },
    {
      title: "Crop",
      name: "crop",
      type: "string",
      validation: (Rule) => Rule.required(),
      group: "styles",
      description: "Choose how to crop the carousel items",
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
      title: "Full Bleed",
      name: "fullBleed",
      type: "boolean",
      group: "styles",
      description:
        "If checked, this option will make the carousel bleed over the width of the window",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image Filter",
      name: "filter",
      type: "array",
      group: "styles",
      validation: (Rule) => Rule.length(1),
      of: [
        {
          title: "Grayscale",
          name: "grayscale",
          type: "object",
          fields: [
            {
              title: "Desaturation Percentage",
              name: "value",
              description:
                "Choose how much to desaturate your image (value is in percentage)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(100),
            },
            {
              name: "unit",
              type: "string",
              initialValue: "%",
              hidden: true,
            },
          ],
        },
        {
          title: "Blur",
          name: "blur",
          type: "object",
          description: "Blurs your images",
          fields: [
            {
              title: "Blur Pixels",
              name: "value",
              description:
                "Choose how much to blur your image (value is in pixels)",
              type: "number",
              validation: (Rule) => Rule.min(1),
            },
            {
              name: "unit",
              type: "string",
              initialValue: "px",
              hidden: true,
            },
          ],
        },
        {
          title: "Invert",
          name: "invert",
          type: "object",
          description: "Inverts your images",
          fields: [
            {
              title: "Invert Percentage",
              name: "value",
              description:
                "Choose how much to invert your image (value is in percentage)",
              type: "number",
              validation: (Rule) => Rule.min(1).max(100),
            },
            {
              name: "unit",
              type: "string",
              initialValue: "%",
              hidden: true,
            },
          ],
        },
      ],
      description: "Add a filter to your images",
    },
  ],
  preview: {
    select: {
      title: "Carousel",
    },
  },
};
