<template>
  <a-layout-header class="header">
    <a-row style="height: 64px">
      <a-col :span="4">
        <h1>
          <a id="logo-txt">
            <img alt="logo" id="logo-img" src="@/assets/SegaSaturn.png">
            jxGlog
          </a>
        </h1>
      </a-col>
      <a-col :span="4">
        <a-menu v-model:selectedKeys="current" mode="horizontal">
          <a-menu-item key="mail">
            <ContainerOutlined/>
            CodeGuide
          </a-menu-item>
          <a-menu-item key="app" disabled>
            Config
          </a-menu-item>
        </a-menu>
      </a-col>
      <a-col :span="6">
        <a-input-search v-model:value="searchValue" ref="searchRef" placeholder="Search"
                        style="width: 200px;border-radius: 10px;"
                        @search="onSearch" @focus="onFocus" @blur="onBlur"/>
      </a-col>
      <a-col :span="10" :push="8">
        <a-button type="link" size="Large"
                  style="color:#000000;"
                  @mouseenter="onMouseHover"
                  @mouseleave="onMouseHover">
          登录
        </a-button>
        <a-divider type="vertical"/>
        <a-button type="link" size="Large"
                  style="color: #000000;"
                  @mouseenter="onMouseHover"
                  @mouseleave="onMouseHover">
          注册
        </a-button>
      </a-col>
    </a-row>
  </a-layout-header>
</template>

<script>
import { ref } from 'vue'
import { ContainerOutlined } from '@ant-design/icons-vue'

export default {
  name: 'Header',
  components: {
    ContainerOutlined
  },
  setup () {
    const searchValue = ref('')
    const onSearch = (searchValue) => {
      console.log('use value', searchValue)
      console.log('or use this.value', searchValue.value)
    }
    // 搜索框获得焦点
    const searchRef = ref(null)
    const onFocus = (event) => {
      console.log(event.parent)
      searchRef.value.$el.style.width = '400px'
    }
    // 搜索框失去焦点
    const onBlur = () => {
      searchRef.value.$el.style.width = '200px'
    }
    // 登入/登出 鼠标移入事件
    const onMouseHover = (event) => {
      const refStyleColor = event.target.style.color
      if (refStyleColor === 'rgb(0, 0, 0)') {
        event.target.style.color = '#bbb'
      } else if (refStyleColor === 'rgb(187, 187, 187)') {
        event.target.style.color = '#000000'
      }
    }
    return {
      searchRef,
      searchValue,
      onSearch,
      onFocus,
      onBlur,
      onMouseHover
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.header {
  padding-left: 25%;
  margin-bottom: 15px;
  background: #ffffff;
  height: 64px;
  box-shadow: 0 2px 8px #f0f1f2;

  #logo-txt {
    margin-left: 20px;
    height: 64px;
    overflow: hidden;
    color: #000000d9;
    font-size: 18px;
    font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji", sans-serif;
    line-height: 64px;
    white-space: nowrap;
    text-decoration: none;
  }

  #logo-img {
    width: 32px;
    height: 32px;
    margin-right: 16px;
  }
}
</style>
