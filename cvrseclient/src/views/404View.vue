<template>
  <div class="404-view">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="container mx-auto mt-10">
        <p class="text-3xl font-yeseva">
          Страница не найдена!
        </p>
        <router-link to="/">
          <p class="text-xl font-roboto font-light hover:bg-cvrse-red">вернуться на главную...</p>
        </router-link>
      </div>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/cvrse-header";
import CvrseFooter from "../layouts/cvrse-footer.vue";

export default {
  name: "404View",
  components: {
    CvrseHeader,
    CvrseFooter
  }
};
</script>

<style scoped>
.cvrsefooter {
  position: absolute;
}
</style>
