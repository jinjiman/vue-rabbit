//createRouter :创建路由实例
//createWebHistory :创建history模式的路由实例
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
import Category from '@/views/category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,//这个是一级路由组件，出口写在App根组件里
      children: [
        {
          path: '',//这个是默认路径，什么都不写的话，随着一级组件的渲染，二级组件也会
          component: Home//二级组件也需要一个渲染出口，写在它上面的一级组件里面就好
        },
        {
          path: 'category',
          component: Category//二级组件也需要一个渲染出口，写在它上面的一级组件里面就好
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ],
})

export default router
