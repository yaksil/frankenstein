<template>
  <div class="review-card">
    <div class="flex flex-row flex-none mx-auto my-2">
      <p v-for="star in review.review_rating" v-bind:key="star" class="text-base">★</p>
      <p class="font-roboto font-light text-base ml-1">{{review.review_body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "review-card",
  mounted() {
    this.fetchReview(this._id);
  },
  computed: {
    ...mapGetters([
        'review'
    ])
  },
  methods: {
    ...mapActions([
        'fetchReview'
    ])
  },
  props: {
    _id: {
      type: String
    },
    product_id: {
      type: String
    },
    review_rating: {
      type: Number
    },
    review_body: {
      type: String,
      default: 'Нет слов, одни эмоции.'
    }
  }
}
</script>

<style scoped>

</style>