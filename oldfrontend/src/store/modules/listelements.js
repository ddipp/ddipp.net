export default {
  namespaced: true,
  state: () => ({
    list: [
      { text: 'First element' },
      { text: 'Second element' },
    ],
  }),
  mutations: {
    addToList(state, newListItem) {
      state.list.push({ text: newListItem });
    },
  },
  actions: {
  },
  getters: {
  },
};
