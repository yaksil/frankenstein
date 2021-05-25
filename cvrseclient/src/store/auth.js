// import { serviceLogin, serviceLogout } from "@/services/auth.service";
import axios from "axios";

/**
 * охуеть стор который я написала сама
 * вот своими вот ручками да
 * @type {{}}
 */

const mutations = {
  auth_failed(state) {
    state.authStatus = false;
  },
  auth_success(state, res) {
    state.authStatus = true;
    state.accessToken = res.accessToken;
    state.refreshToken = res.refreshToken;
    state.user_id = res.user_id;
  },
};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const res = await axios.post("http://localhost:4545/api/auth/login", {
        email: email,
        password: password,
      });
      //console.log();
      console.log(res.data.refreshToken, res.data.user_id);
      commit("auth_success", res.data);
    } catch (err) {
      commit("auth_failed");
    }
  },
  async logout() {},
};

const getters = {
  isLogged: ({ authStatus }) => authStatus,
  accessToken: ({ accessToken }) => accessToken,
  refreshToken: ({ refreshToken }) => refreshToken,
  user_id: ({ user_id }) => user_id,
};

const state = () => ({
  authStatus: false,
  accessToken: "",
  refreshToken: "",
  user_id: "",
});

export default {
  mutations,
  getters,
  actions,
  state,
};
