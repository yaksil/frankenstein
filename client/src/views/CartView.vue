<template>
  <div class="cart-view">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">

    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter"/>
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import CvrseFooter from "@/layouts/components/cvrse-footer";
export default {
  name: "CartView",
  components: {CvrseFooter, CvrseHeader}
}
</script>

<style scoped>
.cvrsefooter {
  position: absolute;
}
</style>