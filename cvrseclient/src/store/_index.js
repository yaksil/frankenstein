import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/product";
import artisan from "@/store/artisan";
import category from "@/store/category";
import review from "@/store/review";
import cart from "@/store/cart";
import auth from "@/store/auth";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    auth,
    artisan,
    category,
    cart,
    product,
    review,
  },
});
