<template>
  <div id="app-container">
    <!-- 这是header组件 -->
    <mt-header fixed title="Vue项目"></mt-header>

    <!-- 中间路由<router-view>区域 -->
		<transition>
		<router-view></router-view>
		</transition>

    <!-- 底部Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-fx" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-fx" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-fx" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
				  <span class="mui-badge">0</span>
				</span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-fx" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>

</script>


<style lang="scss" scoped>
.mint-header{
  z-index: 99;
}
#app-container{
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;//解决了底部按钮滚动条问题
}

.v-enter{
	opacity: 0;
	transform: translateX(100%);

}
.v-leave-to {
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;

}
.v-enter-active,
.v-leave-active {
	transition: all 0.5s ease;
}
// 该类名，解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-fx.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-fx {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-fx .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-fx .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}

</style>
