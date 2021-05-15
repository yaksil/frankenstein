<template>
  <div class="product-page">
    <section id="product-header">
      <div class="container flex flex-col mx-80 mt-10">
        <p class="font-yeseva text-4xl">hell am sample txtx</p>
        <p class="font-roboto font-bold text-base">category placeholder</p>
      </div>
    </section>
    <section id="product-body">
    </section>
    <section id="product-info">
    </section>
    <section id="product-reviews">
    </section>
  </div>
</template>

<script>
export default {
  name: "product-page",
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

</style>