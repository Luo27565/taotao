<template>
    <div>
        <el-container class="container">
            <el-header height="60px">
                <div class="header">
                    <div class="header-font">后台管理</div>
                    <div>
                        <el-button class="el-icon-switch-button" circle></el-button>
                    </div>
                </div>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <NavMenu></NavMenu>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
            </el-container>
            <el-footer height="40px">Footer</el-footer>
        </el-container>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import NavMenu from '@/components/Nav-menu.vue';
    import {NavMenuModel} from '@/components/model/nav-menu.model';

    @Component({
        components: {
            NavMenu,
        },
    })
    export default class Index extends Vue {

        public navs: NavMenuModel[] = [
            {name: '首页', icon: 'icon-ali-home', router: '/cat/index', navItem: []},
            {
                name: '猫咪', icon: 'icon-ali-maomi1', router: 'cat', navItem: [
                    {name: '猫咪详情', icon: 'icon-ali-xiangqing', router: '/cat/detail'},
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
        background-color: #EEF5F9;

        .header {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .header-font {
                font-size: 20px;
            }
        }
    }

    .el-aside {
        background-color: #EEF5F9;
    }

</style>
