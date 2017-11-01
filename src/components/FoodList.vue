
<template>

  <div class="foodList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table
      v-loading="loading"
      :data="dataList"
      height="250"
      border
      style="width: 100%">
      <el-table-column
        prop="createTime"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
  import $ from '../tool'
  export default {
    name: 'FoodList',
    data: function () {
      return {
        isCollapse: true,
        dataList: [],
        loading: true
      }
    },
    created: function () {
      var that = this
      this.$ajax.get('http://localhost:8888/foods').then(function (res) {
        console.log(res.data)
        if (res.data.code === 0) {
          that.loading = false
          res.data.dataList.forEach(function (value, key) {
            console.log(value)
            value.createTime = $.date(value.createTime)
          })
          that.dataList = res.data.dataList
        }
      }).catch(function (err) {
        console.log(err)
        that.loading = false
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
