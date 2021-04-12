import { createStore } from 'vuex';
import axios from 'axios';
import counter from './modules/counter';

export default createStore({
  modules: {
    counter,
  },
  state: {
    message: 'Reverse me!',
    seen: true,
    list: [
      { text: 'First element' },
      { text: 'Second element' },
    ],
  },
  actions: {
    reverseSeen(state) {
      axios.post('api/seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
    get_seen(state) {
      axios.get('api/seen').then((response) => {
        state.commit('setSeen', response.data);
      });
    },
  },
  mutations: {
    addToList(state, newListItem) {
      state.list.push({ text: newListItem });
    },
    reverseMessage(state) {
      state.message = state.message
        .split('')
        .reverse()
        .join('');
    },
    updateMessage(state, n) {
      state.message = n;
    },
    setSeen(state, n) {
      state.seen = n;
    },
  },
});
