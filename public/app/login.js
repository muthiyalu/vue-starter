import VueRouter from '../javascripts/vue-router.esm.browser.min.js';
import VueEx from '../javascripts/vuex.esm.browser.min.js';
import {store} from './store/global.js';

import { LoginPanel } from './components/login-panel.js';
import {LoginTemplate} from './templates/login-template.js';



Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueEx);

// const router = new VueRouter({
//   routes: [{
//     path: '/about',
//     component: About,
//     name: "About Us Page"
//   },
//   {
//     path: '/organization',
//     component: organization,
//     name: "Organization"
//   }]
// });



new Vue({
    el: '#login-app', // This should be the same as your <div id=""> from earlier.
    vuetify: new Vuetify(),
    // router,
    store,
    components: {
        'login-panel': LoginPanel,
    },   
    created () {
      this.$vuetify.theme.dark = tfalserue
    },
    template: LoginTemplate
});
