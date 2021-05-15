<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">

    </section>
    <section id="footer">
      <cvrse-footer />
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/components/cvrse-header";
import ArtisanInventory from "@/layouts/components/artisan-inventory"
import CvrseFooter from "@/layouts/components/cvrse-footer";

export default {
  name: "Home",
  components: {
    CvrseFooter,
    ArtisanInventory,
    CvrseHeader,
  },

}
</script>

<style scoped>

</style>