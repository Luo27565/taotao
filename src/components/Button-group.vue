<template>

    <el-row>

        <el-button v-for="item in input" :key="item.index" @click="onButtonClick(item.id)">{{item.name}}</el-button>

    </el-row>

</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {ButtonGroupModel} from './model/button-group.model';

    @Component
    export default class ButtonGroup extends Vue {

        @Prop({default: []})
        public input!: ButtonGroupModel[];

        public onButtonClick(id: string) {
            this.$emit('output', id);
        }

    }
</script>

<style scoped>

</style>
