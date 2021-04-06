const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addFilter('highlight', function (blog) {
        return blog.filter(blog => blog.data.highlight);
    })

    eleventyConfig.addPassthroughCopy({
        'src/main.css': 'assets/main.css',
        'src/images': 'assets/img',
    });

    return {
        dir: {
            input: 'views',
            output: 'docs'
        }
    }
}