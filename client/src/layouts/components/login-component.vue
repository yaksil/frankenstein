<template>
  <div class="login">
    <section id="b-sides">
      <div class="parent">
        <p class="font-curse text-4xl">cvrse</p>
        <input type="text" class="login-input" placeholder="электронная почта"/>
        <input type="text" class="login-input" placeholder="пароль"/>
        <button class="cvrsebtn" />
      </div>
    </section>
    <section id="and-otherwise">

    </section>
  </div>
</template>

<script>
export default {
  name: "login-component",
  // left 80 is okay
}
</script>

<style scoped>
@layer components {
  .parent {
    top: 20%;
    left: 47%;
    @apply flex flex-col justify-center items-center
    absolute
  }
  .login-input {
    @apply h-20 w-20
  }
}
</style>