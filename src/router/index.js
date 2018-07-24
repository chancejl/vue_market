import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Index from '@/views/Home/Index'
import Typelist from '@/views/Type/Typelist'

import Table from '@/views/Table/Table'
import Detail from '@/views/Detail/Detail'
import Findindex from '@/views/Find/Findindex'
import Shopcar from '@/views/Shopcar/Shopindex'
import Mineindex from '@/views/Mine/Mineindex'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name:'home',
      components: {
        Header,
        default:Index,
        Footer
      }
    },
    {
      path:'/type:id',
      name:'type',
      components:{
        Header,
        default:Typelist,
        Footer
      }
    },
    {
      path:'/find/:id',
      name:'find',
      components:{
        Header,
        default:Findindex,
        Footer
      }
    },
    {
      path:'/shopcar/:id',
      name:'shopcar',
      components:{
        Header,
        default:Shopcar,
        Footer

      }
    },
    {
      path:'/mine',
      name:'mine',
      components:{
        default:Mineindex,
        Footer
      }
    },
    {
      path: '/table:id',
      name:'table',
      components: {
        Header,
        default:Table,
        // Footer?
      }
    },
    {
      path: '/detail:id',
      name:'detail',
      components: {
        Header,
        default:Detail,
        // Footer
      }
    }
  ]
})
