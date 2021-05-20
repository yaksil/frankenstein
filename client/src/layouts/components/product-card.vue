<template>
  <div class="product-card">
    <router-link :to="{path: `/${this._id}`}">
      <img class="product-image"
           v-bind:style="[this.available ? {'border': '0 black'} : {'filter': 'grayscale(100)'}]"
           :src="mainImage" alt=""/>
    </router-link>
    <p class="product-price"> {{ price }}₽</p>
    <p class="product-title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: "product-card",
  computed: {},
  props: {
    _id: {
      type: String
    },
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
    },
    available: {
      type: Boolean
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
    border: 0 black;
  }

  .product-card {
    width: 210px;
    height: 210px;
    margin-top: 70px;
  }

  .product-title {
    @apply font-roboto font-medium
  }

  .product-price {
    @apply font-yeseva text-base
  }
}
</style>