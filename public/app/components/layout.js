import { NavBar } from './navbar.js';
import { NavDrawer } from './navdrawer.js';
import { AppBar } from './appbar.js';


const Layout=Vue.component('Layout', {
    template: ` 

  <v-app id="inspire">
    <navdrawer> </navdrawer>
      <!-- <navbar> </navbar> -->

    <appbar > </appbar> 
     <v-content>
       <v-container
         class="fill-height"
         fluid
       >
       <router-view></router-view>

       </v-container>
    </v-content>
</v-app>

`,
components: {
  // 'navbar': NavBar
  'navdrawer': NavDrawer,
  'appbar': AppBar

},

data: () => ({
})

});

export {Layout}