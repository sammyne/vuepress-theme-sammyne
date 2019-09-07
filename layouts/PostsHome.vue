<template>
  <v-app>
    <navbar />
    <v-content class="theme-sammyne-content">
      <v-container>
        <v-row justify="center">
          <v-col sm="12" md="8">
            <v-data-iterator
              :custom-sort="sortPage"
              :footer-props="footerProps"
              :items="pages"
              :items-per-page.sync="itemsPerPage"
            >
              <template #item="{ item }">
                <v-card class="transparent" elevation="1">
                  <v-card-title class="py-2">
                    <a :href="item.path" class="headline mb-0 xml-links">{{ item.title }}</a>
                  </v-card-title>
                  <v-card-text class="py-0">
                    <div class="excerpt" v-html="item.excerpt"></div>
                  </v-card-text>
                  <v-card-actions>
                    <div>
                      <v-chip class="body-2" color="transparent" label small>
                        <v-icon left small>mdi-map-marker</v-icon>Sammy in Shanghai
                      </v-chip>
                      <br />
                      <v-chip
                        class="body-2 grey--text text--darken-2"
                        color="transparent"
                        label
                        small
                      >
                        <v-icon left small>mdi-clock-outline</v-icon>
                        {{ item.lastUpdated || 'unknown' }}
                      </v-chip>
                    </div>
                  </v-card-actions>
                </v-card>
              </template>
            </v-data-iterator>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <page-footer />
  </v-app>
</template>

<script>
// TODO: more digging about @theme
import Navbar from '@theme/components/Navbar'
import PageFooter from '@theme/components/PageFooter'
import Sidebar from '@parent-theme/components/Sidebar'

import dayjs, { Dayjs } from 'dayjs'

import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)

export default {
  data() {
    return {
      footerProps: {
        itemsPerPageOptions: [5, 10, 15],
        itemsPerPageText: '每页个数'
      },
      itemsPerPage: 5
    }
  },
  components: { Navbar, PageFooter, Sidebar },
  computed: {
    pages() {
      const sanitizer = excerpt =>
        (excerpt || '').replace(/^\s*<h1[^>]*>.*<\/h1>/, '').trim() || '...'

      return this.$site.pages
        .filter(page => !page.frontmatter.isSummary)
        .map(page => ({ ...page, excerpt: sanitizer(page.excerpt) }))
    }
  },
  methods: {
    sortPage(items, index, isDesc) {
      // fmt must be the same as that used by transformer of '@vuepress/last-updated'
      const fmt = `MM/DD/YYYY HH:mm:ss`
      return items.sort(
        (x, y) =>
          dayjs(y.lastUpdated, fmt).unix() - dayjs(x.lastUpdated, fmt).unix()
      )
    }
  }
}
</script>

<style lang="stylus">
.xml-address {
  line-height: 1;
}

a.xml-links {
  &:hover {
    text-decoration: underline;
  }
}
</style>
