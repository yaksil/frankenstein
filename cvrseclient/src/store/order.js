import axios from "axios";

/**
 * Vuex State Manager pattern
 */

const mutations = {
  setOrder(state, order) {
    state.order = order;
  },
  setOrders(state, orders) {
    state.orders = orders;
  },
  setOrderError(state, orderError) {
    state.orderError = orderError;
  },
};

const actions = {
  async getOrdersByArtisan({ commit }, artisan_id) {
    try {
      const res = await axios.get(
        `http://localhost:4545/api/orders/artisan/${artisan_id}`
      );
      console.log(res);
      // commit("setOrders");
    } catch (e) {
      commit("setOrderError", e);
    }
  },
};

const getters = {};

const state = () => ({
  order: {},
  orders: [],
  orderError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
