<template>
    <div>
        <h2>Hello World!</h2>
        <ButtonGroup :input='buttons' @output="output"></ButtonGroup>
        <NavMenu :input="navs"></NavMenu>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ButtonGroup from '@/components/Button-group.vue';
    import {ButtonGroupModel} from '@/components/model/button-group.model';
    import NavMenu from '@/components/Nav-menu.vue';
    import {NavMenuModel} from '@/components/model/nav-menu.model';

    @Component({
        components: {
            NavMenu,
            ButtonGroup,
        },
    })
    export default class Index extends Vue {
        public buttons: ButtonGroupModel[] = [{name: '关闭', id: 'close'}, {name: '刷新', id: 'refresh'}];
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

        public output(id: string): void {
            if (id === 'close') {
                window.close();
            } else {
                alert(id);
            }
        }
    }
</script>

<style scoped>

</style>
