<template>
  <nuxt-link class="nav-item" :class="{ 'bg-gray-400 border-l-4': active, }"
             :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "nav-item",
  props: {
    to: {
      type: String,
      default: ""
    }
  },
  computed: {
    active: ({ $route: { path }, to }) => path === to
  }
};
</script>

<style scoped>
.nav-item {
  padding: 10px;
  margin-bottom: 10px;
  @apply flex items-center mt-2 py-2 px-6 text-gray-900 no-underline hover:text-gray-100 hover:bg-gray-700
  font-roboto font-light
}
</style>
