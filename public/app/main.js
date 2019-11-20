import VueRouter from '../javascripts/vue-router.esm.browser.min.js';
import VueEx from '../javascripts/vuex.esm.browser.min.js';
import {store} from './store/global.js';



import {organization} from './components/organization.js';

import { MainTemplate} from './templates/main-template.js';

import { About } from './components/about.js';
import { Layout } from './components/layout.js';


Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueEx);

const router = new VueRouter({
  routes: [{
    path: '/about',
    component: About,
    name: "About Us Page"
  },
  {
    path: '/organization',
    component: organization,
    name: "Organization"
  }]
});



new Vue({
    el: '#app', 
    vuetify: new Vuetify(),
    router,
    store,
    components: {
        'layout': Layout,
    },   
    created () {
      this.$vuetify.theme.dark = false
    },
    template: MainTemplate
});
