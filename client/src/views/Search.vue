<template>
  <div class="search">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
      <div class="search">
        <div class="container mx-auto mt-20">
          <p class="font-roboto italic font-light text-xl text-center">ибо всякий просящий получает, и ищущий находит, и
            стучащему отворят</p>
          <input type="text" id="search-field" class="search-field" placeholder="продукты, товары, имена"/>
        </div>
      </div>
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";

export default {
  name: "Search",
  components: {CvrseHeader}
}
</script>

<style scoped>
@layer components {
  .search-field {
    text-indent: 15px;
    @apply block mx-auto
    border-2 border-black h-12 w-3/4
    rounded-full
  }
}
</style>