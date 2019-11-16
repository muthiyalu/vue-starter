
const NavBar=Vue.component('navbar', {
  template: ` 
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn
        icon
        @click.stop="mini = !mini"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
              
              <v-btn  v-bind:to="item.link" text: true >{{ item.title }}</v-btn>

          </v-list-item-title>
         
        
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>



`,

props: {
source: String,
},
data: () => ({
  drawer: true,
  items: [
    { title: 'Home', icon: 'mdi-home-city',link:'/' },
    { title: 'About', icon: 'mdi-account', link:'/about'  },
    { title: 'Users', icon: 'mdi-account-group-outline', link:'/users'  },
  ],
  mini: true,

})

});

export { NavBar }