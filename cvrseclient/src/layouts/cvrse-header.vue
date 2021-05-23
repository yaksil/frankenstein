<!-- господи пиздец блядь наконец-то -->
<template>
  <header class="lg:container mx-auto mt-5 flex justify-between">
    <div class="inline-block">
      <div class="font-curse text-3xl text-black hover:text-cvrse-red">
        <router-link to="/">cvrse</router-link>
      </div>
    </div>
    <div class="inline-block place-content-end">
      <ul class="pt-1.5 font-yeseva text-black inline-flex">
        <li class="list-elem mr-10 hover:text-cvrse-green">
          <router-link to="/faq">🙋 faq</router-link>
        </li>
        <li class="list-elem mr-10 hover:text-cvrse-green">
          <router-link to="/search">🔎 поиск</router-link>
        </li>
        <li class="list-elem hover:text-cvrse-green">
          <router-link to="/cart">💅🏻 покупочки</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "cvrse-header",
}
</script>

<style scoped>
.list-elem {
  @apply text-xl inline-block
}
</style>