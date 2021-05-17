<template>
  <div class="product-page">
    <section id="product-header">
      <div class="container flex flex-col mx-60 mt-10">
        <p class="font-yeseva text-4xl">hell am sample txtx</p>
        <p class="font-roboto font-bold text-base">category placeholder</p>
      </div>
    </section>
    <section id="product-body">
      <div class="flex flex-col mx-60">
        <img class="main-image" :src="`https://i.pinimg.com/564x/a3/87/b4/a387b46a42f1610fdfe5aaef249eea61.jpg`" alt="">
        <enlargeable-image src="`https://i.pinimg.com/564x/a3/87/b4/a387b46a42f1610fdfe5aaef249eea61.jpg`" src_large="`https://i.pinimg.com/564x/a3/87/b4/a387b46a42f1610fdfe5aaef249eea61.jpg`"/>
      </div>
    </section>
    <section id="product-info">
    </section>
    <section id="product-reviews">
    </section>
  </div>
</template>

<script>
import EnlargeableImage from "@diracleo/vue-enlargeable-image"
// i need thumbs for dis shiet. prolly just store them all on pinterest lol
export default {
  name: "product-page",
  components: {
    EnlargeableImage
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