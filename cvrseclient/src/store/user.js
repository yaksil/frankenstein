import {getUser, getUsers} from "@/services/user.service";

/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setUsers(state, users) {
        state.users = users;
    },
    setUserError(state, userError) {
        state.userError = userError;
    }
}

const actions = {
    async fetchUser({commit}, id) {
        try {
            const user = await getUser(id);
            commit('setUser', user);
        } catch (err) {
            commit('setUserError', err);
        }
    },
    async fetchUsers({commit}) {
        try {
            const users = await getUsers();
            commit('setUsers', users);
        } catch (err) {
            commit('setUserError', err);
        }
    },
}

const getters = {
    user: ({user}) => user,
    users: ({users}) => users,
    userError: ({userError}) => userError
}

const state = () => ({
    user: {},
    users: [],
    userError: null,
})

export default {
    mutations,
    getters,
    actions,
    state
}