import Vuex from 'vuex'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    users: null
  },
  getters: {
    
  },
  mutations: {
    getUsers: (state, data) => {
      if (!state.users) {
        state.users = []
        data.body.forEach(function (item) {
          state.users.push(item)
        })
        return state.users
      }
    },
    patchUser: (state, data) => {
      state.users.forEach(function (user) {
        if (user.id === data.id) {
          user.name = data.name
          user.username = data.username
          user.email = data.email
          user.website = data.website
          user.phone = data.phone
        }
      })
      return state.users
    },
    deleteUser: (state, data) => {
      let index = data.id - 1
      if (index > -1) {
        state.users.splice(index, 1)
      }
      for (let i = 0; i < state.users.length; i++) {
        state.users[i].id = i + 1
      }
      return state.users
    },
    addUser: (state, data) => {
      state.users.push(data)
      return state.users
    }
  },
  actions: {
    getUsers: context => {
      Vue.http.get('http://jsonplaceholder.typicode.com/users').then(function(data){
        context.commit('getUsers', data)
      })
    },
    patchUser: (context, user) => {
      Vue.http.patch('http://jsonplaceholder.typicode.com/users/' + user.id).then(function(data){
        context.commit('patchUser', user)
      })
    },
    deleteUser: (context, user) => {
      Vue.http.delete('http://jsonplaceholder.typicode.com/users/' + user.id).then(function(data){
        context.commit('deleteUser', user)
      })
    },
    addUser: (context, user) => {
      Vue.http.post('http://jsonplaceholder.typicode.com/users/').then(function(data){
        context.commit('addUser', user)
      })
    }
  }
})