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
    },
    {
        path: '/p/:_id',
        name: 'product-view',
        props: true,
        component: () => import(/* webpackChunk: "Product-page" */ '@/views/ProductView')
    },
    {
        path: '/a/:_id',
        name: 'artisan-view',
        props: true,
        component: () => import(/* webpackChunk: "Artisan-page" */ '@/views/ArtisanView')
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunk: "Artisan-page" */ '@/views/CartView')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
