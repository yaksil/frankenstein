<template>
  <nuxt-link
    class="flex items-center mt-2 py-3 px-6 text-gray-900 font-roboto font-light hover:text-white hover:bg-black"
    :class="{'bg-cvrse-red font-yeseva text-black': active}"
    :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "cvrse-navigator-item",
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
