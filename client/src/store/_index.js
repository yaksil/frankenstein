import Vue from 'vue';
import Vuex from 'vuex';
import product from '@/store/product'
import artisan from '@/store/artisan'

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        artisan,
        product
    },
});