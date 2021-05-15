<template>
  <div class="artisan-info">
    <artisan-sidebar
        v-if="artisan.length !== 0"
        :_id="artisan._id"
        :name="artisan.name"
        :location="artisan.location"
        :description="artisan.description"
        :avatar="artisan.avatar"
        :inventory="artisan.inventory"
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
    //pass props from some other page idk
    this.fetchInventory();
  },
  computed: {
    ...mapGetters ([
      'product',
      'products',
      'artisan'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchArtisan',
      'fetchProduct',
      'fetchProducts',
    ]),

    async fetchInventory () {
      await this.fetchArtisan("609ed4202e9d5026d8b72e42"); // хуйня параша панки хой победа наша
      const key = this.artisan._id;
      console.log(key);
    },
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