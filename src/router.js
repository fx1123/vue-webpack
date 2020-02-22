import VueRouter from 'vue-router'

import home from './components/tabber/HomeContainer.vue'
import member from './components/tabber/MemberContainer.vue'
import shopcar from './components/tabber/ShopcarContainer.vue'
import search from './components/tabber/SearchContainer.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        //重定向到根路径
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopcar", component: shopcar },
        { path: "/search", component: search }

    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router