import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
declare module 'vue-router' {
    interface RouteMeta {
        title: string;
    }
}
const routes: RouteRecordRaw[] = [
    {
        path: '/', // 页面路径
        name: 'Home', // 页面名称
        component: () => import('../views/Home/index.vue'), // 导入的组件
        meta: {
            title: "主页" // 页面标题
        }
    },
    {
        path: '/genshin', // 页面路径
        name: 'Genshin', // 页面名称
        component: () => import('../views/Genshin/index.vue'), // 导入的组件
        meta: {
            title: "原神" // 页面标题
        }
    },
    {
        path: '/starrail', // 页面路径
        name: 'StarRail', // 页面名称
        component: () => import('../views/StarRail/index.vue'), // 导入的组件
        meta: {
            title: "崩坏：星穹铁道" // 页面标题
        }
    },
    {
        path: '/zzz', // 页面路径
        name: 'ZZZ', // 页面名称
        component: () => import('../views/ZZZ/index.vue'), // 导入的组件
        meta: {
            title: "绝区零" // 页面标题
        }
    },
    {
        path: '/honkaiimpact', // 页面路径
        name: 'HonkaiImpact', // 页面名称
        component: () => import('../views/HonkaiImpact/index.vue'), // 导入的组件
        meta: {
            title: "崩坏3" // 页面标题
        }
    }
];
const router = createRouter({history: createWebHashHistory(), routes});
router.afterEach((to) => {
    document.title = "米哈游祈愿记录导出工具" + " - " + to.meta.title;
})
export default router;