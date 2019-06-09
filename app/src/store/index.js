import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
import albums from './albums'
import photos from './photos'

// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  users,
  albums,
  photos
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
