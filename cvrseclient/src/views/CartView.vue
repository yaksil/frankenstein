<template>
  <div class="cart-view">
    <section id="header">
      <cvrse-header />
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
                      :title="item.title" />
                  </router-link>
                </li>
              </ul>
              <hr>
              <p class="font-roboto font-light text-base">товаров: {{ cartCount }}</p>
              <p class="font-yeseva text-xl mr-5">итог: {{ cartTotalPrice }}₽</p>
              <button class="cvrsebtn" type="submit" @click="pushOrders">перейти к оплате</button>
              <button class="deleteButton" type="submit" @click="clearCart">удалить товары из корзины</button>
            </div>
          </template>
          <template v-else>
            <p class="font-roboto font-light text-base mt-10">а корзина-то пустая оказывается!</p>
          </template>
        </div>
      </div>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/cvrse-header";
import CvrseFooter from "@/layouts/cvrse-footer";
import { mapGetters, mapActions, mapMutations } from "vuex";
import ProductListPreview from "@/layouts/product-list-preview";
import axios from "axios";

export default {
  name: "CartView",
  components: { ProductListPreview, CvrseFooter, CvrseHeader },
  computed: {
    ...mapGetters([
      "cartItems",
      "cartTotalPrice",
      "cartCount",
      "user_id",
      "user",
    ])
  },
  methods: {
    ...mapActions({
      fetchUser: 'fetchUser',
    }),

    ...mapMutations([
      "clearCart"
    ]),
    async pushOrders() {
      await this.fetchUser(this.user_id);
      /// вот здесь вот функци_ онал
      await this.cartItems.forEach(itemInCart => {
        const res = axios.post("http://localhost:4545/api/orders", {
          user_id: this.user_id,
          namesake: this.user.fullname,
          state: 'active',
          artisan_id: itemInCart.artisan_id,
          item: itemInCart._id,
          item_name: itemInCart.title,
          shipping: this.user.mail_address,
          total: itemInCart.price
        });
        console.log(res);
      })
    }
  }
};
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

  .deleteButton {
    @apply font-yeseva text-white
    bg-cvrse-red border-none rounded-full py-1.5 px-5
    transition delay-100 hover:bg-cvrse-green
    ml-5
  }
}

</style>