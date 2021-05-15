import {getArtisan, getArtisans} from "@/services/artisan.service";

/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
    setArtisan(state, artisan) {
        state.artisan = artisan;
    },
    setArtisans(state, artisans) {
        state.artisans = artisans;
    },
    setArtisanError(state, artisanError) {
        state.artisanError = artisanError;
    }
}

const actions = {
    async fetchArtisan({commit}, id) {
        try {
            const artisan = await getArtisan(id);
            commit('setArtisan', artisan);
        } catch (err) {
            commit('setArtisanError', err);
        }
    },
    async fetchArtisans({commit}) {
        try {
            const artisans = await getArtisans();
            commit('setArtisans', artisans);
        } catch (err) {
            commit('setArtisanError', err);
        }
    },
}

const getters = {
    artisan: ({artisan}) => artisan,
    artisans: ({artisans}) => artisans,
    artisanError: ({artisanError}) => artisanError
}

const state = () => ({
    artisan: {},
    artisans: [],
    artisanError: null,
})

export default {
    mutations,
    getters,
    actions,
    state
}