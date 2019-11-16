var rootLayout=Vue.component('root-layout', {
      template: ` 
      <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp"   app >
      <v-list dense>
      <template v-for="item in items">
        <v-layout v-if="item.heading" :key="item.heading" row align-center >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex  xs6  class="text-xs-center" >
            <a href="#!" class="body-2 black--text" >EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group v-else-if="item.children"  :key="item.text"   v-model="item.model"  :prepend-icon="item.model ? item.icon : item['icon-alt']"  append-icon="" >
          <template v-slot:activator>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            @click="/hello"
          >
            <v-list-item-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ child.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          v-else
          :key="item.text"
          @click=""
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
  
      <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="blue darken-3"
        dark
      >
        <v-toolbar-title
          style="width: 300px"
          class="ml-0 pl-4"
        >
          <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
          <span class="hidden-sm-and-down">Platform</span>
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
      <v-content>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
        
          </v-row>
        </v-container>
      </v-content>
      <v-btn
        bottom
        color="pink"
        dark
        fab
        fixed
        right
        @click="dialog = !dialog"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
     
    </v-app>
  
  `,
  
  props: {
    source: String,
  },
  data: () => ({
    dialog: false,
    drawer: null,
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
  })

//   ,
//   data() {
//     return {
//         drawer: null
//     }
//   }

  })