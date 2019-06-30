
import Vuetify from "vuetify"

//import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
//import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// TODO: apply the A-la-carte

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    Vue.use(Vuetify, {
        iconfont: "mdi"
    })
}