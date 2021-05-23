<template>
  <div>
    <h2>Ктагеории</h2>
    <nuxt-link to="categories/form">добавить категории гы гы</nuxt-link>
    <cvrse-table
      :actions="actions"
      :columns="columns"
      :data="categories"
      @onEdit="handleEdit" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// components
import CvrseTable from "~/components/cvrse-table";

// setup
import { columns, actions } from "~/pages/categories/setup";

export default {
  name: "categories-page",
  components: {
    CvrseTable
  },
  mounted() {
    this.fetchCategories();
  },
  data: () => ({
    columns,
    actions
  }),
  computed: {
    ...mapGetters({
      categories: "categories/items"
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchAll"
    }),
    handleEdit() {
      console.log("i am the night");
    }
  }
};
</script>

<style scoped>

</style>
