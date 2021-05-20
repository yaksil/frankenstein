import {getProduct, getProducts, getProductsByArtisan, getProductsByCategory} from "@/services/products.service";
/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
    setProduct(state, product) {
        state.product = product;
    },
    setProducts(state, products) {
        state.products = products;
    },
    setProductError(state, productError) {
        state.productError = productError;
    }
}

const actions = {
    async fetchProduct({commit}, id) {
        try {
            const product = await getProduct(id);
            commit('setProduct', product);
        } catch (err) {
            commit('setProductError', err);
        }
    },
    async fetchProducts({commit}) {
        try {
            const products = await getProducts();
            commit('setProducts', products);
        } catch (err) {
            commit('setProductError', err);
        }
    },
    async fetchProductsByArtisan({commit}, artisan) {
        try {
            const products = await getProductsByArtisan(artisan);
            commit('setProducts', products);
        } catch (err) {
            commit('setProductError', err);
        }
    },
    async fetchProductsByCategory({commit}, category) {
        try {
            const products = await getProductsByCategory(category);
            commit('setProducts', products)
        } catch (err) {
            commit('setProductError', err);
        }
    }
}

const getters = {
    product: ({product}) => product,
    products: ({products}) => products,
    productError: ({productError}) => productError
}

const state = () => ({
    product: {},
    products: [],
    productError: null
})

export default {
    mutations,
    getters,
    actions,
    state
}