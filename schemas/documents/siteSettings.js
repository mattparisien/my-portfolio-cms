//siteSettings.js

export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
  fields: [
    {
      name: "title",
      title: "Site Title",
      description: "Add your site's title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "brandLine",
      title: "Brand Line",
      description: "Add your brand's tag line",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Meta Description",
      description: "Add a detailed description of your company",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "favicon",
      title: "Logo",
      description: "Add your brand's logo (SVG format is preferable)",
      type: "image",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "socials",
      title: "Social Accounts",
      description: "No @ symbol please! (i.e. just eyes__ears)",
      type: "object",
      fields: [
        {
          type: "object",
          name: "instagram",
          title: "Instagram",
          fields: [
            {
              type: "string",
              name: "username",
              title: "Username",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "linkedIn",
          title: "LinkedIn",
          fields: [
            {
              type: "string",
              name: "username",
              title: "Username",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "boolean",
              name: "companyProfile",
              title: "Is this a company profile?",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "facebook",
          title: "Facebook",
          fields: [
            {
              type: "string",
              name: "username",
              title: "Username",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "twitter",
          title: "Twitter",
          fields: [
            {
              type: "string",
              name: "username",
              title: "Username",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
        {
          type: "object",
          name: "youtube",
          title: "Youtube",
          fields: [
            {
              type: "string",
              name: "username",
              title: "Username",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "keywords",
      title: "Keywords",
      description:
        "Add keywords that are relevant to your brand (seperate by commas)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
