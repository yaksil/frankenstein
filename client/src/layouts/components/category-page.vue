<template>
  <div class="mx-60">
    <section id="about">
      <div class="container mt-10 sticky">
        <p class="font-yeseva text-5xl mb-2">{{ category.cat_name }}</p>
        <p class="font-roboto text-base font-light">{{ category.cat_desc }}</p>
      </div>
    </section>
    <section id="inventory">
      <div class="container grid gap-x-1 grid-cols-4">
        <product-card
            v-for="product in category.product_inventory"
            v-bind:key="product"
            :title="product.title"
            :mainImage="product.mainImage"
            :price="product.price"
            :available="product.available"
        />
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
    this.fetchCategory(this._id);
  },
  components: {ProductCard,},
  computed: {
    ...mapGetters([
      'category'
    ])
  },
  methods: {
    ...mapActions([
      'fetchCategory'
    ])
  },
  props: {
    _id: String
  },
}
</script>

<style scoped>

</style>