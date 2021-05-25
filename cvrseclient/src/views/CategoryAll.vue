<template>
  <div class="category-all">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="container mx-auto mt-10 mb-5">
        <p class="font-yeseva text-5xl">Категории: все</p>
        <div class="container grid gap-x-1 grid-cols-4">
          <category-card
            v-for="(category, key) in categories"
            :key="key"
            :_id="category._id"
            :cat_name="category.cat_name"
            :thumbnail="category.thumbnail"
          />
        </div>
      </div>
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/cvrse-header";
import CategoryCard from "@/layouts/category-card";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CategoryAll",
  components: { CategoryCard, CvrseHeader },
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapGetters([
      "categories"
    ])
  },
  methods: {
    ...mapActions([
      "fetchCategories"
    ])
  }
};
</script>

<style scoped>

</style>