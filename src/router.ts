import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import Detail from '@/views/detail.vue';
import Home from '@/views/home.vue';
import Category from '@/views/category.vue';
import Add from '@/views/add.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/home',
            name: 'home',
            redirect: 'index',
            component: Index,
            meta: {
                name: '首页',
                icon: 'icon-ali-home',
            },
            children: [
                {path: '/index', name: 'index', component: Home},
            ],
        },
        {
            path: '/cat',
            name: '/cat',
            component: Index,
            meta: {name: '猫咪', icon: 'icon-ali-maomi1'},
            children: [
                {
                    path: '/cat/detail',
                    name: 'detail',
                    meta: {
                        name: '猫咪详情',
                        icon: 'icon-ali-xiangqing',
                    },
                    component: Detail,
                },
                {
                    path: '/cat/category',
                    name: 'category',
                    meta: {
                        name: '猫咪分类',
                        icon: 'icon-ali-icon',
                    },
                    component: Category,
                },
                {
                    path: '/cat/add',
                    name: 'add',
                    meta: {
                        name: '添加猫咪',
                        icon: 'icon-ali-tuanduicankaoxian-',
                    },
                    component: Add,
                },
            ],
        },
    ],
});
