import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/store/product'
import artisan from '@/store/artisan'
import category from "@/store/category";
import review from "@/store/review"

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        artisan,
        category,
        product,
        review
    },
});