<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="hljs" ref="hlDiv" v-html="code"></div>
    <br />
    <div class="hljs" ref="hlDiv" v-html="code33"></div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
    ></el-input>
  </div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import CodeCopy from "@/views/CodeCopy";
import Vue from "vue";
export default {
  name: "About",
  data() {
    return {
      code: "```javascript\nfunction(){console.log(222)}\n```",
      code33: "```javascript\nvar name=333\n```",
      textarea: ""
    };
  },
  mounted() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      },
      pedantic: false,
      gfm: true,
      tables: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false
    });
    this.code = marked(this.code);
    this.code33 = marked(this.code33);
    this.update();
  },
  methods: {
    update() {
      setTimeout(() => {
        document.querySelectorAll("pre").forEach(el => {
          //   console.log(el)
          if (el.classList.contains("code-copy-added")) return;
          //   https://cn.vuejs.org/v2/api/index.html#Vue-extend
          /* 使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象 */
          console.log(CodeCopy);
          let ComponentClass = Vue.extend(CodeCopy);
          let instance = new ComponentClass();
          instance.code = el.innerText;
          instance.parent = el;
          /* 手动挂载 */
          instance.$mount();
          el.classList.add("code-copy-added");
          el.appendChild(instance.$el);
        });
      }, 100);
    }
  }
};
</script>
<style lang="less" scoped>

.hljs {
  position: relative;
}
/* 因为默认的代码块没有样式，所以添加一个背景色 */
pre {
  background-color: #282c34;
  color: white;
  padding: 25px 20px;
  margin: 10px 0;
  text-align: left;
  border-radius: 3px;
  position: relative;
}
pre:hover .copy-btn {
  opacity: 1;
}
</style>
