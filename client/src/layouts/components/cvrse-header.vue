<!-- господи пиздец блядь наконец-то -->
<template>
  <header class="lg:container mx-auto mt-5 flex justify-between">
    <div class="inline-block">
      <div class="font-curse text-3xl text-black hover:text-cvrse-red">
        <a href="#">cvrse</a>
      </div>
    </div>
    <div class="inline-block place-content-end">
      <ul class="pt-1.5 font-yeseva text-black inline-flex">
        <li class="list-elem mr-10 hover:text-cvrse-green">
          <a href="#">
            faq
          </a>
        </li>
        <li class="list-elem hover:text-cvrse-green">
          <a href="#">
            поиск
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped>
.list-elem {
  @apply text-xl inline-block
}
</style>