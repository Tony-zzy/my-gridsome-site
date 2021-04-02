// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'VBlog',
  siteDescription: "zzy",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
         resolveAbsolutePaths: true,
        // remark: {
        //   externalLinksTarget: "_blank",
        //   externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        // }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
         resolveAbsolutePaths: true,
        // remark: {
        //   externalLinksTarget: "_blank",
        //   externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        // }
      }
    }
  ],
  templates: {
    // Post: [
    //   {
    //     path: '/posts/:id',
    //     component: './src/templates/Post.vue'
    //   }
    // ]
  }
}
