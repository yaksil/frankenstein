<template>
  <nav>
    <nuxt-link to="/">
      <h2>cvrse— dashboard</h2>
    </nuxt-link>
    <nav-item v-for="(item, key) in menu"
              :key="key"
              :to="item.to">
      {{ item.name }}
    </nav-item>
  </nav>
</template>

<script>
import NavItem from "@/components/nav-item";

export default {
  name: "nav-bar",
  components: {
    NavItem
  },
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
@layer components {
  nav {
    height: 100vh;
    padding: 1rem;
    width: 12vw;
    display: flex;
    flex-direction: column;
    @apply bg-gray-300
  }

  h2 {
    @apply font-curse text-3xl
  }
}
</style>
