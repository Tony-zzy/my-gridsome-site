// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Add a meta tag
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width,initial-scale=1.0'
  })
  head.meta.push({
    name: 'charset',
    content: 'utf-8'
  })


}
