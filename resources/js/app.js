require('./bootstrap');
// import VueCookies from 'vue3-cookies'
import { createApp } from 'vue';

import App from './App.vue';

import router from './router.js';
let isAuthenticate = window.authUser? window.authUser :null
router.beforeEach((to, from, next) => {
    if(to.path != '/login' && to.path !='/register') {
        //  if(to.path == '/register'){
        //     if(isAuthenticate) {
        //         // logger('There is a token, resume. (' + to.path + ')');
        //         next('/');
        //     }else if(to.path != '/register'){
        //         if(isAuthenticate){
        //             next()
        //         }else{
        //             next('login');
        //         }
        //     }else{
        //         next();
        //     }
        // }
        if(isAuthenticate) {
            // logger('There is a token, resume. (' + to.path + ')');
            next();
        } else {
            // logger('There is no token, redirect to login. (' + to.path + ')');
            next('login');
        }
    }else if(to.path=='/login'){
        if(isAuthenticate) {
            // logger('There is a token, resume. (' + to.path + ')');
            next('/');
        }else{
            next();
        }
    } else if(to.path=='/register'){
        if(isAuthenticate) {
            // logger('There is a token, resume. (' + to.path + ')');
            next('/');
        }else{
            next();
        }
    }else {
        // logger('You\'re on the login page');
        next(); // This is where it should have been
    }
//   next();
});

createApp(App).use(router).mount('#app');