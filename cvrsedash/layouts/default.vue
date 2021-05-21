<template>
  <div class="app">
    <nav-bar :menu="menu">
    </nav-bar>
    <div class="content">
      <main>
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import menu from "./setup";

export default {
  name: "default-layout",
  data: () => ({
    menu
  }),
  components: {
    NavBar: () => import("@/components/nav-bar")
  }
};
</script>

<style>
.app {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
}

.content {
  padding: 2rem;
}
</style>
