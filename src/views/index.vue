<template>
    <div>
        <h2>Hello World!</h2>
        <ButtonGroup :input='buttons' @output="output"></ButtonGroup>
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
