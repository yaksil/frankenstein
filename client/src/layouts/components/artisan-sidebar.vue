<template>
  <div class="artisan-sidebar">
    <div class="avatar">
      <img :src="avatar" alt="missing?">
    </div>
    <p class="cvrseBigBadText pt-2">{{ name }}</p>
    <p class="cvrseInfoText pt-1">мастер</p>
    <p class="cvrseInfoText">{{ location }}</p>
    <p class="artisan-bio">{{description}}</p>
    <button class="artisan-contact">связаться</button>
  </div>
</template>

<script>
export default {
  name: "artisan-sidebar",
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
    },
    description: {
      type: String,
      default: ''
    },
    inventory: {
      type: Array
    }
  }
}
</script>

<style scoped>
.artisan-sidebar {
  @apply container bg-white
  flex flex-col fixed overflow-y-auto right-0 w-1/4 px-10 h-full text-left
  pt-12
}
@layer components {
  .avatar {
    width: 200px;
    height: 200px;
    object-fit: cover;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  }
  .artisan-bio {
    @apply font-roboto text-black font-light
    pt-3
  }
  .artisan-contact {
    margin-top: 1rem;
    @apply font-yeseva text-white
    bg-cvrse-green border-none rounded-full py-1.5 px-5
    transition delay-100 hover:bg-cvrse-red
  }

}
</style>