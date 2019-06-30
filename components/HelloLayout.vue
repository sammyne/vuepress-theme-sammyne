<template>
  <div class="theme-container">
    <navbar/>
    <main class="page">
      <Content class="theme-default-content"/>
      <div class="theme-default-content">
        {{ pages }}
        <ul>
          <li v-for="page in pages" :key="page.path">
            <a :href="page.path">{{ page.title }}</a>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Sidebar from '@theme/components/Sidebar'

export default {
  components: { Navbar, Sidebar },
  computed: {
    pages() {
      return this.$site.pages
    }
  }
}
</script>
