<template>
  <header class="header">
    <div class="header-left">
      <CvrseLogo />
    </div>
    <div class="header-right">
    </div>
  </header>
</template>

<script>

export default {
  name: "Header",
  components: {
    CvrseLogo: () => import("@/layouts/components/CvrseLogo")
  }
}
</script>

<style scoped>
.header {
  border-bottom: 1px #2c3e50;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
</style>