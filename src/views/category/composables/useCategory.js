// 封装分类数据相关业务代码
import { getCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  onBeforeRouteUpdate((to) => {//这个to是目标路由对象
    console.log('路由变化了');
    getCategory(to.params.id)

  })
  return {
    categoryData
  }
}