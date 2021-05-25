<template>
  <div class="cart-view">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
      <div class="flex flex-row flex-nowrap mx-60 mt-10">
        <div class="block">
          <p class="font-yeseva text-4xl mb-2">корзина</p>
          <template v-if="cartItems.length > 0">
            <div class="product-list">
              <ul>
                <li class="mb-2" v-for="(item, key) in cartItems"
                    :key="key">
                  <router-link :to="{path: `/products/${item._id}`}">
                    <product-list-preview
                        v-bind:key="key"
                        :_id="item._id"
                        :main-image="item.mainImage"
                        :price="item.price"
                        :title="item.title"/>
                  </router-link>
                </li>
              </ul>
              <hr>
              <p class="font-roboto font-light text-base">товаров: {{cartCount}}</p>
              <p class="font-yeseva text-xl mr-5">итог: {{cartTotalPrice}}₽</p>
              <button class="cvrsebtn" type="submit" @click="pushOrders">перейти к оплате</button>
            </div>
          </template>
          <template v-else>
            <p class="font-roboto font-light text-base mt-10">а корзина-то пустая оказывается!</p>
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
import CvrseHeader from "@/layouts/cvrse-header";
import CvrseFooter from "@/layouts/cvrse-footer";
import {mapGetters, mapActions, mapMutations} from 'vuex';
import ProductListPreview from "@/layouts/product-list-preview";

export default {
  name: "CartView",
  components: {ProductListPreview, CvrseFooter, CvrseHeader},
  computed: {
    ...mapGetters([
      'cartItems',
      'cartTotalPrice',
      'cartCount',
      'user_id'
    ]),
  },
  methods: {
    ...mapActions({
      createOrders: 'createOrders',
    }),

    ...mapMutations([
      'clearCart'
    ]),
    pushOrders() {
      this.createOrders(this.user_id);
    }
  }
}
</script>

<style scoped>
@layer components {
  .cvrsefooter {
    position: absolute;
  }

  .product-list {
    padding: 20px;
    width: auto;
    max-width: 30%;
    height: auto;
    @apply container border-2 border-gray-900 rounded-2xl
  }

}

</style>