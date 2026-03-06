<script setup>
import LayoutNav from '@/views/layout/compenents/LayoutNav.vue'
import LayoutHeader from '@/views/layout/compenents/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/compenents/LayoutFooter.vue'
import LayoutFixed from '@/views/layout/compenents/LayoutFixed.vue';

import {useCategoryStore} from '@/stores/category'
import { onMounted } from 'vue';

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
// console.log(categoryStore.categorylist);

</script>

<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <!-- <RouterView :key="$route.fullPath"/> -->
  <LayoutFooter />
</template>