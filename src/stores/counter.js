import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  //这个'counter'是一个id,每个 store 通过 id（比如 'category'）唯一标识
  //在同一个 Vue 应用实例里，你在不同文件里写const a1 = useCounterStore()，所有的a1都是指向的同一个文件
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
