<template>
  <div class="login">
    <section id="b-sides">
      <div class="parent">
        <img class="kinda-like-a-logo" src="src/assets/circle.png" alt="">
        <p class="font-curse text-5xl mb-5">cvrse</p>
        <input type="text" class="login-input" placeholder="электронная почта"/>
        <input type="password" class="login-input" placeholder="пароль"/>
        <button class="cvrsebtn">вход</button>
      </div>
    </section>
    <section id="and-otherwise">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseFooter from "@/layouts/components/cvrse-footer";
export default {
  name: "login-component",
  components: {CvrseFooter},
  props: {
    login: {
      type: String,
    },
    password: {
      type: String,
    }
  },
}
</script>

<style scoped>
@layer components {
  .parent {
    top: 25%;
    left: 50%;
    right: 50%;
    @apply flex flex-col justify-center items-center
    absolute
  }
  .login-input {
    text-indent: 15px;
    @apply border-2 border-gray-900 rounded-full font-roboto font-light
    h-10 w-72 my-2
  }
  .cvrsebtn {
    @apply bg-cvrse-red mt-2 px-12
    transition delay-100 hover:bg-cvrse-green
  }
  .cvrsefooter {
    position: absolute;
  }
  .kinda-like-a-logo {
    height: 50px;
    width: 50px;
  }
}
</style>