<template>
    <v-card class="sticky">
      <v-container
        fluid
        grid-list-lg>
       <user-select :users="select" :selected="selected"/>
      </v-container>
    </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import UserSelect from '../../components/UserSelect'

export default {
    components: {
    UserSelect,
  },

  data() {
    return {
        select: [],
        selected: ''
    };
  },
  computed: {
 ...mapState('users', {
      users: 'users'
    }),
  },
    created (){
     this.loadOnCreate();
},  

  methods: {
    async loadOnCreate() {
       await this.fetchUsers()
       this.select = this.users
    },

    ...mapActions({
      fetchUsers: 'users/fetchUsers'
    })
  }
};
</script>

<style scoped>
  .sticky {
    position: sticky;
    top: 9rem;
    z-index: 2;
  }
</style>
