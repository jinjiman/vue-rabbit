import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      // ...按需导入
      // 比如，如果你使用了 ElButton 组件，AutoImport 会自动为你导入 ElButton，
      // 免去了你每次都要写类似以下的代码：import { ElButton } from 'element-plus';
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      //1.配置elementPlus采用sass样式配色系统,elementPlus的底层样式也是用sass写的，
      // 你这里手动设置一下才可以自定义
      resolvers: [ElementPlusResolver({ importStyle: "sass" })],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //2.自动导入定制化样式文件进行样式覆盖
        //@/styles/element/index.scss这个是定制elementPlus的文件，
        //你如果只是改写不导入的话也会无法起作用，用这个方法可以将此文件导入到所有的scss以及style标签中
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `,
      }
    }
  }
})
