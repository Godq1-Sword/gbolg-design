import { createApp } from 'vue'
import App from './App.vue'
// router
import router from './router'
import store from './store'
// antdUI
import { Button, Col, Divider, Input, Layout, Menu, Row, Space, Tree, Typography } from 'ant-design-vue'
// markdown文件编辑器
import 'mavon-editor/dist/css/index.css'
import Mavon from 'mavon-editor'
// elementUI
import 'element-plus/dist/index.css'
import { ElButton, ElInput, ElMenu, ElCol, ElRow, ElContainer, ElScrollbar } from 'element-plus'

createApp(App)
  .use(store)
  // md编辑器
  .use(Mavon)
  // 路由
  .use(router)
  // antdUI
  .use(Layout)
  .use(Menu)
  .use(Col)
  .use(Row)
  .use(Input)
  .use(Button)
  .use(Typography)
  .use(Space)
  .use(Divider)
  .use(Tree)
  // elementUI
  .use(ElRow)
  .use(ElCol)
  .use(ElMenu)
  .use(ElInput)
  .use(ElButton)
  .use(ElScrollbar)
  .use(ElContainer)
  .mount('#app')
