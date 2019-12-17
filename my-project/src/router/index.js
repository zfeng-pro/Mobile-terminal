import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const List =()=>import('@/components/List');
const Article =()=>import('@/components/Article');
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    }
  ]
})
