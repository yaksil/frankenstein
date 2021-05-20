<template>
  <div class="category-view">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
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
                v-for="(product, key) in category.product_inventory"
                v-bind:key="key"
                :_id="product._id"
                :title="product.title"
                :mainImage="product.mainImage"
                :price="product.price"
                :available="product.available"
            />
          </div>
        </section>
      </div>
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import {mapGetters, mapActions} from 'vuex';
import ProductCard from "@/layouts/components/product-card";

export default {
  name: "CategoryView",
  components: {CvrseHeader, ProductCard,},
  mounted() {
    this.fetchCategory(this._id);
  },
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