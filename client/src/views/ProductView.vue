<template>
  <div class="">
    <section id="header">
      <cvrse-header />
    </section>
    <section id="page">
     <router-view>
       <product-page :_id="this._id" />
     </router-view>
    </section>
    <section id="footer">
      <cvrse-footer class="cvrsefooter" />
    </section>
  </div>
</template>

<script>
import CvrseHeader from "@/layouts/components/cvrse-header";
import CvrseFooter from "@/layouts/components/cvrse-footer";
import ProductPage from "@/layouts/components/product-page"
export default {
  name: "ProductPage",
  components: {CvrseFooter, CvrseHeader, ProductPage},
  mounted() {
    console.log(this._id);
  },
  props: {
    _id: {
      type: String
    }
  }

}
</script>

<style scoped>
@layer components {
  .cvrsefooter {
    position: relative;
  }
}
</style>