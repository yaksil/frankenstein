<template>
  <div class="artisan-preview">
    <div class="mb-2 flex flex-none flex-row">
      <img class="avatar" :src="avatar" alt="">
      <p class="font-roboto font-bold text-base mt-5 ml-2">{{ name }} говорит:</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  name: "artisan-preview",
  computed: {
    ...mapGetters([
      'artisan'
    ])
  },
  methods: {
    ...mapActions([
      'fetchArtisan'
    ])
  },
  props: {
    _id: {
      type: String,
    },
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped>
@layer components {
  .avatar {
    width: 50px;
    height: 50px;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
}
</style>