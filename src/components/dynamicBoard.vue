/*
* @Author: zuofu
* @Date:   2018-09-13 12:14:00
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-13 10:20:00
*/
<template>
  <div id="dynamic" class="col-lg-8">
    <p><span> </span></p>
    <template v-for="k in childrenList">
      <dynamic-p v-if="k.element === 'p'"
        :class="k.class"
        :type="k.type"
        :data="k.text"
      >
      </dynamic-p>
      <dynamic-ul v-if="k.element === 'ul'"></dynamic-ul>
      <dynamic-table v-if="k.element === 'table'"></dynamic-table>
    </template>
  </div>
</template>

<script>
import dynamicP from './dynamicP'
import dynamicUl from './dynamicUl'
import dynamicTable from './dynamicTable'

export default {
  name: 'dynamicBoard',
  data () {
    return {
      compentname: 'is dynamicBoard',
      showp: false,
      childrenList: [
        {element: 'p', type: 'text', class: 'col-md-3 h-60 fz300 bg-gray1', text: '日期'},
        {element: 'p', type: 'date', class: 'col-md-3 h-60 fz150 bg-gray2', text: ''},
        {element: 'p', type: 'text', class: 'col-md-3 h-60 fz300 bg-gray1', text: '时间'},
        {element: 'p', type: 'time', class: 'col-md-3 h-60 fz300 bg-gray2', text: '2'},
        {element: 'table', type: 'table', class: ''},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '客户编号'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'clientNumber'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: ''},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '商品名称'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'commodityName'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: ''},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '数量'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'quantity'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: '件'},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '原价'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'originalPrice'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: '￥'},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '客户类型'},
        {element: 'p', type: 'ctext', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'commodityName'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: ''},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '折扣价格'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'unitPrice'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: '￥'},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '优惠金额'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'discounts'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: '￥'},
        {element: 'p', type: 'text', class: 'col-md-2 h-40 fz200 bg-gray1', text: '重量'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-40 fz200 bg-gray2', text: 'weight'},
        {element: 'p', type: 'text', class: 'col-md-1 h-40 fz200 bg-gray2', text: 'kg'},
        {element: 'p', type: 'text', class: 'col-md-2 h-100 fz500 bg-gray1', text: '金额'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-100 fz500 bg-gray2', text: 'money'},
        {element: 'p', type: 'text', class: 'col-md-1 h-100 fz500 bg-gray2', text: '￥'},
        {element: 'p', type: 'text', class: 'col-md-2 h-100 fz500 bg-gray1', text: '总价'},
        {element: 'p', type: 'cnumber', class: 'col-md-3 h-100 fz500 bg-gray2', text: 'totolPrice'},
        {element: 'p', type: 'text', class: 'col-md-1 h-100 fz500 bg-gray2', text: '￥'}
      ]
    }
  },
  components: {
    'dynamicP': dynamicP,
    'dynamicUl': dynamicUl,
    'dynamicTable': dynamicTable
  }
}
</script>

<style scoped>
#dynamic {
  background-color:#8395a7;
  height:1080px;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
