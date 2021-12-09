<template>
  <el-scrollbar id="mavon-scrollbar">
    <mavon-editor v-model="editorValue"
                  id="mavon-editor"
                  :navigation="true"
                  :toolbarsFlag="false"
                  :boxShadow="false"
                  :editable="false"
                  :shortCut="false"
                  :subfield="false"
                  :scrollStyle="false"
                  defaultOpen="preview"
                  @save="onSave"/>
  </el-scrollbar>
  <div id="mavon-catalogue">
    <a-tree
      :show-line="true"
      :tree-data="treeData"
      @select="onSelect"
      :showIcon="true"
    >
      <template #title="{ title }">
        <span>{{ title }}</span>
      </template>
      <template #switcherIcon>
        <CaretDownFilled/>
      </template>
    </a-tree>
  </div>
</template>

<script>
import { ref } from 'vue'
import { CaretDownFilled } from '@ant-design/icons-vue'

export default {
  name: 'MavonEditor.vue',
  components: {
    CaretDownFilled
  },
  setup () {
    const editorValue = ref('# H1-1\n' +
      '\n' +
      '## h2-1\n' +
      '\n' +
      '### h3-1\n' +
      '\n' +
      '### h3-2\n' +
      '\n' +
      '## h2-2\n' +
      '\n' +
      '### h3-1\n' +
      '\n' +
      '#### h4-1\n' +
      '\n' +
      '### h3-2\n' +
      '\n' +
      '#### h4-1\n' +
      '\n' +
      '# H1-2\n' +
      '\n' +
      '## h2-1\n' +
      '\n' +
      '### h3-1\n' +
      '\n' +
      '#### h4-1')
    const onSave = (value, render) => {
      console.log(render)
    }
    return {
      editorValue,
      onSave
    }
  },
  data () {
    let treeData
    return {
      treeData
    }
  },
  mounted () {
    this.$nextTick(() => {
      const treeData = []
      const hItems = document.querySelectorAll('.v-note-navigation-content')[0].children
      // 根目录put
      const root = {
        title: hItems[0].innerText,
        key: 0,
        children: [],
        tagName: hItems[0].tagName,
        parent: null
      }
      treeData.push(root)
      let preNode = root
      // 遍历生成目录树
      for (let i = 1; i < hItems.length; i++) {
        const treeNode = {
          title: hItems[i].innerText,
          key: i,
          children: [],
          tagName: hItems[i].tagName,
          parent: null
        }
        // 平级
        if (treeNode.tagName === preNode.tagName) {
          treeNode.parent = preNode.parent
          preNode.parent === null ? treeData.push(treeNode) : preNode.parent.children.push(treeNode)
          preNode = treeNode
        } else if (treeNode.tagName > preNode.tagName) { // 子级
          treeNode.parent = preNode
          preNode.children.push(treeNode)
          preNode = treeNode
        } else { // 父级
          while (true) {
            if (preNode.parent === null) { // 根元素
              treeData.push(treeNode)
              break
            } else if (preNode.tagName === treeNode.tagName) { // 不是根元素
              preNode.parent.children.push(treeNode)
              treeNode.parent = preNode.parent
              break
            }
            preNode = preNode.parent
          }
          preNode = treeNode
        }
      }
      this.treeData = treeData
      console.log(treeData)
      return {}
    })
  }
}
</script>

<style lang="less" scoped>
#mavon-scrollbar {
  float: left;
  height: 100%;
  width: calc(100% - 220px);
  background-color: #fbfbfb;

  ::v-deep(.el-scrollbar__bar.is-vertical) {
    z-index: 9999;
  }

  #mavon-editor {
    border: 0;
    width: 100%;
    overflow-y: hidden;

    ::v-deep(.v-show-content) {
      padding-top: 0;
    }

    ::v-deep(.ant-tree-switcher.ant-tree-switcher-noop) {
      visibility: hidden;
    }

    ::v-deep(.v-note-wrapper.markdown-body) {
      height: 100%;
    }

    ::v-deep(.v-show-content h1:first-child) {
      margin-top: 0;
    }
  }
}

#mavon-catalogue {
  margin-left: 15px;
  float: left;
  width: 200px;
}
</style>
