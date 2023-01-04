export const validate = (Rule, field) => {
    const alt = [
      Rule.required().error("Please enter alt text for accessibility"),
      Rule.min(10).error("Alt text must be at least 10 characters"),
      Rule.max(140).error("Alt text must be below 140 characters"),
    ];
  
    const caption = Rule.required().warning("Please credit the artist if applicable")
  
    const fields = {
      alt,
      caption
    };
  
    return fields[field];
  };