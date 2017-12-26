import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import MainSection from '@/components/mainSection'
import LocalSection from '@/components/localSection'
import UserSection from '@/components/userSection'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
      redirect: '/mainSec',
      children: [
      	{
      		path: 'mainSec',
      		component: MainSection
      	},
      	{
      		path: 'localSec',
      		component: LocalSection
      	},
      	{
      		path: 'userSec',
      		component: UserSection
      	}
      ]
    }
  ]
})
