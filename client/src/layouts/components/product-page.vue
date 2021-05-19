<template>
  <div class="product-page">
    <section id="product-header">
      <div class="container flex flex-col mx-60 mt-10" v-cloak>
        <p class="font-yeseva text-4xl">{{ product.title }}</p>
        <p class="font-roboto font-bold text-base">абстрактная категория{{category.cat_name}}</p>
      </div>
    </section>
    <section id="product-body">
      <div class="mx-60">
      <div class="flex flex-none flex-row">
        <img class="main-image" :src="product.mainImage" alt="">
        <div class="flex flex-col flex-none w-1/3 mx-5">
          <artisan-preview _id="609ed4202e9d5026d8b72e42"/>
          <p class="font-roboto text-base text-justify">{{ product.description }}</p>
        </div>
        <div class="flex flex-none flex-col">
          <p class="font-roboto font-bold text-base mb-2">в наличии: {{product.in_stock}}</p>
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
                     :_id="review"
        />
      </div>
    </section>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import EnlargeableImage from '@/layouts/components/enlargeable-image'
import ReviewCard from "@/layouts/components/review-card";
import ArtisanPreview from "@/layouts/components/artisan-preview";

export default {
  name: "product-page",
  mounted() {
    this.fetchData();
  },
  components: {
    ArtisanPreview,
    ReviewCard,
    EnlargeableImage
  },
  computed: {
    ...mapGetters([
        'product',
        'category',
    ])
  },
  methods: {
    ...mapActions([
        'fetchProduct',
        'fetchCategory',
    ]),
    fetchData() {
      this.fetchProduct(this._id);
      this.fetchCategory(this.category_id);
    }
  },
  props: {
    _id: {
      type: String
    },
    cat_name: {
      type: String
    },
    title: {
      type: String,
      default: ''
    },
    category_id: {
      type: String,
      default: ''
    },
    images: [String],
    thumbs: [String],
    mainImage: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    artisan_id: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    in_stock: {
      type: Number
    },
    reviews: [{
      type: String
    }],
    stars: {
      type: Number,
      default: 0
    },
    available: {
      type: Boolean,
      default: false
    }
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