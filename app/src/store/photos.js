import { PhotosService } from '../resource';
import Photo from '../models/photo';

const state = {
  photos: []
};

const getters = {};

const actions = {

  async fetchPhotos({ commit }, albumId) {
    let response = await PhotosService.fetchPhotos(albumId);
    let photos = [];
    if (response.data) {
      for(let i =0; i < response.data.length; i++){
        let photo = new Photo(response.data[i])
        photos.push(photo);
      }
    }
    commit('setPhotos', photos);
  }
};

const mutations = {
    setPhotos(state, photos) {
    state.photos = photos;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
