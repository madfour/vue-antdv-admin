<template>
  <a-layout-sider
    v-model="collapsed"
    class="sidebar"
    :style="`width: ${sideMenuWidth}; min-width: ${sideMenuWidth};max-width: ${sideMenuWidth};`"
  >
    <div class="logo">
      <img :src="require('@/assets/images/logo.png')" alt="图片信息">
      <div class="title">Admin.Jc</div>
    </div>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <a-icon type="user" />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <a-icon type="video-camera" />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="upload" />
        <span>nav 3</span>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="mail" /><span>Navigation One</span>
        </span>
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
        <a-menu-item key="7">
          Option 7
        </a-menu-item>
        <a-menu-item key="8">
          Option 8
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="appstore" /><span>Navigation Two</span>
        </span>
        <a-menu-item key="9">
          Option 9
        </a-menu-item>
        <a-menu-item key="10">
          Option 10
        </a-menu-item>
        <a-sub-menu key="sub3" title="Submenu">
          <a-menu-item key="11">
            Option 11
          </a-menu-item>
          <a-menu-item key="12">
            Option 12
          </a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      collapsed: false
    }
  },
  computed: {
    sideMenuWidth() {
      return this.collapsed ? '80px' : '240px'
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/variable';
@import '~@/styles/scroll';

.sidebar {
  transition: color 0.3s;
  overflow-y: auto;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .beauty-scroll();

  .logo {
    background-color: @logoBgColor;
    height: 64px;
    font-size: 28px;
    font-weight: bold;
    color: white;
    .flex();

    img {
      height: 40px;
    }
  }
}
</style>
