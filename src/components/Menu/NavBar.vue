<template>
  <div id="nav-bar">
    <el-scrollbar id="navigation-scrollbar">
      <el-menu default-active="1">
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="1">
          <template #title>
            <span>Java</span>
          </template>
          <el-menu-item-group title="JVM">
            <el-menu-item index="1-1">JVM内存模型</el-menu-item>
            <el-menu-item index="1-2">JVM调优</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="less" scoped>
// 侧边菜单栏
#nav-bar {
  height: 100%;
  width: 200px;
  border-right: 1px solid #f0f0f0;

  // 滚动条
  #navigation-scrollbar {
    width: 200px;
    height: 100%;

    // 分组菜单标题
    ::v-deep(.el-sub-menu__title) {
      height: 32px;

      span {
        font-size: 12pt;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        color: #39547a;
        font-weight: 600;
      }
    }

    // 一级菜单
    .el-menu-item {
      height: 30px;
      margin-top: 4px;
      margin-bottom: 4px;
      font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;

      span {
        font-size: 12pt;
        font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
        color: #39547a;
        font-weight: 600;
      }
    }
  }

  // 二级分组
  .el-menu-item-group {
    font-size: 14px;
  }
}

::v-deep(.el-menu-item-group__title) {
  font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  margin-top: 4px;
  margin-bottom: 4px;
}

::v-deep(.el-menu-item-group__title:after) {
  position: relative;
  top: 6px;
  display: block;
  width: calc(100% - 40px);
  height: 1px;
  background: #f0f0f0;
  content: "";
}
</style>
