<template>
  <div class="product-list-preview">
  <div class="grid grid-cols-2 grid-flow-row">
    <div class="block flex flex-row flex-nowrap mr-5">
      <img class="image-preview" :src="mainImage" alt="">
      <p class="font-roboto font-bold mt-5">{{title}}</p>
    </div>
    <div class="block">
      <p class="font-roboto font-bold mt-5">{{price}}₽</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "product-list-preview",
  props: {
    _id: String,
    title: String,
    price: Number,
    mainImage: String
  }
}
</script>

<style scoped>
@layer components {
  .image-preview {
    width: 70px;
    height: 70px;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    margin-right: 10px;
  }
}
</style>