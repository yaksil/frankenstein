<template>
  <cvrse-table />
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CvrseTable from "@/components/cvrse-table";

export default {
  name: "categories-page",
  components: {
    CvrseTable,
  },
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapGetters({
      categories: "categories/items"
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: "categories/fetchAll"
    })
  }
};
</script>

<style scoped>

</style>
