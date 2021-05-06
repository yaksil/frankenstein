<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Home: () => import('@/views/Home')
  }
}
</script>

<style>
#app {

}
</style>
