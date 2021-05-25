<template>
  <div class="product-card">
    <router-link :to="{path: `/artisans/${this._id}`}">
      <img class="category-image"
           :src="avatar" alt="" />
      <p class="product-title">{{ name }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "artisan-card",
  props: {
    _id: String,
    name: String,
    avatar: String
  }
};
</script>

<style scoped>
.category-image {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border: 0 black;
  border-radius: 50%;
}

.product-card {
  width: 210px;
  height: 210px;
  margin-top: 70px;
}

.product-title {
  @apply font-yeseva text-xl hover:bg-cvrse-red mt-2
}
</style>