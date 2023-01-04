//Section height

const height = {
  type: "string",
  title: "Section height",
  name: "sectionHeight",
  options: {
    layout: "radio",
    list: [
      {
        title: "Small",
        value: "small",
      },
      {
        title: "Medium",
        value: "medium",
      },
      {
        title: "Large",
        value: "large",
      },
    ],
  },
  initialValue: "small",
  validation: (Rule) => Rule.required(),
};

export default height;
