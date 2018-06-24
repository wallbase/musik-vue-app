import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', component: Dashboard},
    {path: '/blog', component: Blog}
  ]
})
