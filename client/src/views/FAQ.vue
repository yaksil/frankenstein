<template>
  <div class="faq-main">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <faq-component />
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter"/>
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import CvrseFooter from "@/layouts/components/cvrse-footer";
import FaqComponent from "@/layouts/components/faq-component";
export default {
  name: "FAQ",
  components: {
    FaqComponent,
    CvrseFooter,
    CvrseHeader
  }
}
</script>

<style scoped>
@layer components {
  .cvrsefooter {
    position: relative;
  }
}
</style>