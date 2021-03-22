<template>
  <a-layout-header class="basic-header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="() => (collapsed = !collapsed)"
    />
    <!--    <header-avatar class="header-item" />-->
    <a-row>
      right
    </a-row>
  </a-layout-header>
</template>

<script>
import HeaderAvatar from './HeaderAvatar'
export default {
  name: 'BasicHeader',
  comments: { HeaderAvatar },
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
