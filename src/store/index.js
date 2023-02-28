import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  getters: {},
  //用來修改 state 的方法，methods
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        //透過 API 取得的 currentUser
        ...currentUser,
      };
      state.isAuthenticated = true;
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();

        const { id, name, email, image, isAdmin } = data;

        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });
      } catch (error) {
        console.error(error.message);
      }
    },
  },
  modules: {},
});
