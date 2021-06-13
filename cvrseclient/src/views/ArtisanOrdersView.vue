<template>
  <div class="my-orders">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="mx-40 mt-10">
        <p class="font-yeseva text-5xl mb-5">{{ user.fullname }}: заказы</p>
        <table-component
          :columns="columns"
          :actions="actions"
          :data="orders"
        />
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
import TableComponent from "@/layouts/table-component";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ArtisanOrdersView",
  components: { TableComponent, CvrseFooter, CvrseHeader },
  data: () => ({
    columns: [
      {
        key: "item_name",
        name: "название товара"
      },
      {
        key: "total",
        name: "сумма"
      },
      {
        key: "namesake",
        name: "имя получателя"
      },
      {
        key: "shipping",
        name: "адрес получателя"
      }
    ],

  }),
  computed: {
    ...mapGetters([
      "user",
      "user_id"
    ])
  },
  methods: {
    ...mapActions([
      "fetchUser",
    ])
  }
};
</script>

<style scoped>
.cvrsefooter {
  position: absolute;
}
</style>