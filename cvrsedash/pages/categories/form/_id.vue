<template>
  <div class="category-form">
    <crud-form
      v-if="model"
      :form-schema="schema"
      :form-model="model"
      title="category form"
    />
  </div>
</template>

<script>
import CrudForm from "@/components/CrudForm";

import { schema } from "./fields";



export default {
  name: "category-form",
  components: {
    CrudForm
  },
  data: () => ({
    model: null,
    schema
  }),
  mounted() {
    this.setModel();
  },
  computed: {
    isUpdated: ({ $route: { params: { id } } }) => id !== undefined
  },
  methods: {
    setModel() {
      this.model = {
        cat_name: "",
        cat_desc: ""
      };
    }
  }
};
</script>

<style scoped>

</style>
