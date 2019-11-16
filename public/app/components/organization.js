
import Vue from '../../javascripts/vue.esm.browser.min.js'

const organization=Vue.component('Organization', {
    template: ` 
  <v-container id="organization">

    <p> Hello org</p>
  </v-container>
`,

props: {
  source: String,
},
data: () => ({
 

})

});

export {organization}