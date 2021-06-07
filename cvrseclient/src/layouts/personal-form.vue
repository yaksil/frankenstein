<template>
  <div class="personal-form">
    <vue-form-generator
      :schema="schema"
      :model="model"
    />
    <button class="save" type="submit" @click="pushUserUpdate">сохранить</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";
import VueFormGenerator from "vue-form-generator";
import "vue-form-generator/dist/vfg.css";
import axios from "axios";

Vue.use(VueFormGenerator);

export default {
  name: "personal-form",
  data: () => {
    return {
      model: {
        fullname: "",
        email: "",
        phone: ""
      },
      schema: {
        fields: [
          {
            type: "input",
            inputType: "text",
            label: "Имя",
            model: "fullname"
          },
          {
            type: "input",
            inputType: "text",
            label: "Электронная почта",
            model: "email"
          },
          {
            type: "input",
            inputType: "text",
            label: "Телефон",
            model: "phone"
          }
        ]
      }
    };
  },
  mounted() {
    this.fetchUser(this.user_id);
    this.model = { ...this.user };
  },
  computed: {
    ...mapGetters({
      user_id: "user_id",
      user: "user"
    })
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser"
    }),
    async pushUserUpdate() {
      const res = await axios.put(`http://localhost:4545/api/users/${this.user_id}`, {
        email: this.model.email,
        phone: this.model.phone,
        fullname: this.model.fullname,
        password: this.user.password,
        artisan_id: this.user.artisan_id
      }).then(() => {
        this.$router.push('/profile');
      })
      console.log(res.data);
    }
  }
};
</script>

<style scoped>
.save {
  @apply font-yeseva text-white
  bg-cvrse-green border-none rounded-full py-1.5 px-5
  transition delay-100 hover:bg-cvrse-red
}
</style>