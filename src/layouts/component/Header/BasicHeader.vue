<template>
  <a-layout-header class="basic-header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
  </a-layout-header>
</template>

<script>
export default {
  name: 'BasicHead',
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="less" scoped>
@import url('index.less');
</style>
