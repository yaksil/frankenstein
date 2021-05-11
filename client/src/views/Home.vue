<template>
  <div class="home">
  <section id="header">
    <Header />
  </section>
  <section id="page">
   <FAQ/>
  </section>
  </div>
</template>

<script>

import Header from "@/layouts/components/cvrse-header";
import FAQ from "@/views/FAQ"

export default {
  name: "Home",
  components: {
    FAQ,
    Header
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