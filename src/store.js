import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: {}
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },

    setCategory(state, category) {
      state.category = category
    }
  },

  actions: {
    fetchCategories({commit}) {
      axios.get("http://localhost:3000/api/categories")
        .then(response => commit('setCategories', response.data))
        .catch(err => console.log(err.response))
    },

    getCategory({commit}, id) {
      axios.get(`http://localhost:3000/api/categories/${id}`)
        .then(response => {
          console.log(response)
          commit('setCategory', response.data)
        })
        .catch(err => console.log(err.response))
    }
  }
})
