import Login from '@/views/login/Login.vue'

export default [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    name: 'Login',
    path: '/Login',
    component: Login,
    meta: {
      cache: true,
      title: '登录'
    }
  },
  {
    name: 'Register',
    path: '/Register',
    component: import('@/views/login/Register'),
    meta: {
      cache: true,
      title: '注册'
    }
  },
]