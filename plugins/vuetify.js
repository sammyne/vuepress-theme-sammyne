import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import Vue from 'vue'

// A-la-cache is broken 
//import Vuetify from 'vuetify/lib'

import Vuetify, {
    VApp,
    VAppBar,
    VBtn,
    VCard,
    VCardTitle,
    VCardText,
    VCol,
    VContainer,
    VContent,
    VDataIterator,
    VFooter,
    VIcon,
    VRow,
    VSpacer,
    VToolbarTitle,
} from 'vuetify/lib'
//import 'vuetify/dist/vuetify.min.css'

//Vue.use(Vuetify)
Vue.use(Vuetify, {
    components: {
        VApp,
        VAppBar,
        VBtn,
        VCard,
        VCardTitle,
        VCardText,
        VCol,
        VContainer,
        VContent,
        VDataIterator,
        VFooter,
        VIcon,
        VSpacer,
        VToolbarTitle,
        VRow,
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
})