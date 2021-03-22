<template>
  <a-layout class="basicLayout">
    <Sidebar />
    <div class="basicContainer">
      <BasicHead />
      <BasicMain />
    </div>
  </a-layout>
</template>

<script>
import { Sidebar, BasicHead, BasicMain } from './component'

export default {
  name: 'BasicLayout',
  components: {
    Sidebar,
    BasicHead,
    BasicMain
  }
}
</script>

<style lang="less" scoped>
.basicContainer{
  flex: 1 1 0;
}
</style>
