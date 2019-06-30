// reference from https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-vue
module.exports = {
    extend: "@vuepress/theme-default",
    plugins: [
        ['container', {
            type: 'tip',
            defaultTitle: {
                '/zh/': '提示'
            },
            before: info => `<v-alert :value="true" class="py-1 alert-block" type="success"><span class="subheading font-weight-black grey--text text--darken-2">${info}</span>`,
            after: "</v-alert>"
        }],
        ['container', {
            type: 'warning',
            defaultTitle: {
                '/zh/': '注意'
            },
            before: info => `<v-alert :value="true" class="alert-block brown--text py-1  text-accent-4" icon="mdi-alert-decagram" type="warning"><span class="subheading font-weight-black brown--text">${info}</span>`,
            after: "</v-alert>"
        }],
        ['container', {
            type: 'danger',
            defaultTitle: {
                '/zh/': '警告'
            },
            before: info => `<v-alert :value="true" class="py-1 alert-block" type="error"><span class="subheading font-weight-black brown--text">${info}</span>`,
            after: "</v-alert>"
        }]
    ]
}