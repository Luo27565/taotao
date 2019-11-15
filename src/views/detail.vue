<template>
    <div>
        <el-container class="container">
            <el-header height="60px">Header</el-header>
            <el-container>
                <el-aside width="200px">
                    <NavMenu :input="navs"></NavMenu>
                </el-aside>
                <el-main>Main</el-main>
            </el-container>
            <el-footer height="80px">Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavMenu from '@/components/Nav-menu.vue';
    import {NavMenuModel} from '@/components/model/nav-menu.model';

    @Component({
        components: {
            NavMenu
        },
    })
    export default class Detail extends Vue {
        public navs: NavMenuModel[] = [
            {name: '首页', icon: 'icon-ali-home', router: 'home', navItem: []},
            {
                name: '猫咪', icon: 'icon-ali-maomi1', router: 'cat', navItem: [
                    {name: '猫咪详情', icon: 'icon-ali-xiangqing', router: 'detail'},
                    {name: '猫咪分类', icon: 'icon-ali-icon', router: 'category'},
                    {name: '添加猫咪', icon: 'icon-ali-tuanduicankaoxian-', router: 'add'},
                ],
            },
            {
                name: '订单',
                icon: 'icon-ali-ziyuan',
                router: 'order',
                navItem: [{name: '订单管理', icon: 'icon-ali-guanli', router: 'manage'}],
            }, {
                name: '报表',
                icon: 'icon-ali-baobiao',
                router: 'report',
                navItem: [{name: '猫咪报表', icon: 'icon-ali-cat1', router: 'charts'}],
            },
        ];

    }

</script>

<style scoped lang="scss">
    .container {
        height: 100vh;
    }

    .el-header {
        text-align: center;
        background-color: #B3C0D1;
    }

</style>
