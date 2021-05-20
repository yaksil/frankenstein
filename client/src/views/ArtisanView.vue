<template>
  <div class="artisan-view">
    <section id="header">
      <cvrse-header/>
    </section>
    <section id="page">
      <artisan-inventory :_id="this._id"/>
    </section>
    <section id="footer">
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import ArtisanInventory from "@/layouts/components/artisan-inventory";

export default {
  name: "ArtisanView",
  components: {ArtisanInventory, CvrseHeader},
  props: {
    _id: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>