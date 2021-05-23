<template>
  <div class="flex h-screen">
    <cvrse-nav :menu="menu"
              @onLogout="handleLogout" />
    <div class="flex-1 flex flex-col overflow-hidden">
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import menu from "./setup";

export default {
  name: "DefaultLayout",
  data: () => ({
    menu
  }),
  components: {
    CvrseNav: () => import("@/components/layouts/Navigation/Nav"),
  },
  methods: {
    async handleLogout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>
