<template>
  <a-layout class="basicLayout">
    <Sidebar />
    <div class="basicContainer">
      <basicHead />
      <basicMain />
    </div>
  </a-layout>
</template>

<script>
import { Sidebar, basicHead, basicMain } from './component'

export default {
  name: 'BasicLayout',
  components: {
    Sidebar,
    basicHead,
    basicMain
  }
}
</script>

<style lang="less" scoped>

</style>
