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
        /* eslint no-unused-vars: ["error", { "args": "none" }] */
        .catch((err) => {
          localStorage.removeItem('token');
          state.commit('setToken', '');
          state.commit('setUsername', '');
          // console.log('err message');
          // const r = err;
          // console.log(r);
        });
    },
  },
  getters: {
  },
};
