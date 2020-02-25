//导入vue
import Vue from 'vue'

//按需导入Mint-UI组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//导入安装vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005';

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
//导入格式化插件。配置全局时间格式过滤器
import moment from 'moment'
Vue.filter('dateFormat', function(dataStr, pattern = "YYYY-MM-DD  HH-mm-ss") {
    return moment(dataStr).format(pattern);
})

//导入app组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),

    router
})