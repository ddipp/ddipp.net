import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    username: '',
    status: '',
  }),
  mutations: {
    setToken(state, n) {
      state.token = n;
    },
    setUsername(state, n) {
      state.username = n;
    },
    setStatus(state, n) {
      state.status = n;
    },
  },
  actions: {
    login(state, parameters) {
      axios.post('auth/login', parameters)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
          state.commit('setToken', response.data.access_token);
          state.commit('setUsername', response.data.username);
          state.commit('setStatus', 'Ok');
        })
        .catch((err) => {
          localStorage.removeItem('token');
          state.commit('setToken', '');
          state.commit('setUsername', '');
          state.commit('setStatus', err);
        });
    },
  },
  getters: {
  },
};
