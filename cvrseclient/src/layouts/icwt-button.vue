<template>
  <component
    :is="tag"
    :to="to"
    @click="$emit('click')"
    class="group flex items-center justify-center py-2 px-4 relative tracking-wide"
    :class="{
      [`bg-${bg}-600`]: true,
      [`hover:bg-${bg}-500`]: true,
      [`font-roboto`]: true,
      [`text-white`]: true,
      'rounded-full': rounded,
    }"
  >
    <span class="flex items-center">
      <slot name="icon" />
    </span>
    <slot />
  </component>
</template>

<script>
export default {
  name: "icwt-button",
  props: {
    tag: {
      type: String,
      default: "button"
    },
    to: {
      type: String,
      default: ""
    },
    bg: {
      type: String,
      default: "gray"
    },
    font: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "white"
    },
    rounded: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  }
};
</script>

<style scoped>

</style>