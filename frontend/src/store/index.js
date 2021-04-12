import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    count: '',
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
  mutations: {
    addToList(state, newListItem) {
      state.list.push({ text: newListItem });
    },
    setCount(state, n) {
      state.count = n;
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
  modules: {
  },
});
