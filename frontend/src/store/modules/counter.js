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
    Dincrement(state) {
      axios.post('counter/increment').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    Dincrement10(state) {
      axios.post('counter/increment10').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    get_counter(state) {
      axios.get('counter').then((response) => {
        state.commit('setCount', response.data);
      });
    },
  },
  getters: {
  },
};
