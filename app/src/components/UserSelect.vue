<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-card color="blue-grey darken-2" class="white--text">
        <v-card-title primary-title>
          <div>
            <div class="headline">Select a user</div>
            <span>To view albums, please select a user from the dropdown below.</span>
          </div>
        </v-card-title>
        <v-card-text>
          <v-flex xs12 md6 lg3>
            <v-select
              :items="users"
              name="users"
              label="Select a User"
              v-model="model"
              dark
              item-text="name"
              item-value="id"
            ></v-select>
          </v-flex>
          <v-btn dark @click="getAlbums()">View Albums</v-btn>
          <div v-if="albums.length != 0">
              <v-flex
              v-for="album in albums"
              :key="`${album.id}`"
              xs12 md6 lg12>
              <v-card flat tile height="100%">
                <v-card-text>
                  <div class="v-title">
                    {{ album.title }}
                  </div>
                </v-card-text>
                <v-card-actions>
          <v-btn flat color="primary" @click="getPhotos(album.id)">View Photos</v-btn>
        </v-card-actions>
              </v-card>
            </v-flex>
          </div>
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn flat dark @click="getAlbums()">View Albums</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-flex>
    <v-dialog v-model="openDialog" max-width="750">
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="photo in photos"
              :key="photo.id"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="photo.url"
                  :lazy-src="photo.url"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  props: ['users'],
  data() {
    return {
      model: '',
      openDialog: false
    };
  },

  computed: {
 ...mapState('albums', {
      albums: 'albums'
    }),

...mapState('photos', {
      photos: 'photos'
    }),
  },
  
    methods: {
    getAlbums() {
        this.fetchAlbums(this.model)
    },
    getPhotos(albumId) {
        this.fetchPhotos(albumId);
        this.openDialog = true;
    },
    ...mapActions({
      fetchAlbums: 'albums/fetchAlbums'
    }),
    ...mapActions({
      fetchPhotos: 'photos/fetchPhotos'
    })

  }
};
</script>
<style scoped>
</style>
