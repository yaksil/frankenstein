<template>
  <div class="artisan-all">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
      <div class="container mx-auto mt-10 mb-5">
        <p class="font-yeseva text-5xl">Мастера: все</p>
        <div class="container grid gap-x-1 grid-cols-4">
          <artisan-card
            v-for="(artisan, key) in artisans"
            :key="key"
            :_id="artisan._id"
            :avatar="artisan.avatar"
            :name="artisan.name"
          />
        </div>
      </div>
    </section>
    <section id="footer">

    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/cvrse-header";
import ArtisanCard from "@/layouts/artisan-card";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ArtisanAll",
  components: { ArtisanCard, CvrseHeader },
  mounted() {
    this.fetchArtisans();
  },
  computed: {
    ...mapGetters([
      "artisans"
    ])
  },
  methods: {
    ...mapActions([
      "fetchArtisans"
    ])
  }
};
</script>

<style scoped>

</style>