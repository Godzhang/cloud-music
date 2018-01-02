import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index'
import MainSection from '@/components/mainSection'
import LocalSection from '@/components/localSection'
import UserSection from '@/components/userSection'
import SearchPage from '@/pages/search'
import Singercategory from '@/pages/singercategory'
import Music from '@/components/music'
import MusicVideo from '@/components/musicVideo'
import Radio from '@/components/radio'

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
      		component: MainSection,
          redirect: '/mainSec/music',
          children: [
            {
              path: 'music',
              component: Music
            },
            {
              path: 'video',
              component: MusicVideo
            },
            {
              path: 'radio',
              component: Radio
            }
          ]
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
    },
    {
      path: '/search',
      component: SearchPage
    },
    {
      path: '/singercategory',
      component: Singercategory
    }
  ]
})
