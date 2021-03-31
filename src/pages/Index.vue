<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">Simplicity. Aesthetics. Value.</h1>
        <h2 class="hero-subtitle">
          Hi there, I'm an independent Digital Designer &amp; Art Director
          focused on digital design for brands that like to have fun.
        </h2>
      </div>
      <div class="projects">
        <!-- v-for -->
        <div
          class="project"
          v-for="(item, index) in $page.allPost.edges"
          :key="index"
        >
          <!-- {{item.node}} -->
          <a :href="item.node.path" class="project-link"
            ><img
              :alt="item.node.title"
              :src="item.node.imgs.src"
              :width="item.node.imgs.size.width"
              class="thumbnail g-image g-image--lazy g-image--loaded"
            />
            <noscript
              ><img
                :src="item.node.imgs.src"
                :width="item.node.imgs.size.width"
                class="thumbnail g-image g-image--loaded"
                :alt="item.node.title"
            /></noscript>
            <h3 class="project-title">{{ item.node.title }}</h3>
            <div
              class="categories"
              v-for="tag in item.node.categories"
              :key="tag"
            >
              <span class="category">{{ tag }}</span>
            </div></a
          >
        </div>
      </div>
    </div>
    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link class="journal"
            :to="item.node.path"
            v-for="(item, index) in $page.allCard.edges"
            :key="index"
            >
            <h3 class="journal-title">{{ item.node.title }}</h3>
            </g-link
          >
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query {
  allPost {
    edges {
      node {
        id
        title
        categories
        imgs{
          src
          size{
            width
            height
          }
        }
        path
      }
    }
  }
   allCard {
    edges {
      node {
        id
        title  
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "主页",
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}
.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}
.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}
.journal:last-of-type {
  border-bottom: 0;
}
.journal:hover {
  background: var(--color-base-1);
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }
  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }
  .journal:first-child,
  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }
  .journal:nth-child(3) {
    border-right: 1px solid var(--color-base-1);
    border-bottom: 0;
  }
}
@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
  .journal:first-child,
  .journal:nth-child(2),
  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}
</style>
