import {getCart, getCarts} from "@/services/cart.service";

/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
    setCart(state, cart) {
        state.cart = cart;
    },
    setCarts(state, carts) {
        state.carts = carts;
    },
    setCartError(state, cartError) {
        state.cartError = cartError;
    }
}

const actions = {
    async fetchCart({commit}, id) {
        try {
            const cart = await getCart(id);
            commit('setCart', cart);
        } catch (err) {
            commit('setCartError', err);
        }
    },
    async fetchCarts({commit}) {
        try {
            const carts = await getCarts();
            commit('setCarts', carts);
        } catch (err) {
            commit('setCartError', err);
        }
    },
}

const getters = {
    cart: ({cart}) => cart,
    carts: ({carts}) => carts,
    cartError: ({cartError}) => cartError
}

const state = () => ({
    cart: {},
    carts: [],
    cartError: null,
})

export default {
    mutations,
    getters,
    actions,
    state
}