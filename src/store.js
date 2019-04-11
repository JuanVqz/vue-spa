import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:3000/api"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    category: {},
    headers: {},
    token: false
  },

  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },

    setCategory(state, category) {
      state.category = category
    },

    setToken(state, token) {
      localStorage.setItem('token', token)
      state.token = true
    },

    removeToken(state) {
      localStorage.removeItem('token')
      state.token = false
    },

    setHeaders(state) {
      state.headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token')
      }
    }
  },

  actions: {
    fetchCategories({commit, state}) {
      commit('setHeaders')
      axios.get("/categories", { headers: state.headers })
        .then(response => commit('setCategories', response.data))
        .catch(err => console.log(err.response))
    },

    getCategory({commit, state}, id) {
      commit('setHeaders')
      axios.get(`/categories/${id}`, { headers: state.headers })
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
    },

    doLogin({ commit, state }, user) {
      commit('setHeaders')
      return new Promise((resolve, reject) => {
        axios.post("/authenticate", user, { headers: state.headers })
          .then(response => {
            commit('setToken', `Bearer ${response.data.auth_token}`)
            resolve({ path: 'home_path' })
          })
          .catch(err => reject(err))
      })
    },

    doLogout({ commit }) {
      commit('removeToken')
      commit('setHeaders')
    }
  }
})
