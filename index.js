const dayjs = require('dayjs')

// reference from https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-vue
module.exports = {
    extend: "@vuepress/theme-default",
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install dayjs yourself
                    return dayjs(timestamp).format(`MM/DD/YYYY HH:mm:ss`)
                }
            },
        ],
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
    ],
}