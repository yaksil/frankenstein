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

import CvrseFooter from "@/layouts/components/cvrse-footer";
import CvrseHeader from "@/layouts/components/cvrse-header";

export default {
  name: "Home",
  components: {
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