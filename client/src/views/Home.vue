<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <artisan-inventory _id="609ed4202e9d5026d8b72e42" />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/components/cvrse-header";
import ArtisanInventory from "@/layouts/components/artisan-inventory";

export default {
  name: "Home",
  components: {
    ArtisanInventory,
    CvrseHeader,
  },

}
</script>

<style scoped>
@layer components {

}
</style>