<template>
  <div id="app">
    <Header />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Header: () => import("@/layouts/Header"),
  }
}
</script>

<style>
#app {

}
</style>
