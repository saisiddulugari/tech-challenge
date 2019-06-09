import { AlbumsService } from '../resource';
import Album from '../models/album';

const state = {
  albums: []
};

const getters = {};

const actions = {

  async fetchAlbums({ commit}, userId) {
    let response = await AlbumsService.fetchAlbums(userId);
    let albums = [];
    if (response.data) {
      for(let i =0; i < response.data.length; i++){
        let album = new Album(response.data[i])
        albums.push(album);
      }
    }
    commit('setAlbums', albums);
  }
};

const mutations = {
  setAlbums(state, albums) {
    state.albums = albums;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
