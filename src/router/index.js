import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    // 前端
    path: '/userboard',
    component: () => import('../views/UserboardViews.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/HomeViews.vue'),
      },
      {
        path: 'userproducts',
        name: 'userproducts',
        component: () => import('../views/UserproductsViews.vue'),
      },
      {
        path: 'userproduct/:id',
        name: 'userproduct',
        component: () => import('../views/UserproductViews.vue'),
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('../views/UsercartViews.vue'),
      },
      {
        path: 'cartform',
        name: 'cartform',
        component: () => import('../views/UsercartformViews.vue'),
      },
      {
        path: 'cartcheck',
        name: 'cartcheck',
        component: () => import('../views/UsercartcheckViews.vue'),
      },
      {
        path: 'cartdone',
        name: 'cartdone',
        component: () => import('../views/UsercartdoneViews.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/UseraboutViews.vue'),
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../views/UsercontactViews.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('../views/UserloginViews.vue'),
      },
    ],
  },
  {
    // 後端
    path: '/dashboard',
    name: 'admin',
    component: () => import('../views/DashboardViews.vue'),
    children: [
      {
        path: 'dashproduct',
        name: 'dashproduct',
        component: () => import('../views/DashproductViews.vue'),
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('../views/DashorderViews.vue'),
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('../views/DashcouponViews.vue'),
      },
    ],
  },
  {
    // 不存在時導回首頁
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior() {
    return {
      top: 0,
    };
  },
  routes,
});

export default router;
