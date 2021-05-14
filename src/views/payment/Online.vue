<template>
  <div class="test markdown-body">
    <Md />
  </div>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import Md from "@/views/payment/README.md"
import CodeCopy from "@/views/CodeCopy";
import marked from "marked";
import Vue from "vue";

export default {
  name: "Test",
  components: {Md},
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
}
</script>

<style>

/* 因为默认的代码块没有样式，所以添加一个背景色 */
.code-copy-added {
  background-color: #282c34!important;
  color: white;
  padding: 25px 20px;
  margin: 10px 0;
  text-align: left;
  border-radius: 3px;
  position: relative!important;
  .copy-btn {
    position: absolute;
    right: 5px;
    top: 5px
  }
}
pre:hover .copy-btn {
  opacity: 1;
}
</style>
