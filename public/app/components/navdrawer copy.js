  
const NavDrawer=Vue.component('navdrawer', {
    template:  ` 

    <v-container id="nav-components">

    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item .heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                  <router-link to="/about">{{ item.text }}</router-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link  
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>

                <router-link to="/about">{{ child.text }}</router-link>

              </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else

            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

  </v-container>


   

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