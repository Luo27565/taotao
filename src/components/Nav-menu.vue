<template>
    <div>
        <el-menu background-color="#EEF5F9"

                 active-text-color="#378FE7">
            <el-submenu v-for="item of input" :key="item.index" :index='item.router'>
                <template slot="title">
                    <i :class="item.icon"></i>
                    <span>{{item.name}}</span>
                </template>
                <el-menu-item-group v-if="item.navItem.length!==0">
                    <el-menu-item v-for="group of item.navItem" :key="group.index"
                                  :index='group.router'>
                        <i :class="group.icon"></i>
                        <span>{{group.name}}</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {NavMenuModel} from './model/nav-menu.model';

    @Component
    export default class NavMenu extends Vue {
        @Prop({default: []})
        public input!: NavMenuModel[];
    }
</script>

<style scoped>

</style>
