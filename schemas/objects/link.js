export default {
  name: "link",
  type: "object",
  title: "Link",
  fields: [
    {
      title: "Internal Link",
      name: "internalLink",
      description: "Select pages for navigation",
      type: "reference",
      to: [{ type: "page" }, { type: "project" }],
      hidden: (navItem) => {
        if (
          (navItem.parent && navItem.parent.externalUrl) ||
          (navItem.parent && navItem.parent.emailLink)
        ) {
          return true;
        } else {
          return false;
        }
      },
    },
    {
      name: "externalUrl",
      title: "External URL",
      description: "Use fully qualified URLS for external link",
      type: "url",

      hidden: (navItem) => {
        if (
          (navItem.parent && navItem.parent.internalLink) ||
          (navItem.parent && navItem.parent.emailLink)
        ) {
          return true;
        } else {
          return false;
        }
      },
    },
  ],
};
