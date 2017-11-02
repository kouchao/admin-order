
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
      border
      style="width: 100%">
      <el-table-column
        prop="createTime"
        label="日期"
        sortable>
      </el-table-column>
      <el-table-column
        prop="name"
        label="菜品"
        sortable>
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        sortable>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.row)"  icon="el-icon-edit" size="small">编辑</el-button>
          <el-button type="danger" @click="handleDelete(scope.row)"  icon="el-icon-delete" size="small">删除</el-button>
          <!--<el-button @click="handleClick(scope.row)" type="text">查看</el-button>-->

        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>


  </div>

</template>

<script>
  import $ from '../util/tool'
  export default {
    name: 'FoodList',
    data: function () {
      return {
        isCollapse: true,
        dataList: [],
        loading: true,
        pageSize: 10,
        total: 0
      }
    },
    created: function () {
      this.getFoodList({
        page: 0,
        size: 10
      })
    },
    methods: {
      getFoodList: function (data) {
        var that = this
        var url = $.baseUrl + '/foods'
        this.$ajax.get(url, {
          params: data
        }).then(function (res) {
          console.log(res.data)
          if (res.data.code === 0) {
            that.loading = false
            res.data.dataList.forEach(function (value, key) {
              console.log(value)
              value.createTime = $.date(value.createTime)
            })
            that.dataList = res.data.dataList
            that.total = res.data.total
          }
        }).catch(function (err) {
          console.log(err)
          that.loading = false
        })
      },
      handleEdit: function (row) {
        console.log(row._id)
      },
      handleDelete: function (row) {
        console.log(row._id)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
