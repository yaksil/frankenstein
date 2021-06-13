<template>
  <div class="user-orders-view">
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
  name: "UserOrdersView",
  components: { TableComponent, CvrseFooter, CvrseHeader },
  mounted() {
   // this.getOrdersByUser("60ac87bff7154364a85f4bb4");
    this.setData();
  },
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
    ],
    actions: [
      {
        bg: "red",
        color: "white",
        label: "Отменить",
        emit: "onDelete",
        actionKey: "_id"
      }
    ]
  }),
  computed: {
    ...mapGetters({
      user: 'user',
      user_id: 'user_id',
      orders: 'orders'
    })
  },
  methods: {
    ...mapActions([
      "fetchUser",
      "getOrdersByUser"
    ]),
    setData() {
      this.fetchUser(this.user_id);
      this.getOrdersByUser(this.user_id);
    }
  }
};
</script>

<style scoped>

</style>