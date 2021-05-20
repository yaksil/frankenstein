<template>
  <div class="mx-60">
    <section id="about">
      <div class="container mt-10 sticky">
        <p class="">category name</p>
        <p>category description</p>
      </div>
    </section>
    <section id="inventory">
      <div class="container grid gap-x-1 grid-cols-4">
        <product-card/>
      </div>
    </section>
  </div>
</template>

<script>

import ProductCard from "@/layouts/components/product-card";
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "category-page",
  mounted() {
  },
  components: {ProductCard,},
  computed: {
    ...mapGetters(['category', 'products'])
  },
  methods: {
    ...mapActions(['fetchCategory', ])
  },
  props: {
    _id: String,
    cat_name: String,
    cat_desc: String,
    product_inventory: [String]
  },
}
</script>

<style scoped>

</style>