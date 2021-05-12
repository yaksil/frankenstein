<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <artisan-sidebar />
      <artisan-inventory />
    </section>
    <section id="footer">
      <cvrse-footer />
    </section>
  </div>
</template>

<script>

import CvrseFooter from "@/layouts/components/cvrse-footer";
import CvrseHeader from "@/layouts/components/cvrse-header";
import ArtisanSidebar from "@/layouts/components/artisan-sidebar"
import ArtisanInventory from "@/layouts/components/artisan-inventory"

export default {
  name: "Home",
  components: {
    ArtisanInventory,
    ArtisanSidebar,
    CvrseHeader,
    CvrseFooter,
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