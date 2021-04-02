<template>
  <Layout>
    <div class="container">
      <Hero />
      <ProjectCard :projects="$page.projects.edges" />
    </div>
    <LatestJournals :journals="$page.journals.edges" />
  </Layout>
</template>
<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  },
  journals: allJournalPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import LatestJournals from "@/components/LatestJournals";
export default {
  metaInfo: {
    title: "主页",
  },
  components: {
    ProjectCard,
    Hero,
    LatestJournals,
  },
};
</script>

<style>
</style>
