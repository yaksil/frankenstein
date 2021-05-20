<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <search-component />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import SearchComponent from "@/layouts/components/search-component";

export default {
  name: "Search",
  components: {SearchComponent, CvrseHeader}
}
</script>

<style scoped>

</style>