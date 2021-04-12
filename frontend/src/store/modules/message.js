export default {
  namespaced: true,
  state: () => ({
    message: 'Reverse me!',
  }),
  mutations: {
    reverseMessage(state) {
      state.message = state.message
        .split('')
        .reverse()
        .join('');
    },
    updateMessage(state, n) {
      state.message = n;
    },
  },
  actions: {
  },
  getters: {
  },
};
