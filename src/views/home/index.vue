<script setup>
import HomeCategory from '@/views/home/components/HomeCategory.vue'
import HomeBanner from '@/views/home/components/HomeBanner.vue'
import HomeNew from '@/views/home/components/HomeNew.vue'
import HomeHot from '@/views/home/components/HomeHot.vue'
import HomeProduct from '@/views/home/components/HomeProduct.vue'
import HomePanel from '@/views/home/components/HomePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <!-- 在 Vue 3 模板中传递 props 时，驼峰命名必须改成短横线形式（kebab-case），不能直接写驼峰。 -->
  <HomePanel title="新鲜好物" sub-title="新鲜好物,好多物品">
    <div>111</div>
  </HomePanel>
  
  <HomePanel title="人气推荐" sub-title="人气推荐,好多物品">
    <div>222</div>
  </HomePanel>
</template>