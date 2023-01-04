export default function validateBuilder(Rule) {
  return Rule.custom((items) => {
    let heroBlockAmount = 0;
    let errors = [];

    items.forEach((block, idx) => {
      if (block._type === "hero") {
        if (idx != 0) {
          errors.push(
            "The hero block must be the first one on the page. Please drag it to the top."
          );
        }

        heroBlockAmount++;
      }

      if (block._type === "nextPage") {
        if (idx !== items.length - 1) {
          errors.push(
            "The next page block must be the last one on the page. Please drag it to the bottom."
          );
        }
      }
    });

    if (heroBlockAmount > 1) {
      errors.push("There can only be one hero block per page");
    }

    if (errors.length >= 1) {
      return errors;
    }

    return true;
  });
}
