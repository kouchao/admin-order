<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <h5>{{logo}}</h5>

        <MenuList></MenuList>


      </el-aside>
      <el-container>
        <el-header>

        </el-header>
        <el-main>

          <router-view></router-view>

        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import MenuList from './components/MenuList'
  export default {
    name: 'app',
    data: function () {
      return {
        logo: '菜单'
      }
    },
    components: {
      MenuList
    }
  }
</script>

<style>
  #app {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .el-container {
    width: 100%;
    height: 100%;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }

  .el-main {
    background-color: #ffffff;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-breadcrumb {
    padding: 20px 15px;
    background: #fff;
    border: 1px solid #e6ebf5;
    border-bottom: 0;
  }

  ::-webkit-scrollbar {
    width: 0;
    opacity: 0;
  }

  .el-pagination {
    padding: 15px;
    border: 1px solid #e6ebf5;
    border-top: 0;
    text-align: right;
  }
</style>
