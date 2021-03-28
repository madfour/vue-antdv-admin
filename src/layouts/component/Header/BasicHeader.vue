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
      <a-dropdown class="lang header-item">
        <div><a-icon type="global" /> {{ langAlias }}</div>
        <a-menu
          slot="overlay"
          :selected-keys="[lang]"
        >
          <!--          @click="(val) => setLangsetLang(val.key)"-->

          <a-menu-item v-for="lang in langList" :key="lang.key">{{
            lang.key.toLowerCase() + " " + lang.name
          }}</a-menu-item>
        </a-menu>
      </a-dropdown>
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
      collapsed: false,
      langList: [
        { key: 'CN', name: '简体中文', alias: '简体' },
        { key: 'HK', name: '繁體中文', alias: '繁體' },
        { key: 'US', name: 'English', alias: 'English' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
@import url('index.less');
</style>
