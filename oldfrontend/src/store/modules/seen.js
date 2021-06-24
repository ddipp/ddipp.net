import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    seen: true,
  }),
  mutations: {
    setSeen(state, n) {
      state.seen = n;
    },
  },
  actions: {
    async reverseSeen(state) {
      await axios.post('seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
    async get_seen(state) {
      await axios.get('seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
  },
  getters: {
  },
};
