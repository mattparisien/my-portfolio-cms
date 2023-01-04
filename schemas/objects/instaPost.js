import InstaPostSelector from "../components/instaPostSelector";
import styles from "./shared/styles";
import _ from "lodash";

export default {
  name: "instaPost",
  type: "object",
  title: "Insta Post",

  fields: [
    ...styles,
    {
      type: "string",
      name: "postLocation",
      title: "Post Location",
      description: "Choose where you want the post to link to",
      options: {
        layout: "radio",
        list: [
          {
            title: "Internal",
            value: "internal",
          },
          {
            title: "External",
            value: "external",
          },
        ],
      },
    },
    {
      type: "object",
      name: "internal",
      title: "Internal Post",
      description: "Pick from your listed posts",
      inputComponent: InstaPostSelector,
      hidden: ({ parent }) => parent.postLocation === "external",
      fields: [
        {
          type: "string",
          name: "id",
          title: "id",
          hidden: true,
          initialValue: _.uniqueId(),
          readOnly: true,
        },
        {
          type: "string",
          title: "username",
          name: "username",
          initialValue: process.env.SANITY_STUDIO_INSTA_USERNAME,
        },
        {
          type: "string",
          title: "Avatar",
          name: "avatar",
        },
        {
          type: "boolean",
          title: "Verified",
          name: "verified",
          initialValue: false,
        },
        {
          type: "string",
          title: "Caption",
          name: "caption",
        },
        {
          type: "array",
          title: "media",
          name: "media",
          of: [
            {
              type: "object",
              name: "mediaItem",
              title: "Media Item",
              fields: [
                { type: "string", name: "url", title: "Url" },
                { type: "string", name: "type", title: "Type" },
              ],
            },
          ],
        },
        {
          title: "Permalink",
          name: "permalink",
          type: "string",
        },
      ],
    },
    {
      name: "external",
      type: "object",
      title: "External Post",
      description: "Manually fill out the fields to add someone's elses post",
      hidden: ({ parent }) => parent.postLocation === "internal",
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Avatar",
          name: "avatar",
          type: "image",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Username",
          name: "username",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Verified",
          name: "verified",
          type: "boolean",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Media",
          type: "array",
          name: "media",
          of: [
            {
              type: "image",
              name: "image",
              title: "Image",
              options: {
                storeOriginalFileName: false,
              },
            },
            {
              type: "file",
              name: "video",
              title: "Video",
              options: {
                storeOriginalFileName: false,
                accept: "video/mp4",
              },
            },
          ],
        },
        {
          title: "Permalink",
          name: "permalink",
          type: "string",
        },
      ],
    },
  ],
};
