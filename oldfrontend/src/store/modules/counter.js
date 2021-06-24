import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    count: '',
  }),
  mutations: {
    setCount(state, n) {
      state.count = n;
    },
  },
  actions: {
    async Dincrement(state) {
      await axios.post('counter/increment').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    async Dincrement10(state) {
      await axios.post('counter/increment10').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    async get_counter(state) {
      await axios.get('counter').then((response) => {
        state.commit('setCount', response.data);
      });
    },
  },
  getters: {
  },
};
