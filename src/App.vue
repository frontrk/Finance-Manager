<template>
  <div id="app">      

    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <md-button @click="toggleMe">toggle me</md-button>
        <span class="md-title">Finance Manager</span>        
        <div>{{moment().format('YYYY-MM-DD')}}</div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content >
        <div class="md-layout md-gutter md-alignment-left">
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <Balance v-if="isTrue"/>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <Manager/>
          </div>
          <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <List/>
          </div>
        </div>                        
      </md-app-content>
    </md-app>


  </div>
</template>

<script>
import Balance from './components/Balance.vue'
import List from './components/List.vue'
import Manager from './components/Manager.vue'
import Options from './components/Options.vue'

export default {
  name: 'App',
      data: () => ({
      menuVisible: false
    }),
  computed: {
    isTrue: function() {
      return this.$store.getters.isTrue
    }
  },
  methods: {
    toggleMe: function () {
      this.$store.dispatch('toggle')
    }
  },
  components: {
    Balance,
    List,
    Manager,
    Options
  },
}
</script>

<style>
#app {
  font-family: 'Roboto Condensed', sans-serif;
}
.md-card {
  margin: 10px;    
}

.container {
  margin-left: 20%;
  margin-right: 20%;
}

.md-app-content {
  border: none !important;   
}

</style>
