<template>
  <nuxt-link
    class="flex items-center mt-2 py-3 px-6 text-gray-900 font-roboto font-light hover:text-white hover:bg-cvrse-green"
    :class="{'bg-cvrse-red font-yeseva text-white': active}"
    :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
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
