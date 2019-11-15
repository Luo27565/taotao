import Vue from 'vue';
import Router from 'vue-router';
import Index from './views/index.vue';
import Detail from '@/views/detail.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {path: '/', redirect: '/index'},
        {path: '/index', name: 'index', component: Index},
        {path: '/detail', name: 'detail', component: Detail},
    ],
});
