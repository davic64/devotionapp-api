const createSlug = (topic) => {
  let slug = topic.toLowerCase();
  slug = slug.replace(/[^\w\s]/g, "");
  slug = slug.replace(/\s+/g, "-");
  return slug;
};

module.exports = createSlug;
