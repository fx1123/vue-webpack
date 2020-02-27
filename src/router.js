import VueRouter from 'vue-router'

import home from './components/tabber/HomeContainer.vue'
import member from './components/tabber/MemberContainer.vue'
import shopcar from './components/tabber/ShopcarContainer.vue'
import search from './components/tabber/SearchContainer.vue'
import newlist from './components/news/NewList.vue'
import newsinfo from './components/news/NewsInfo.vue'
import photolist from './components/photos/PhotoList.vue'
import photoinfo from './components/photos/PhotoInfo.vue'
import goodsist from './components/goods/GoodsList.vue'


// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        //重定向到根路径
        { path: "/", redirect: "/home" },
        { path: "/home", component: home },
        { path: "/member", component: member },
        { path: "/shopcar", component: shopcar },
        { path: "/search", component: search },
        { path: "/home/newlist", component: newlist },
        { path: "/home/newsinfo/:id", component: newsinfo },
        { path: "/home/photolist", component: photolist },
        { path: "/home/photoinfo/:id", component: photoinfo },
        { path: "/home/goodslist", component: goodsist }



    ],
    linkActiveClass: 'mui-active'
})

// 把路由对象暴露出去
export default router