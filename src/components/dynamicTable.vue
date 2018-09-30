/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <div id="table1">
    <table class="table col-lg-12">
      <thead>
        <tr>
          <td v-for="k in thlist" class="text-center" :class="k.class">{{k.text}}</td>
        </tr>
      </thead>
      <tbody class="table-striped">
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'dynamicTable',
  data () {
    return {
      compentname: 'is dynamicTable',
      thlist: [
        {text: '订单编号', class: 'col-lg-1'},
        {text: '商品名称', class: 'col-lg-1'},
        {text: '商品编号', class: 'col-lg-1'},
        {text: '详情', class: 'col-lg-6'},
        {text: '单价', class: 'col-lg-1'},
        {text: '重量', class: 'col-lg-1'},
        {text: '总价', class: 'col-lg-1'}]
    }
  }
}
</script>

<style scoped>
  #table1 {height: 70%;}
</style>
