<template>
  <div class="home">
  <section id="header">
    <Header />
  </section>
  <section id="page">
    <ArtisanSidebar />
  </section>
  </div>
</template>

<script>

import Header from "@/layouts/components/cvrse-header";
import ArtisanSidebar from "@/layouts/components/artisan-sidebar"

export default {
  name: "Home",
  components: {
    ArtisanSidebar,
    Header
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped>

</style>