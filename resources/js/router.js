import { createRouter, createWebHistory } from 'vue-router'
import Registration from './component/Registration'
import Login from './component/Login'
import Home from './component/index'
import hello from './component/hello'

// import axios from 'axios'
const routes = [
  {
    path: '/register',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name:'Home',
    component:Home
  },
  {
    path: '/hello',
    name: 'hello',
    component: hello
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if(to.path != '/login') {
//       if(checkToken()) {
//           logger('There is a token, resume. (' + to.path + ')');
//           next();
//       } else {
//           logger('There is no token, redirect to login. (' + to.path + ')');
//           next('login');
//       }
//   } else {
//       logger('You\'re on the login page');
//       next(); // This is where it should have been
//   }
//   // next(); - This is in the wrong place
// });

export default router