<template>
  <div class="wrapper">
    <Navbar />
  </div>

</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: { Navbar }
}
</script>


<style lang="scss" scoped>
@import './assets/variables.scss';

.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
