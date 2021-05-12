import axios from 'axios';

export default {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token') || '',
    username: '',
  }),
  mutations: {
    setToken(state, n) {
      state.token = n;
    },
    setUsername(state, n) {
      state.username = n;
    },
  },
  actions: {
    login(state, parameters) {
      axios.post('auth/login', parameters)
        .then((response) => {
          localStorage.setItem('token', response.data.access_token);
          state.commit('setToken', response.data.access_token);
          state.commit('setUsername', response.data.username);
        })
        .catch((err) => {
          localStorage.removeItem('token');
          state.commit('setToken', '');
          console.log(err);
        });
    },
  },
  getters: {
  },
};
