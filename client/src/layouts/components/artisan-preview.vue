<template>
  <div class="artisan-preview">
    <div>
      <img class="avatar" :src="artisan.avatar" alt="">
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "artisan-preview",
  mounted() {
    this.fetchArtisan(this._id);
  },
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
    location: {
      type: String,
      default: ''
    }
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