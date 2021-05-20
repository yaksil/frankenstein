<template>
  <div class="cart-view">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
      <div class="flex flex-row flex-nowrap mx-60 mt-10">
        <div class="block">
          <p class="font-yeseva text-4xl">корзина</p>
          <template>
            <div class="product-list">

            </div>
          </template>
        </div>
      </div>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter"/>
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import CvrseFooter from "@/layouts/components/cvrse-footer";

export default {
  name: "CartView",
  components: {CvrseFooter, CvrseHeader}
}
</script>

<style scoped>
@layer components {
  .cvrsefooter {
    position: absolute;
  }
}

</style>