import { createRouter, createWebHistory } from 'vue-router'
const Home = () =>
  import ('../views/home/Home')
const Category = () =>
  import ('../views/category/Category')
const Cart = () =>
  import ('../views/cart/Cart')
const Profile = () =>
  import ('../views/profile/Profile')
const Detail = () =>
  import ('../views/detail/Detail')
const Login = () =>
  import ('../views/login/Login')

const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  }, {
    path: '/profile',
    component: Profile
  }, {
    path: '/detail/:iid',
    component: Detail
  }, {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router