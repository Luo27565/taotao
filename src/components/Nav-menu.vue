<template>
    <div>
        <el-menu background-color="#EEF5F9" :default-active="navMenus[0].path"
                 active-text-color="#378FE7" router>
            <template v-for="(item, index) in navMenus">
                <el-menu-item v-if="item.children.length===1" :index="item.redirect" :key="item.id">
                    <i :class="item.meta.icon"></i>
                    <span>{{item.meta.name}}</span>
                </el-menu-item>
                <el-submenu v-if="item.children.length>1" :index="item.children[index].path">
                    <template slot="title">
                        <i :class="item.meta.icon"></i>
                        <span>{{item.meta.name}}</span>
                    </template>
                    <el-menu-item-group v-for="group of item.children" :key="item.id">
                        <el-menu-item :index="group.path">
                            <i :class="group.meta.icon"></i>
                            <span>{{group.meta.name}}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </template>
        </el-menu>
    </div>

</template>

<script>
    export default {

        name: 'NavMenu',
        data() {
            return {navMenus: this.$router.options.routes};
        },
    };
</script>

<style scoped>

</style>
