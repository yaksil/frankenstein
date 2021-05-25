import { sum } from "ramda";
import axios from "axios";
// import axios from "axios";

/**
 * Vuex State Manager pattern
 * @returns {{categoryError: null, categories: [], category: {}}}
 */

const mutations = {
  addToCart(state, product) {
    const productInCart = state.cartItems.find(
      ({ _id }) => product._id === _id
    );
    if (productInCart) {
      const currentProductsInCart = state.cartItems;
      state.cartItems = currentProductsInCart.filter(
        ({ _id }) => product._id !== _id
      );
    } else {
      state.cartItems.push(product);
    }
  },
  setPaymentError(state, error) {
    state.paymentError = error;
  },
  clearCart(state) {
    state.cartItems = [];
  },
};

const actions = {
  async createOrders(state, user_id) {
    try {
      const res = await axios.post("http://localhost:4545/api/orders/", {
        user_id: user_id,
        namesake: "",
        state: "active",
        items: state.cartItems,
        shipping: "",
        total: "",
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  },
};

const getters = {
  cartTotalPrice: ({ cartItems }) => sum(cartItems.map((item) => item.price)),
  cartCount: ({ cartItems }) => cartItems.length,
  cart: ({ cart }) => cart,
  cartItems: ({ cartItems }) => cartItems,
  paymentError: ({ paymentError }) => paymentError,
};

const state = () => ({
  cart: {
    total: 0,
  },
  cartItems: [],
  paymentError: null,
});

export default {
  mutations,
  getters,
  actions,
  state,
};
