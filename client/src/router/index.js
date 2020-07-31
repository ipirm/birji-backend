import VueRouter from 'vue-router'
import Vue from 'vue'

const LoginPage = () => import(/* webpackChunkName: "login" */ '../pages/auth/LoginPage')
const UserPage = () => import(/* webpackChunkName: "user" */ '../pages/users/UserPage')


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: LoginPage,
        },
        {
            path: '/users',
            component: UserPage,
        }
    ]
})

export default router