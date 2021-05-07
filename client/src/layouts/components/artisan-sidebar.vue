<template>
  <div class="artisan-sidebar">
    <div class="border-full overflow-hidden">
      <img src="src/assets/tempAvatar.jpg" alt="missing?">
    </div>
    <p class="font-yeseva text-3xl text-black">green_man88</p>
    <p>artisan's specs</p>
    <p>artisan's location</p>
    <p>artisan's flavor text</p>
    <button class="cvrsebtn px-20">связаться</button>
  </div>
</template>

<script>
export default {
name: "artisan-sidebar.vue"
}
</script>

<style scoped>

.artisan-sidebar {
  height: 100%;
  text-align: left;
  width: 20rem;
  right: 0;

  @apply flex flex-col
  fixed
  overflow-y-auto
  right-0
  w-1/4
  px-10
  border-2 border-black border-t-0
}
</style>