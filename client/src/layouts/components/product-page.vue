<template>
  <div class="product-page">
    <section id="product-header">
      <div class="container flex flex-col mx-60 mt-10" v-cloak>
        <p class="font-yeseva text-4xl">{{ product.title }}</p>
        <p class="font-roboto font-bold text-base">category placeholder</p>
      </div>
    </section>
    <section id="product-body">
      <div class="mx-60">
        <div class="flex flex-row flex-none" v-cloak>
          <enlargeable-image :src="product.mainImage" :src_large="product.mainImage"/>
          <enlargeable-image :src="product.mainImage" :src_large="product.mainImage"/>
          <enlargeable-image :src="product.mainImage" :src_large="product.mainImage"/>
          <enlargeable-image :src="product.mainImage" :src_large="product.mainImage"/>
        </div>
      <div class="">
        <img class="main-image" :src="product.mainImage" alt="">
      </div>
      </div>
    </section>
    <section id="product-info">
      <div class="product-info">
        <p>{{ product.description }}</p>
      </div>
    </section>
    <section id="product-reviews">
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import EnlargeableImage from '@/layouts/components/enlargeable-image'
// TODO ewview component

export default {
  name: "product-page",
  mounted() {
    this.fetchProduct(this._id);
  },
  components: {
    EnlargeableImage
  },
  computed: {
    ...mapGetters([
        'product'
    ])
  },
  methods: {
    ...mapActions([
        'fetchProduct'
    ])
  },
  props: {
    _id: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    images: [String],
    thumbs: [String],
    mainImage: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    artisan: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    in_stock: {
      type: Number,
      default: 0
    },
    reviews: [{
      type: String,
      default: ''
    }],
    stars: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@layer components {
  .main-image {
    width: 600px;
    height: 600px;
    object-fit: cover;
  }
}
</style>