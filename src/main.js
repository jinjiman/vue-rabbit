import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引用初始化样式文件：
import '@/styles/common.scss'
import { lazyPlugin } from '@/directives/index'
import { componentPlugin } from '@/components/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// import { useIntersectionObserver } from '@vueuse/core'
//测试接口函数
// import { getCategory } from '@/apis/testApi'
// getCategory().then(res => {
//   console.log(res);
// })
const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

//app的directive方法可以自定义指令
app.use(componentPlugin)
app.mount('#app')
app.use(lazyPlugin)//等价于lazyPlugin.install(app)
// app.directive('img-lazy', {
//   mounted(el, binding) {
//     // el:指定绑定的那个元素
//     // binding:指定指令的“=”右边的值，这里指的是图片URL 
//     useIntersectionObserver(
//       el, ([{ isIntersecting }]) => {
//         if (isIntersecting) {
//           // 进入视口区域
//           el.src = binding.value
//         }
//       }
//     )
//   }
// })