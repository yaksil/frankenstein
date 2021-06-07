<template>
  <div class="edit-personal-form">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page" v-if="user_id">
      <div class="container mx-auto mt-10">
        <p class="font-yeseva text-5xl">{{ user.fullname }}: редактирование</p>
        <div class="flex flex-row">
          <div class="w-1/3 mt-5">
            <personal-form
            />
          </div>
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
import CvrseFooter from "@/layouts/cvrse-footer";
import { mapActions, mapGetters } from "vuex";
import PersonalForm from "@/layouts/personal-form";

export default {
  name: "EditPersonalData",
  components: { PersonalForm, CvrseFooter, CvrseHeader },
  mounted() {
    this.fetchUser(this.user_id);
  },
  props: {},
  computed: {
    ...mapGetters({
      user: "user",
      user_id: "user_id"
    })
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser"
    })
  }
};
</script>

<style scoped>
.cvrsefooter {
  position: absolute;
}
</style>