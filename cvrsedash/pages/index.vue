<template>
  <div class="container mx-auto mt-20">
    <p class="font-roboto font-light text-5xl">Это — главная страница Административной панели.</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  middleware: 'auth',
}
</script>

<style></style>
