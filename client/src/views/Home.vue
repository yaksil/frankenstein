<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <product-page _id="609ee4de5231a2a2d03ae72a" />
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
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
@layer components {
  .cvrsefooter {
    position: absolute;
  }
}
</style>