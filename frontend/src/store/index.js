import { createStore } from 'vuex';
import counter from './modules/counter';
import message from './modules/message';
import li from './modules/li';
import seen from './modules/seen';

export default createStore({
  modules: {
    counter,
    message,
    seen,
    li,
  },
  state: {
  },
  actions: {
  },
  mutations: {
  },
});
