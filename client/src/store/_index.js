import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/store/product'
import artisan from '@/store/artisan'
import category from "@/store/category";
import review from "@/store/review";
import cart from "@/store/cart";

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        artisan,
        category,
        cart,
        product,
        review
    },
});