import slugify from "slugify";

export const getSlug = (text) => {
  return slugify(text, {
    lower: true,
    strict: true
  });
};