import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: {},
    headers: {}
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },

    setCategory(state, category) {
      state.category = category
    },

    setHeaders(state) {
      state.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }
  },

  actions: {
    fetchCategories({commit}) {
      axios.get("/categories")
        .then(response => commit('setCategories', response.data))
        .catch(err => console.log(err.response))
    },

    getCategory({commit}, id) {
      axios.get(`/categories/${id}`)
        .then(response => commit('setCategory', response.data))
        .catch(err => console.log(err.response))
    },

    postCategory({commit, state}, category) {
      commit('setHeaders')
      return new Promise((resolve, reject) => {
        axios.post("/categories", category, { headers: state.headers })
          .then(response => {
            commit('setCategory', response.data)
            resolve(response)
          })
          .catch(err => {
            reject(err)
            console.log(err)
          })
      })
    }
  }
})
