<template>
  <table class="min-w-full">
    <thead>
    <slot name="columns">
      <tr>
        <table-header>#</table-header>
        <table-header v-for="({ name }, index) in columns" :key="index">
          {{ name }}
        </table-header>
        <table-header v-if="actions.length !== 0">Действия</table-header>
      </tr>
    </slot>
    </thead>
    <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <slot :row="item">
        <table-cell>{{ index + 1 }}</table-cell>
        <table-cell
          v-for="({ key }, tdIndex) in columns"
          :key="`column-${tdIndex}`"
        >
          {{ item[key] }}
        </table-cell>
        <table-cell
          v-for="({ emit, actionKey, label, color, bg, icon },
            actionIndex) in actions"
          :key="`action-${actionIndex}`"
        >
          <icwt-button
            rounded
            :color="color"
            :bg="bg"
            @click="$emit(emit, { id: item[actionKey] })"
          >
            {{ label }}
          </icwt-button>
        </table-cell>
      </slot>
    </tr>
    </tbody>
  </table>
</template>

<script>
import TableHeader from "@/layouts/table-header";
import TableCell from "@/layouts/table-cell";
import IcwtButton from "@/layouts/icwt-button";

export default {
  name: "table-component",
  components: { TableHeader, TableCell, IcwtButton },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>

</style>