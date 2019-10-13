<template>
    <div>
        <h2>Hello World!</h2>
        <ButtonGroup :input='buttons'></ButtonGroup>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ButtonGroup from '@/components/Button-group.vue';
    import {ButtonGroupModel} from '@/components/model/button-group.model';

    @Component({
        components: {
            ButtonGroup,
        },
    })
    export default class Index extends Vue {
        public buttons: ButtonGroupModel[] = [{name: '关闭', id: 'close'}, {name: '刷新', id: 'refresh'}];
    }
</script>

<style scoped>

</style>
