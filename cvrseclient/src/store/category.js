import {getCategories, getCategory} from "@/services/categories.service";

/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
    setCategory(state, category) {
        state.category = category;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
    setCategoryError(state, categoryError) {
        state.categoryError = categoryError;
    }
}

const actions = {
    async fetchCategory({commit}, id) {
        try {
            const category = await getCategory(id);
            commit('setCategory', category);
        } catch (err) {
            commit('setCategoryError', err);
        }
    },
    async fetchCategories({commit}) {
        try {
            const categories = await getCategories();
            commit('setCategories', categories);
        } catch (err) {
            commit('setCategoryError', err);
        }
    },
}

const getters = {
    category: ({category}) => category,
    categories: ({categories}) => categories,
    categoryError: ({categoryError}) => categoryError
}

const state = () => ({
    category: {},
    categories: [],
    categoryError: null
})

export default {
    mutations,
    getters,
    actions,
    state
}