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
      axios.post('api/counter/increment').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    Dincrement10(state) {
      axios.post('api/counter/increment10').then((response) => {
        state.commit('setCount', response.data);
      });
    },
    get_counter(state) {
      axios.get('api/counter').then((response) => {
        state.commit('setCount', response.data);
      });
    },
  },
  getters: {
  },
};
