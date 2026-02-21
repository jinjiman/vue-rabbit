import httpInstance from "@/utils/http";//因为@/utils/http是用default导出的，所以不可以加{}

export function getCategoryAPI() {
  return httpInstance({
    url: 'home/category/head'
  })
}