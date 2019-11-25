import Home from './home/Home'
import Cart from './cart/Cart'
import User from './user/User'

const routes = [
  {
    id: 1,
    path: '/',
    component: Home,
    text: '首页'
  },
  {
    id: 2,
    path: '/cart',
    component: Cart,
    text: '购物车'
  },
  {
    id: 3,
    path: '/user',
    component: User,
    text: '我的'
  },
]

export default routes
