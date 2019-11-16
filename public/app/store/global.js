
import VueEx from '../../javascripts/vuex.esm.browser.min.js';

 const store = new VueEx.Store({
    state: {

        sidebar: true,
    },
    getters : {


    },
    mutations: {

        toggleSidebar(state) {
            state.sidebar = !state.sidebar;
        }
    },
    
     
  })

  export {store}