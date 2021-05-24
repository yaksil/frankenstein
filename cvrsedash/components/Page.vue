<template>
  <div class="container mx-auto px-6 py-8">
    <h3 class="text-white text-4xl font-yeseva bg-black">
      {{ title }}
    </h3>
    <div class="my-6">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

