<template>
  <div class="home">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <product-card v-for="(product, key) in products"
                    :key="key"
                    :title="product.title"
                    :price="product.price"
                    :mainImage="product.mainImage"
                    :description="product.description"
      />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/components/cvrse-header";
import ProductCard from "@/layouts/components/product-card";

import {mapGetters, mapActions} from 'vuex';

export default {
  name: "Home",
  components: {
    ProductCard,
    CvrseHeader,
  },
  mounted() {
    this.fetchProducts();
  },
  computed: {
    ...mapGetters (['products'])
  },
  methods: {
    ...mapActions(['fetchProducts'])
  },
}
</script>

<style scoped>

</style>