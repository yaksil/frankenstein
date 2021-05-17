<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <product-page _id="609ee4de5231a2a2d03ae72a" />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>

import ProductPage from "@/layouts/components/product-page";
import CvrseHeader from "@/layouts/components/cvrse-header";
export default {
  name: "Home",
  components: {
    CvrseHeader,
    ProductPage,
  },

}
</script>

<style scoped>

</style>