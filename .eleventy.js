export default function eleventyConfig(config) {
  config.addPassthroughCopy({ "src/assets": "assets" });
  config.addFilter("pad2", (value) => String(value).padStart(2, "0"));

  return {
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
    dir: {
      input: "src",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
}
