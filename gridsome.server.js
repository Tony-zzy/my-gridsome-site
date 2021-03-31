// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('Post')
    const cards = addCollection('Card')
    const { data } = await axios.get('https://gridsome-forestry.netlify.app/assets/data/index.json')

    for (const item of data.data.projects.edges.reverse()) {
      let node = item.node;
  
      collection.addNode({
        id: node.id,
        title: node.title,
        date: node.date,
        categories: node.categories,
        imgs: {
          src: node.thumbnail.src,
          size:node.thumbnail.size
        },
        path: node.path
      })
    }

    for (const item of data.data.journals.edges.reverse()) {
      let node = item.node;
      cards.addNode({
        id: node.id,
        title: node.title,
        path: node.path
      })
    }

  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
