<template>
    <div id="menu">
      <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo">
        <el-submenu v-for="(fistMenu, fistIndex) in menu" :index="fistIndex + ''">
          <template slot="title">
            <i :class="fistMenu.icon"></i>
            <span>{{fistMenu.title}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(subMenu, subIndex) in fistMenu.subMenu"  :route="subMenu.url" :index="fistIndex + '-' + subIndex">{{subMenu.title}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
  export default {
    name: 'MenuList',
    data: function () {
      var data = {
        menu: [{
          title: '菜品管理',
          icon: 'el-icon-location',
          subMenu: [{
            title: '新增菜品',
            icon: 'el-icon-location'
          }, {
            title: '菜品列表',
            icon: 'el-icon-location',
            url: {
              path: '/foodList'
            }
          }]
        }]
      }
      return data
    }
  }
</script>

<style>

  .el-menu-item-group__title {
    display: none;
  }

</style>
