<template>
<div class="search">
  <div class="container mx-auto mt-20">
    <p class="font-roboto italic font-light text-xl text-center">ибо всякий просящий получает, и ищущий находит, и стучащему отворят</p>
    <input type="text" id="search-field" class="search-field" placeholder="продукты, товары, имена"/>
  </div>
</div>
</template>

<script>
export default {
name: "search-component"
}
</script>

<style scoped>
@layer components {
  .search-field {
    @apply block mx-auto
    border-2 border-gray-400 h-12 w-3/4
    rounded-full
  }
}
</style>