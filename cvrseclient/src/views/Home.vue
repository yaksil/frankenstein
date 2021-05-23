<template>
  <div class="home">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
      <div class="container mx-auto">
        <p class="font-yeseva text-8xl mt-10 mb-2">добро пожаловать</p>
        <p class="font-roboto font-light text-xl">это — заглавная страница сайта.</p>
      </div>
      <div class="container mx-auto mt-10">
        <p class="font-roboto font-light text-3xl">начните своё путешествие здесь</p>
        <div class="flex flex-row flex-none mt-5">
          <div class="block mr-5">
            <router-link to="/artisans">
            <p class="font-roboto font-light text-xl hover:bg-cvrse-red">наши мастера</p>
            <img class="journey-thumb" src="https://i.pinimg.com/564x/0b/98/55/0b9855f511b9d5a19265d2a4e8964ee8.jpg"
                 alt="">
            </router-link>
          </div>
          <div class="block">
            <router-link to="/categories">
            <p class="font-roboto font-light text-xl hover:bg-cvrse-green">категории товаров</p>
            <img class="journey-thumb" src="https://i.pinimg.com/564x/b5/7d/d0/b57dd0a6b405d7a9cc807470fcf23f68.jpg"
                 alt="">
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <div class="foot-fetish">
        <p class="font-yeseva text-5xl">
          благословенны будьте.
        </p>
      </div>
    </section>
  </div>
</template>

<script>

import CvrseHeader from "@/layouts/cvrse-header";

export default {
  name: "Home",
  components: {CvrseHeader}
}
</script>

<style scoped>
@layer components {
  .journey-thumb {
    object-fit: cover;
    width: 350px;
    height: 350px;
  }
  .foot-fetish {
    @apply container mx-auto mt-10
  }
}
</style>