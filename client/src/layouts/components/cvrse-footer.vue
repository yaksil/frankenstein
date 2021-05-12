<template>
  <footer class="cvrse-footer">
    <p class="copyright">★ благословенны будьте ★</p>
  </footer>
</template>

<script>
export default {
name: "cvrse-footer"
}
</script>

<style scoped>
.cvrse-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  @apply
  font-yeseva text-base bg-white bg-black
  py-3
}
.cvrse-footer .copyright {
  margin-top:15px;
  font-size:13px;
  @apply mb-0 text-center
}
</style>