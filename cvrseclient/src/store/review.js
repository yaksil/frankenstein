import {getReview, getReviews} from "@/services/review.service";

/**
 * Vuex State Manager pattern
 * @returns {{reviewError: null, reviews: [], review: {}}}
 */

const mutations = {
    setReview(state, review) {
        state.review = review;
    },
    setReviews(state, reviews) {
        state.reviews = reviews;
    },
    setReviewError(state, reviewError) {
        state.reviewError = reviewError;
    }
}

const actions = {
    async fetchReview({commit}, id) {
        try {
            const review = await getReview(id);
            commit('setReview', review);
        } catch (err) {
            commit('setReviewError', err);
        }
    },
    async fetchReviews({commit}) {
        try {
            const reviews = await getReviews();
            commit('setReviews', reviews);
        } catch (err) {
            commit('setReviewError', err);
        }
    },
}

const getters = {
    review: ({review}) => review,
    reviews: ({reviews}) => reviews,
    reviewError: ({reviewError}) => reviewError
}

const state = () => ({
    review: {},
    reviews: [],
    reviewError: null
})

export default {
    mutations,
    getters,
    actions,
    state
}