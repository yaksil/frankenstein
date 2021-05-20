<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <category-page _id="606b27402c4a4f090f973e44" />
    </section>
    <section id="footer">

    </section>
  </div>
</template>

<script>

import CategoryPage from "@/layouts/components/category-page";
import CvrseHeader from "@/layouts/components/cvrse-header";
export default {
  name: "Home",
  components: {CvrseHeader, CategoryPage}
}
</script>

<style scoped>
@layer components {

}
</style>