<template>
  <div class="product-card">
    <router-link :to="{path: `/categories/${this._id}`}">
      <p class="product-title">{{ cat_name }}</p>
      <img class="category-image"
           :src="thumbnail" alt="" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "category-card",
  props: {
    _id: {
      type: String
    },
    cat_name: {
      type: String
    },
    thumbnail: String
  }
};
</script>

<style scoped>
@layer components {
  .category-image {
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
    @apply font-roboto font-light text-base hover:bg-cvrse-green
  }

}
</style>