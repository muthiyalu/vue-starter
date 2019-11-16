
import {  mapActions } from '../../javascripts/vuex.esm.browser.min.js';


const AppBar=Vue.component('appbar', {
    template:  ` 
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      
    >
    <v-app-bar-nav-icon @click.stop="changeDrawerState()" />

      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      />
      <v-spacer />
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          /></v-avatar>
      </v-btn>
    </v-app-bar>
  

`,
data: () => ({



}),

methods:{

   changeDrawerState: function() {

    this.$store.commit('toggleSidebar');


},
    
},

});

export {AppBar}