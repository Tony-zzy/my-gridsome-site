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
        <div class="project">
          <a href="/projects/chelsea-landmark/" class="project-link"
            ><img
              alt="Banana"
              src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
              width="2560"
              data-src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
              data-srcset="/assets/static/mike-dorner-173502-unsplash.b6e36c6.16e7958f24c375d7bd7b08073b4ce000.jpg 480w, /assets/static/mike-dorner-173502-unsplash.1c9e94c.16e7958f24c375d7bd7b08073b4ce000.jpg 1024w, /assets/static/mike-dorner-173502-unsplash.f11e5e1.16e7958f24c375d7bd7b08073b4ce000.jpg 1920w, /assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg 2560w"
              data-sizes="(max-width: 2560px) 100vw, 2560px"
              class="thumbnail g-image g-image--lazy g-image--loaded"
              srcset="
                /assets/static/mike-dorner-173502-unsplash.b6e36c6.16e7958f24c375d7bd7b08073b4ce000.jpg  480w,
                /assets/static/mike-dorner-173502-unsplash.1c9e94c.16e7958f24c375d7bd7b08073b4ce000.jpg 1024w,
                /assets/static/mike-dorner-173502-unsplash.f11e5e1.16e7958f24c375d7bd7b08073b4ce000.jpg 1920w,
                /assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg 2560w
              "
              sizes="(max-width: 2560px) 100vw, 2560px"
            />
            <noscript
              ><img
                src="/assets/static/mike-dorner-173502-unsplash.c0dad42.16e7958f24c375d7bd7b08073b4ce000.jpg"
                class="thumbnail g-image g-image--loaded"
                width="2560"
                alt="Banana"
            /></noscript>
            <h3 class="project-title">Banana</h3>
            <div class="categories">
              <span class="category">photography</span
              ><span class="category">pink</span>
            </div></a
          >
        </div>
      
      </div>
    </div>
  </Layout>
</template>

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
</style>
