<template>
  <v-app class="app">
<v-layout row wrap>
      <v-flex>
       <v-toolbar height="56px" color="primary" app class="toolbar">
         <v-toolbar-title  class="v-title white--text">Mavnet Coding Challenge</v-toolbar-title>
          </v-toolbar>
    <router-view></router-view>
           </v-flex>
      </v-layout>      

    </v-app>
</template>

<script>
export default {
  name: 'app',
      data: () => ({
    })
}
</script>

<style <style lang="scss" scoped>
  .app {
    padding-top: 100px;
    padding-left: 24px;
    padding-right: 24px;
  }
  .toolbar {
    z-index: 4;
  }
</style>
