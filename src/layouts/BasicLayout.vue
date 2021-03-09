<template>
  <div class="basicLayout">
    <sidebar />
    <div class="basicContainer">
      <basicHead />
      <basicMain />
    </div>
  </div>
</template>

<script>
import { sidebar, basicHead, basicMain } from './component';
export default {
  name: 'basicLayout',
  components: {
    sidebar, basicHead, basicMain
  }
}
</script>

<style lang="less" scoped>
.basicLayout{
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
