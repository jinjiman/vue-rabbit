<script setup>
import LayoutNav from '@/views/layout/compenents/LayoutNav.vue'
import LayoutHeader from '@/views/layout/compenents/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/compenents/LayoutFooter.vue'
</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>