import { createStore } from 'vuex';
import counter from './modules/counter';
import message from './modules/message';
import listelements from './modules/listelements';
import seen from './modules/seen';
import auth from './modules/auth';

export default createStore({
  modules: {
    counter,
    message,
    seen,
    listelements,
    auth,
  },
  state: {
  },
  actions: {
  },
  mutations: {
  },
});
