import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "404-view",
    component: () => import(/* webpackChunkName: "NOTFOUND" */ "@/views/404View"),
  },
  {
    path: "/faq",
    name: "da-faq",
    component: () => import(/* webpackChunkName: "FAQ" */ "@/views/FAQ"),
  },
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "@/views/Home"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import(/* webpackChunk: "Search" */ "@/views/Search"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import(/* webpackChunk: "Cart-page" */ "@/views/CartView"),
  },
  {
    path: "/products/:_id",
    name: "product-view",
    props: true,
    component: () =>
      import(/* webpackChunk: "Product-page" */ "@/views/ProductView"),
  },
  {
    path: "/artisans",
    name: "artisan-all",
    props: true,
    component: () =>
      import(/* webpackChunk: "Artisan-All" */ "@/views/ArtisanAll"),
  },
  {
    path: "/artisans/:_id",
    name: "artisan-view",
    props: true,
    component: () =>
      import(/* webpackChunk: "Artisan-page" */ "@/views/ArtisanView"),
  },
  {
    path: "/categories",
    name: "category-all",
    props: true,
    component: () =>
      import(/* webpackChunk "Category-All" */ "@/views/CategoryAll"),
  },
  {
    path: "/categories/:_id",
    name: "category-view",
    props: true,
    component: () =>
      import(/* webpackChunk "Category-view" */ "@/views/CategoryView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.ROUTES_BASE_URL,
  routes,
});

export default router;
