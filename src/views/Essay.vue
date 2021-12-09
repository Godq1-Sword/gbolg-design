<template>
  <div id="container">
    <div id="content-navigation">
      <NavBar/>
    </div>
    <div id="content-essay">
      <MavonEditor/>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import NavBar from '@/components/Menu/NavBar'
import MavonEditor from '@/components/util/MavonEditor'

export default ({
  name: 'Essay',
  components: {
    NavBar,
    MavonEditor
  },
  data () {
    return {
      selectedKeys: ref('1')
    }
  }
})
</script>
<style lang="less" scoped>
// 容器style
#container {
  height: 100%;
  margin-left: 25%;
  margin-right: 25%;

  #content-navigation {
    float: left;
    position: relative;
    width: 200px;
    height: 100%;
  }

  #content-essay {
    float: left;
    position: relative;
    width: calc(100% - 200px);
    height: 100%;
  }
}
</style>
