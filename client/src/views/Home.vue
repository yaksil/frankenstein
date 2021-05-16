<template>
  <div class="home">
    <section id="header">
    </section>
    <section id="page">
      <login-component />
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>


import LoginComponent from "@/layouts/components/login-component";
export default {
  name: "Home",
  components: {
    LoginComponent
  },

}
</script>

<style scoped>

</style>