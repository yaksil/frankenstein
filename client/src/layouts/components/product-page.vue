<template>
  <div class="product-page">
    <section id="product-header">
      <div class="container flex flex-col mx-60 mt-10">
        <p class="font-yeseva text-4xl">{{ product.title }}</p>
        <p class="font-roboto font-bold text-base">{{ product.category_id.cat_name }}</p>
      </div>
    </section>
    <section id="product-body">
      <div class="mx-60">
        <div class="flex flex-none flex-row">
          <img class="main-image" :src="product.mainImage" alt="">
          <div class="flex flex-col flex-none w-1/3 mx-5" v-cloak>
            <artisan-preview
                :id="product.artisan_id._id"
                :name="product.artisan_id.name"
                :avatar="product.artisan_id.avatar"
            />
            <p class="font-roboto text-base text-justify">{{ product.description }}</p>
          </div>
          <div class="flex flex-none flex-col">
            <p class="font-roboto font-bold text-base mb-2">в наличии: {{ product.in_stock }}</p>
            <button class="cvrsebtn">добавить в корзину</button>
          </div>
        </div>
        <div class="gallery" v-cloak>
          <enlargeable-image
              v-for="image in product.images" v-bind:key="image"
              :src="image" :src_large="image"/>
        </div>
      </div>
    </section>
    <section id="product-reviews">
      <div class="container flex flex-col mx-60 mt-10">
        <p class="font-yeseva text-2xl">отзывы о товаре</p>
        <review-card v-for="review in product.reviews" v-bind:key="review"
                     :review_body="review.review_body"
                     :review_rating="review.review_rating"
        />
      </div>
    </section>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import EnlargeableImage from '@/layouts/components/enlargeable-image'
import ReviewCard from "@/layouts/components/review-card";
import ArtisanPreview from "@/layouts/components/artisan-preview";

export default {
  name: "product-page",
  mounted() {
    this.fetchProduct(this._id);
  },
  components: {
    ReviewCard,
    EnlargeableImage,
    ArtisanPreview
  },
  computed: {
    ...mapGetters([
      'product',
    ]),

  },
  methods: {
    ...mapActions([
      'fetchProduct',
    ]),

  },
  props: {
    _id: {
      type: String
    },
  }
}
</script>

<style scoped>
@layer components {
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