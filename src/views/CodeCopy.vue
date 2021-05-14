/* eslint-disable */
<template>
  <div class="copy-content">
    <!-- 复制按钮 -->
    <div
      class="copy-btn code-data-copy"
      @click="copyMessage"
      data-clipboard-action="copy"
      :data-clipboard-text="code"
    > 复制
    </div>
    <div v-if="success" class="copy-success-text">复制成功!</div>
  </div>
</template>

<script>
import Clipboard from 'clipboard' //复制插件
export default {
  data() {
    return {
      code: null,
      success: false
    }
  },
  methods: {
    copyMessage(value) {
      console.log(33333)
      let _this = this
      _this.success = false
      let clipboard = new Clipboard('.code-data-copy')
      clipboard.on('success', function(e) {
        console.log('复制成功')
        _this.success = true
        // setTimeout(() => {
        //   _this.success = false
        // }, 300)
        clipboard.destroy() // 销毁,避免多次点击重复出现
      })
      clipboard.on('error', function() {
        console.log('复制失败')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  width: 0.8rem;
  height: 0.8rem;
  fill: white;
}
.copy-btn {
  user-select: none;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
  padding: 5px;
  border-radius: 3px;
  transition: 0.3s;
  background: red;
  &:active {
    background: blue;
  }
}
.copy-success-text {
  color: white;
  position: absolute;
  font-size: 12px;
  top: 8px;
  right: 60px;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  animation: successCopy 0.5s ease both 1;
}
@keyframes successCopy {
  70% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.5);
  }
}
</style>