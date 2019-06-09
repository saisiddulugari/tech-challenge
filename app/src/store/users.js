import { UserService } from '../resource';
import User from '../models/user';

const state = {
  users: []
};

const getters = {};

const actions = {

  async fetchUsers({ commit}) {
    let response = await UserService.fetchUsers();
    let users = [];
    if (response.data) {
      for(let i =0; i < response.data.length; i++){
        let user = new User(response.data[i])
        users.push(user);
      }
    }
    commit('setUsers', users);
  }
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
