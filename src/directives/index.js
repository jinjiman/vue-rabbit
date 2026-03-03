import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const lazyPlugin = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:指定绑定的那个元素
        // binding:指定指令的“=”右边的值，这里指的是图片URL 
        const { stop } = useIntersectionObserver(
          el, ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
              // useIntersectionObserver的返回值有stop()方法
            }
          }
        )
      }
    })
  }
}