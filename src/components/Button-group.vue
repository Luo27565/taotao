<template>

    <el-row>

        <el-button v-for="item in input">{{item.name}}</el-button>

    </el-row>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {ButtonGroupModel} from './model/button-group.model';

    @Component
    export default class ButtonGroup extends Vue {

        @Prop({default: []})
        public input: ButtonGroupModel[];
    }
</script>

<style scoped>

</style>
