import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import post from './stores/post'

const store = new Vuex.Store({
  modules: {
    post,
  },
});

export default store