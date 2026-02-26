import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'//因为@/apis/layout没有用default导出，所以必须加{},至于.js后缀可以随意的省略

export const useCategoryStore = defineStore('category', () => {
  // 导航列表的数据管理
  //这是一个state，保存列表数据
  const categorylist = ref([])
  //这是一个action，获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    // console.log(res);
    categorylist.value = res.result
    // console.log(list.value);


  }

  return {
    categorylist,
    getCategory
  }
})
