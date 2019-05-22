import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/index.vue'
import login from '@/components/sign/index.vue'// 登录注册
import register from '@/components/sign/register.vue' // 注册
import password from '@/components/sign/login.vue' // 登录
import Member from '@/components/Member/index.vue'// 会员中心公共组件
import ShoppingCart from '@/components/ShoppingCart/index.vue'
import purchase from '@/components/purchase/index.vue'
import BrandStory from '@/components/BrandStory/index.vue'// 品牌故事
import TopNavigation from '@/components/public/TopNavigation.vue' // 顶部
import TopBanner from '@/components/public/TopBanner.vue' // 顶部导航
import search from '@/components/public/search.vue' // 搜索
import ClassNav from '@/components/public/ClassNav.vue' // banner导航
import HelpCenter from '@/components/HelpCenter/index.vue' // 帮助中心
import Notice from '@/components/Notice/index.vue'
import BottomNav from '@/components/public/BottomNavigation.vue' // 公共底部
import ReceivingAddress from '@/components/ReceivingAddress/index.vue'// 添加地址
import ChangePassword from '@/components/ChangePassword/index.vue'// 修改密码
import MyInformation from '@/components/MyInformation/index.vue' // 我的资料
import Personal from '@/components/Member/Member.vue' // 会员中心
import Collectionlist from '@/components/Collectionlist/index.vue' // 收藏列表
import Orderlist from '@/components/Orderlist/index.vue' // 订单列表
import details from '@/components/Orderlist/details.vue'// 订单详情
import SearchList from '@/components/Search_list/index.vue' // 列表页
import Agreement from '@/components/Agreement/index.vue' // 注册协议
import clickAddress from '@/components/ReceivingAddress/address.vue' // 点击添加地址
import City from '@/components/ReceivingAddress/City.vue' // 城市选择
import Forgetpassword from '@/components/ChangePassword/Forgetpassword.vue' // 忘记密码
import emalpassword from '@/components/ChangePassword/password.vue' // 邮箱找回密码
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Home
      }
    },
    {
      path: '/login',
      components: {
        default: login
      },
      children: [{
        path: '',
        component: password
      },
      {
        path: 'register',
        component: register
      }
      ]
    },
    {
      path: '/purchase',
      components: {
        default: purchase
      }
    },
    {
      path: '/password',
      components: {
        default: password
      }
    },
    {
      path: '/Member',
      components: {
        default: Member
      },
      children: [{
        path: '',
        component: Personal
      },
      {
        path: 'MyInformation',
        component: MyInformation
      },
      {
        path: 'ChangePassword',
        component: ChangePassword
      },
      {
        path: 'ReceivingAddress',
        component: ReceivingAddress
      },
      {
        path: 'Collectionlist',
        component: Collectionlist
      },
      {
        path: '/Collectionlist/:id',
        component: details
      },
      {
        path: '/ReceivingAddress/:id',
        component: clickAddress
      },
      {
        path: 'Orderlist',
        component: Orderlist
      },
      {
        path: 'details',
        components: {
          details
        }
      }
      ]
    },
    {
      path: '/purchase',
      components: {
        default: purchase
      }
    },
    {
      path: '/ShoppingCart',
      components: {
        default: ShoppingCart
      }
    },
    {
      path: '/TopNavigation',
      components: {
        default: TopNavigation
      }
    },
    {
      path: '/TopBanner',
      components: {
        default: TopBanner
      }
    },
    {
      path: '/search',
      components: {
        default: search
      }
    },
    {
      path: '/ClassNav',
      components: {
        default: ClassNav
      }
    },
    {
      path: '/BottomNav',
      components: {
        default: BottomNav
      }
    },
    {
      path: '/BrandStory',
      components: {
        default: BrandStory
      }
    },
    {
      path: '/Notice/:id',
      components: {
        default: Notice
      }
    },
    {
      path: '/SearchList',
      components: {
        default: SearchList
      }
    },
    {
      path: '/HelpCenter',
      component: HelpCenter
    },
    {
      path: '/Agreement',
      components: {
        default: Notice
      }
    },
    {
      path: '/ReceivingAddress',
      components: {
        default: ReceivingAddress
      }
    },
    {
      path: '/ChangePassword',
      components: {
        default: ChangePassword
      }
    },
    {
      path: '/purchase',
      components: {
        default: purchase
      }
    },
    {
      path: '/City',
      components: {
        default: City
      }
    },
    {
      path: '/Agreement',
      components: {
        default: Agreement
      }
    },
    {
      path: '/Forgetpassword',
      components: {
        default: Forgetpassword
      },
      children: [{
        path: '',
        component: emalpassword
      }
      ]
    }
  ]
})
