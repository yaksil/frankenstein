<template>
  <div class="product-card">
    <a href="#">
      <img class="product-image" :src="mainImage" alt=""/>
    </a>
    <p class="product-title">{{ title }}</p>
    <p class="product-price"> {{ price }}</p>
  </div>
</template>

<script>
export default {
  name: "product-card.vue",
  props: {
    title: {
      type: String,
      default: ''
    },
    mainImage: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      default: 0
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
@layer components {
  .product-image {
    object-fit: cover;
    width: 200px;
    height: 200px;
  }
  .product-card {
    width: 210px;
    height: 210px;
    margin-top: 50px;
  }
  .product-title {
    @apply font-roboto font-black
  }
  .product-price {
    @apply font-yeseva text-base
  }
}
</style>