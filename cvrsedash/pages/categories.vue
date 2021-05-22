<template>
<p>this is categories</p>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "categories-page",
  mounted() {
    this.fetchCategories();
  },
  computed: {
    ...mapGetters([
      'categories/items'
    ])
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchAll'
    })
  }
};
</script>

<style scoped>

</style>
