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
    reverseSeen(state) {
      axios.post('seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
    get_seen(state) {
      axios.get('seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
  },
  getters: {
  },
};
