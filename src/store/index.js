import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields'
import { task } from './task'

Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    task,
  },
  state:{

  },
  getters: {
      getField,
  },
  actions: {

  },
  mutations: {
      updateField,
  }
})

export default store
