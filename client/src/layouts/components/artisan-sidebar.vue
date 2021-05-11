<template>
  <div class="artisan-sidebar">
    <div class="avatar">
      <img :src="require('@/assets/tempAvatar.jpg')" alt="missing?">
    </div>
    <p class="cvrseBigBadText pt-2">green_man88</p>
    <p class="cvrseInfoText pt-1">мастер</p>
    <p class="cvrseInfoText">Москва, Россия</p>
    <p class="artisan-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex nec nisi pulvinar, ac ultrices leo fringilla. Maecenas enim turpis, pulvinar in bibendum ut, egestas vitae arcu. Vestibulum vitae ligula in nibh iaculis facilisis. Etiam ullamcorper ipsum non enim bibendum, nec mollis ipsum pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex nec nisi pulvinar, ac ultrices leo fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex nec nisi pulvinar, ac ultrices leo fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex nec nisi pulvinar, ac ultrices leo fringilla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate ex nec nisi pulvinar, ac ultrices leo fringilla.</p>
    <button class="artisan-contact">связаться</button>
  </div>
</template>

<script>
export default {
name: "artisan-sidebar.vue"
}
</script>

<style scoped>
.artisan-sidebar {
  @apply flex flex-col fixed overflow-y-auto right-0 w-1/4 px-10 border-l-2 border-black h-full text-left
  pt-12
}
@layer components {
  .avatar {
    width: 200px;
    height: 200px;
    border-radius: 100%;
    overflow: hidden;
    position: relative;
    @apply border-2 border-black justify-between
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