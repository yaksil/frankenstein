<template>
  <div class="nav-main">
    <div class="fixed z-30 inset-y-0 left-0 w-64 bg-gray-100 overflow-y-auto lg:static lf:inset-0">
      <div class="flex items-center justify-center mt-8">
        <nuxt-link class="no-underline hover:bg-black hover:text-white" to="/">
          <div class="flex items-center">
            <span class="text-black text-3xl font-curse m-4"> cvrse— dashboard </span>
          </div>
        </nuxt-link>
      </div>
      <nav class="mt-10">
        <cvrse-navigator-item v-for="(item, key) in menu" :to="item.to" :key="key">
          {{ item.name }}
        </cvrse-navigator-item>
        <div class="exit">
          <button
            @click="$emit('onLogout')"
            class="items-center mt-2 py-3 px-6 text-gray-900 font-roboto font-light hover:text-white hover:bg-black">
            Выйти из системы
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "cvrse-navigator",
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  components: {
    CvrseNavigatorItem: () => import('./cvrse-navigator-item')
  }
};
</script>

<style scoped>
.exit {
  margin-top: 24rem;
}
</style>
