//import Vuetify from "vuetify"
import vuetify from './plugins/vuetify'

// TODO: apply the A-la-carte
//import Vuetify from "vuetify/lib"

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    options.vuetify = vuetify;
}