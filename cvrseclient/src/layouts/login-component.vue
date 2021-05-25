<template>
  <div class="login">
    <section id="b-sides">
      <div class="parent">
        <img class="kinda-like-a-logo" :src="`https://i.pinimg.com/564x/cd/fa/f5/cdfaf5340407f5981d001e32567fe30d.jpg`"
             alt="">
        <p class="font-curse text-5xl mb-5">cvrse</p>
        <form class="login" @submit.prevent="activateLogin">
          <input required v-model="email" type="text" class="login-input" placeholder="электронная почта" />
          <input required v-model="password" type="password" class="login-input" placeholder="пароль" />
        </form>
        <button type="submit" @click="activateLogin" class="cvrsebtn">вход</button>
      </div>
    </section>
    <section id="and-otherwise">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseFooter from "@/layouts/cvrse-footer";
import { mapActions } from "vuex";

export default {
  name: "login-component",
  components: { CvrseFooter },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {},
  methods: {
    ...mapActions([
      "login"
    ]),
    activateLogin() {
      let email = this.email;
      let password = this.password;
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push("/home")).catch(err => console.log(err));
    }
  },
  props: {}
};
</script>

<style scoped>
@layer components {
  .parent {
    height: 300px;
    top: 25%;
    left: 50%;
    right: 50%;
    @apply flex flex-col justify-center items-center flex-none
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
    object-fit: contain;
    height: 75px;
    min-width: 75px;
    margin-right: 6px;
  }
}
</style>