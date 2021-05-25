<template>
  <div class="">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="product-page">
        <section id="product-header">
          <div class="container flex flex-col mx-60 mt-10">
            <p class="font-yeseva text-4xl">{{ product.title }}</p>
            <router-link :to="{path: `/categories/${product.category_id._id}`}">
              <p class="font-roboto font-bold text-base">{{ this.product.category_id.cat_name }}</p>
            </router-link>
          </div>
        </section>
        <section id="product-body">
          <div class="mx-60">
            <div class="flex flex-none flex-row">
              <img class="main-image" :src="this.product.mainImage"
                   v-bind:style="[this.product.available ? {'border': '0 black'} : {'filter': 'grayscale(100)'}]"
                   alt="">
              <div class="flex flex-col flex-none w-1/3 mx-5" v-cloak>
                <router-link :to="{path: `/artisans/${this.product.artisan_id._id}`}">
                  <artisan-preview
                    :id="product.artisan_id._id"
                    :name="product.artisan_id.name"
                    :avatar="product.artisan_id.avatar"
                  />
                </router-link>
                <p class="font-roboto font-light text-base text-justify">{{ this.product.description }}</p>
              </div>
              <div class="flex flex-none flex-col">
                <p class="font-roboto font-bold text-base mb-2">в наличии: {{ this.product.in_stock }}</p>
                <button class="cvrsebtn" @click="addToCart(product)" v-if="!inCart">
                  добавить в корзину
                </button>
                <button class="cvrsebtn" @click="addToCart(product)" v-else>
                  убрать из корзины
                </button>
              </div>
            </div>
            <div class="gallery" v-cloak>
              <enlargeable-image
                v-for="image in this.product.images" v-bind:key="image"
                :src="image" :src_large="image" />
            </div>
          </div>
        </section>
        <section id="product-reviews">
          <div class="container flex flex-col mx-60 mt-10">
            <p class="font-yeseva text-2xl">отзывы о товаре</p>
            <review-card v-for="review in this.product.reviews" v-bind:key="review"
                         :review_body="review.review_body"
                         :review_rating="review.review_rating"
            />
          </div>
        </section>
      </div>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import CvrseHeader from "@/layouts/cvrse-header";
import CvrseFooter from "@/layouts/cvrse-footer";
import EnlargeableImage from "@/layouts/enlargeable-image";
import ReviewCard from "@/layouts/review-card";
import ArtisanPreview from "@/layouts/artisan-preview";

export default {
  name: "ProductView",
  components: {
    CvrseFooter,
    CvrseHeader,
    ReviewCard,
    EnlargeableImage,
    ArtisanPreview
  },
  mounted() {
    this.fetchProduct(this._id);
  },
  props: {
    _id: {
      type: String
    }
  },
  computed: {
    ...mapGetters([
      "cartItems"
    ]),
    ...mapGetters({
      product: "product"
    }),
    cartItemsIds: ({ cartItems }) => cartItems.map(({ _id }) => _id),

    inCart() {
      return this.cartItemsIds.includes(this.product._id);
    },

    // TODO button cant be clicked if not available
    isAvailable() {
      return this.product.available;
    }
  },
  methods: {
    ...mapActions([
      "fetchProduct"
    ]),
    ...mapMutations([
      "addToCart"
    ])
  }
};
</script>

<style scoped>
@layer components {
  .cvrsefooter {
    position: relative;
  }

  .main-image {
    width: 500px;
    height: 500px;
    object-fit: cover;
  }

  .enlargeable-image {
    margin-right: 10px;
    margin-top: 10px;
  }

  [v-cloak] {
    display: none;
  }

  .gallery {
    height: 120px;
    width: 500px;
    @apply flex flex-row
  }
}
</style>