import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/faq',
        name: 'da-faq',
        component: () => import(/* webpackChunkName: "FAQ" */ '@/views/FAQ')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "Home" */ '@/views/Home'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import(/* webpackChunk: "Search" */ '@/views/Search')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
