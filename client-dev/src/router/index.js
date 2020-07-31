import store from '../store'

import VueRouter from 'vue-router'
import Vue from 'vue'

const LoginPage = () => import(/* webpackChunkName: "login" */ '../pages/auth/LoginPage')
const UserPage = () => import(/* webpackChunkName: "user" */ '../pages/users/UserPage')
const UserUpdate = () => import(/* webpackChunkName: "userUpdate" */ '../pages/users/user/UserUpdate')


Vue.use(VueRouter)
const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/users')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters['auth/isAuthenticated']) {
        next()
        return
    }
    next('/login')
}
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: LoginPage,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/users',
            component: UserPage,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/users/:id',
            component: UserUpdate,
            beforeEnter: ifAuthenticated,
        }
    ]
})



export default router