<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <artisan-inventory />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/components/cvrse-header";
import ArtisanInventory from "@/layouts/components/artisan-inventory"

export default {
  name: "Home",
  components: {
    ArtisanInventory,
    CvrseHeader,
  },

}
</script>

<style scoped>

</style>