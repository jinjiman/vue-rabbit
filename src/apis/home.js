import httpInstance from "@/utils/http";//因为@/utils/http是用default导出的，所以不可以加{}

export function getBannerAPI(params = {}) {//设置params的默认值，也就是当getBannerAPI（）什么都没传的时候，params是空对象
  // 默认值为1，商品为2
  const { distributionSite = '1' } = params
  // 分两种情况：
  // 1.params是空对象，distributionSite不在params里，解构不出来，那么distributionSite会被赋值1
  // 2.params不是空对象，{distributionSite}可以直接被获取并且值为2
  return httpInstance({
    url: 'home/banner',
    params: {
      distributionSite
    }
  })
}
// axios的默认格式是：
// axios({
//    url: '',
//    method: 'get',
//    params: {}
// })

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  // return httpInstance('home/hot', 'get', {})
  return httpInstance({
    url: 'home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: '/home/goods'
  })
}