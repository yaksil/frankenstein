<template>
  <div class="profile-view">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page" v-if="this.user_id">
      <div class="container mx-auto mt-10">
        <p class="font-yeseva text-5xl">{{ user.fullname }}: профиль</p>
        <div class="flex flex-row mt-2">
          <section id="artisan-profile" v-if="this.user.artisan_id">
            <div class="flex flex-col">
              <p class="font-roboto font-light italic text-base mb-5">Мастер</p>
              <router-link :to="{path: `/artisans/${this.user.artisan_id._id}`}">
                <img class="img-avatar" :src="this.user.artisan_id.avatar" alt="">
                <p class="font-yeseva text-3xl mt-5">{{ this.user.artisan_id.name }}</p>
              </router-link>
              <router-link to="/my-products">
                <p class="text-xl font-roboto italic font-light hover:bg-cvrse-green my-2">Мои товары</p>
              </router-link>
              <router-link to="/my-orders">
                <p class="text-xl font-roboto italic font-light hover:bg-cvrse-red">Мои заказы</p>
              </router-link>
            </div>
          </section>
          <section id="scum-profile">
            <div class="flex flex-col ml-60">
              <p class="font-roboto font-light italic text-base mb-5">Пользователь</p>
              <p class="font-roboto font-bold text-base my-1">email: {{ this.user.email }}</p>
              <p class="font-roboto font-bold text-base my-1">номер телефона: {{ this.user.phone }}</p>
              <router-link to="/my-personal">
                <p class="text-xl font-roboto italic font-light mt-2 hover:bg-cvrse-red">Редактировать данные</p>
              </router-link>
            </div>
          </section>
        </div>
      </div>
    </section>
    <section id="unauthorized" v-else>
      <div class="container mx-auto mt-10">
        <p class="text-3xl font-yeseva">
          Страница не найдена!
        </p>
        <router-link to="/home">
          <p class="text-xl font-roboto font-light hover:bg-cvrse-red">вернуться на главную...</p>
        </router-link>
      </div>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/cvrse-header";
import { mapGetters, mapActions } from "vuex";
import CvrseFooter from "@/layouts/cvrse-footer";

export default {
  name: "ProfileView",
  components: { CvrseFooter, CvrseHeader },
  mounted() {
    let _id = this.user_id;
    this.fetchUser(_id);
  },
  props: {},
  computed: {
    ...mapGetters([
      "user",
      "user_id"
    ])
  },
  methods: {
    ...mapActions([
      "fetchUser"
    ])
  }
};
</script>

<style scoped>
.img-avatar {
  width: 200px;
  height: 200px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.cvrsefooter {
  position: absolute;
}
</style>