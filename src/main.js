//导入vue
import Vue from 'vue'

//按需导入Mint-UI组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

//导入安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//导入MUI的样式
import './lib/mui/css/mui.min.css'
//导入购物车图片的样式文件 注意：先导入MUI样式
import './lib/mui/css/icons-extra.css'

//导入路由
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter)
    //导入自己的router.js
import router from './router'

//导入app组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),

    router
})