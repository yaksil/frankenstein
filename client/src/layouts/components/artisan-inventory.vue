<template>
  <div class="artisan-info">
    <artisan-sidebar

    />
  <div class="artisan-inventory">
    <product-card
        v-for="(product, key) in products"
        :key="key"
        :title="product.title"
        :price="product.price + '₽'"
        :mainImage="product.mainImage"
        :description="product.description"
    />
  </div>
  </div>
</template>

<script>
import ProductCard from "@/layouts/components/product-card"
import {mapGetters, mapActions} from 'vuex';
import ArtisanSidebar from "@/layouts/components/artisan-sidebar"

export default {
  name: "artisan-inventory.vue",
  components: {
    ArtisanSidebar,
    ProductCard,
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
.artisan-inventory {
  @apply container w-3/5
  mx-40
  grid gap-x-4 grid-cols-4
}
</style>