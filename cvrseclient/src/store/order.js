import { getOrder, getOrders } from "@/services/order.service";

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
      commit("setOrders");
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
