import Vue from 'vue'
import Router from 'vue-router'
import ListNotes from '@/components/ListNotes'
import CreateNote from '@/components/CreateNote'
import Detail from '@/components/Detail'
import ErrorPage from '@/components/ErrorPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListNotes',
      component: ListNotes
    },
    {
      path: '/create',
      name: 'CreateNote',
      component: CreateNote
    },
    {
      path: '/detail/:note_id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/hi',
      name: 'ErrorPage',
      component: ErrorPage
    }


  ]
})
