import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

import Home from '../components/tabbar/Home';
import Member from '../components/tabbar/Member';
import Shopcar from '../components/tabbar/Shopcar';
import Search from '../components/tabbar/Search';
import newslist from '../components/news/newslist.vue';
import newsinfo from '../components/news/newsinfo.vue';
import picturelist from '../components/picture/picturelist.vue'
import goodslist from '../components/goods/goodslist.vue'
import goodsinfo from '../components/goods/goodsinfo.vue'

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/member', component: Member },
    { path: '/shopcar', component: Shopcar },
    { path: '/search', component: Search },
    { path: '/home/newslist', component: newslist },
    { path: '/home/newsinfo', component: newsinfo },
    { path: '/home/picturelist', component: picturelist },
    { path: '/home/goodslist', component: goodslist },
    { path: '/home/goodsinfo', component: goodsinfo },
  ],
  linkActiveClass: 'mui-active' // 路由高亮
})
