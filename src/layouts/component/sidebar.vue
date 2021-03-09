<template>
    <div class="sidebar">
      <div class="logo">
        <img :src="require('@/assets/images/logo.png')"></img>
        <div class="title">Admin.Jc</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'sidebar'
};
</script>

<style lang="less" scoped>
  @import '~@/styles/variable';

  .sidebar{
    width: @sidebar_with;
    background-color: @sidebar_bgColor;
    color: @sidebarColor;
  }

  .logo{
    height: @logoHeight;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    line-height: 38px;
    img{
      width: 38px;
    }
  }
</style>
