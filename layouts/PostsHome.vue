<template>
  <v-app>
    <navbar />
    <v-content class="theme-sammyne-content">
      <v-container grid-list-md>
        <v-layout justify-center row wrap>
          <v-flex md8 sm10 xs12>
            <!--<Content/>-->
            <!--
            {{ pages }}
            -->
            <v-data-iterator
              :custom-sort="sortPage"
              :items="pages"
              :pagination.sync="pagination"
              :rows-per-page-items="rowsPerPageItems"
              rows-per-page-text="每页个数"
              content-class="transparent"
            >
              <template #item="{item, index}">
                <v-card class="transparent" elevation="1">
                  <v-card-title primary-title class="py-2">
                    <div>
                      <a :href="item.path" class="headline mb-0 xml-links">{{ item.title }}</a>
                      <div class="excerpt" v-html="item.excerpt"></div>
                    </div>
                  </v-card-title>
                  <v-card-text class="pt-0 xml-address">
                    <v-layout align-center class="mb-1">
                      <v-icon small>mdi-map-marker</v-icon>
                      <span class="body-1 ml-1">Sammy in Shanghai</span>
                    </v-layout>
                    <v-layout align-center>
                      <v-icon small>mdi-clock-outline</v-icon>
                      <span
                        class="body-1 font-weight-thin grey--text ml-1 text--darken-2"
                      >{{ item.lastUpdated || 'unknown' }}</span>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </template>
            </v-data-iterator>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <page-footer />
  </v-app>
</template>

<script>
// TODO: more digging about @theme
import Navbar from "@theme/components/Navbar";
import PageFooter from "@theme/components/PageFooter";
import Sidebar from "@parent-theme/components/Sidebar";

import dayjs, { Dayjs } from "dayjs";

import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

export default {
  data() {
    return {
      pagination: {
        rowPerPage: 5
      },
      rowsPerPageItems: [5, 8, 12]
    };
  },
  components: { Navbar, PageFooter, Sidebar },
  computed: {
    pages() {
      const sanitizer = excerpt =>
        (excerpt || "").replace(/^\s*<h1[^>]*>.*<\/h1>/, "").trim() || "...";

      return this.$site.pages
        .filter(page => !page.frontmatter.isSummary)
        .map(page => ({ ...page, excerpt: sanitizer(page.excerpt) }));
    }
  },
  methods: {
    sortPage(items, index, isDesc) {
      // fmt must be the same as that used by transformer of '@vuepress/last-updated'
      const fmt = `MM/DD/YYYY HH:mm:ss`;
      return items.sort(
        (x, y) =>
          dayjs(y.lastUpdated, fmt).unix() - dayjs(x.lastUpdated, fmt).unix()
      );
    }
  }
};
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
