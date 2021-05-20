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
          v-for="(product, key) in artisan.inventory"
          :key="key"
          :available="product.available"
          :_id="product._id"
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
  name: "artisan-inventory",
  components: {
    ArtisanSidebar,
    ProductCard,
  },
  props: {
    _id: {
      type: String
    }
  },
  mounted() {
    //pass props from some other page idk
    this.fetchArtisan(this._id)
  },
  computed: {
    ...mapGetters([
      'products',
      'artisan'
    ]),
  },
  methods: {
    ...mapActions([
      'fetchArtisan',
      'fetchProductsByArtisan'
    ]),
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