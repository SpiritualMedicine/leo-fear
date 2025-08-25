<script lang="ts" setup>
import Content from './content.vue'
import Footer from './footer.vue'
import Header from './header.vue'
import Sidebar from './sidebar.vue'

// workbench
</script>

<template>
  <n-layout position="absolute" has-sider>
    <Sidebar />
    <n-layout>
      <Header />
      <Content />
      <Footer />
    </n-layout>
  </n-layout>
</template>
