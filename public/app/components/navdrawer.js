  
const NavDrawer=Vue.component('navdrawer', {
    template:  ` 

    <v-navigation-drawer
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-brain</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Knowledge Agent</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-security</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Security Agent</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Starred</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


   

`,

data: () => ({
 
    dialog: false,
    items: [
      { icon: 'mdi-brain', 
        text: 'Knowledge Agent',
        model: false,
        children: [
            { icon: 'mdi-office-building', text: 'Organisation',  model: true },
            { icon: 'mdi-domain', text: 'Business Unit' },
            { icon: 'mdi-window-open-variant', text: 'Business Capablity' },
            { icon: 'mdi-store', text: 'Business Service' },
            { icon: 'mdi-buffer', text: 'Application Stack' },
            { icon: 'mdi-server', text: 'On Prem Stack' },
            { icon: 'mdi-cloud-braces', text: 'Cloud Stack' },
            { icon: 'mdi-shape', text: 'Business Entity' },
            { icon: 'mdi-shape-plus', text: 'Custom Entity' }, 
          ],
      },
      {
        icon: 'mdi-chevron-up', 'icon-alt': 'mdi-chevron-down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'mdi-plus', text: 'Create label' },
        ],
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' },
        ],
      },

    ],

}),

computed: {
  drawer: {
    get () {
      return this.$store.state.sidebar
    },

  }
}

});


export {NavDrawer}