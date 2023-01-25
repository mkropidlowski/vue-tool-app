<template>
  <div class="wrapper">
    <Navbar />
  </div>

  <router-view />
</template>

<script>
import Navbar from './views/Navbar.vue';
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
