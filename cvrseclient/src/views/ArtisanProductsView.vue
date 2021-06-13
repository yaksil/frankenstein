<template>
  <div class="artisan-products">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="mx-40 mt-10">
        <p class="font-yeseva text-5xl mb-5">{{ user.fullname }}: товары</p>
        <table-component
          :columns="columns"
          :actions="actions"
          :data="items"
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
  name: "ArtisanProductsView",
  components: { TableComponent, CvrseFooter, CvrseHeader },
  data: () => ({
    columns: [
      {
        key: 'title',
        name: 'название продукта'
      },
      {
        key: 'in_stock',
        name: 'количество'
      },
      {
        key: 'price',
        name: 'цена'
      }
    ],
    actions: [
      {
        bg: "red",
        color: "white",
        label: "Удалить",
        emit: "onDelete",
        actionKey: "_id"
      },
      {
        bg: "yellow",
        color: "white",
        label: "Редактировать",
        emit: "onEdit",
        actionKey: "_id"
      }
    ]
  }),
  computed: {
    ...mapGetters({
      user_id: "user_id",
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      fetchUser: 'fetchUser',
      fetchArtisan: 'fetchArtisan'
    })
  }
};
</script>

<style scoped>
.cvrsefooter {
  position: absolute;
}
</style>