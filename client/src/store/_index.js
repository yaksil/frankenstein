import Vue from 'vue';
import Vuex from 'vuex';

import * as product from '@/store/product.store'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        product
    },
});