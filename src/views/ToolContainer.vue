<template>
    <div class="wrapper">
        <h2 class="heading">LISTA NARZĘDZIOWA</h2>
        <div class="container" v-for="tools in toolList" :key="tools.id">
            <ToolBox :program="tools.program" :client="tools.client" :draw="tools.draw_number" :photos="tools.photos" />
        </div>
    </div>
</template>
<script>
import ToolBox from '../components/ToolBox.vue';
import { Tools } from '../helpers/Tools';

export default {
    components: { ToolBox },
    data() {
        return {
            toolList: Tools,
        }
    }
}
</script>
<style lang="scss" scoped>
.wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;

    .heading {
        margin: 50px 0 50px;
        font-weight: bold;
        font-size: 30px;
    }
}
</style>