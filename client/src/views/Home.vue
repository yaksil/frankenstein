<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <product-page />
    </section>
    <section id="footer">
      <cvrse-footer />
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/components/cvrse-header";
import CvrseFooter from "@/layouts/components/cvrse-footer";
import ProductPage from "@/layouts/components/product-page";

export default {
  name: "Home",
  components: {
    ProductPage,
    CvrseFooter,
    CvrseHeader,
  },

}
</script>

<style scoped>

</style>