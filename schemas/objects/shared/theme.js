//Block theme

const theme = {
  name: "theme",
  type: "reference",
  title: "Theme",
  description: "Pick one of your premade themes for this block",
  to: [{ type: "theme" }],
  validation: (Rule) => Rule.required(),
};

export default theme;
