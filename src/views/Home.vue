<template>
  <div class="home">
    <el-container>
      <el-header height='80px'>Header</el-header>
      <el-container class="center">
        <el-aside width="200px">
            <el-menu router :default-active="activeIndex" class="el-menu-demo" @select="handleSelect">
            <el-menu-item index="/home">home</el-menu-item>
            <el-submenu index="/payment">
              <template slot="title" index='/payment'>payment</template>
              <el-menu-item index="/payment/online">Online</el-menu-item>
              <el-menu-item index="/payment/invoicing">Invoicing</el-menu-item>
              <el-menu-item index="/payment/subscriptions">Subscriptions</el-menu-item>
              <!-- <el-submenu index="/checkout">
                <template slot="title">Checkout</template>
                <el-menu-item index="/checkout/overview">Overview</el-menu-item>
                <el-menu-item index="/checkout/integration">Sample integration</el-menu-item>
                <el-menu-item index="/checkout/orders">Fulfill your orders</el-menu-item>
              </el-submenu> -->
            </el-submenu>
            <!-- <el-menu-item index="/products">All products</el-menu-item> -->
          </el-menu>
          <div class="line"></div>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
      <el-footer height='80px'>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      activeIndex: '/payment/online'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
  .center {
    height: calc(100vh - 180px);
    /deep/ .el-menu {
      background: #D3DCE6;
    }
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 80px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .home .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
