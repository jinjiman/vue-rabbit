<script setup>
import LayoutNav from '@/views/layout/compenents/LayoutNav.vue'
import LayoutHeader from '@/views/layout/compenents/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/compenents/LayoutFooter.vue'
import LayoutFixed from '@/views/layout/compenents/LayoutFixed.vue';
</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>