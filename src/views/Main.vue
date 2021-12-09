<!-- 布局框架 -->
<template>
  <a-layout class="layout">
    <Header/>
    <a-layout-content style="height:100%">
      <Essay/>
    </a-layout-content>
    <a-layout-footer class="footer">
      Game Bolg ©2021 Created by Bmjx
    </a-layout-footer>
  </a-layout>
</template>

<script>
import Essay from '@/views/Essay'
import Header from '@/components/layout/Header'

export default {
  name: 'Main',
  components: {
    Header,
    Essay
  },
  setup () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.layout {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: hidden;
  background-color: #ffffff;

  .footer {
    margin-top: 15px;
    text-align: center;
  }
}
</style>
