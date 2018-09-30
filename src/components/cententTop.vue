/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-lg-12">
    <template v-for="k in childrenList">
      <manage-top-p v-if="k.element === 'p'"
        :class="k.class"
        :type="k.type"
        :data="k.text"
      ></manage-top-p>
    </template>
  </div>
</template>

<script>
import dynamicP from '@/components/dynamicP'

export default {
  name: 'manageTop',
  data () {
    return {
      text: 'is a top',
      childrenList: [
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '客户ID'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '00001'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '客户类型'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '会员'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '级别'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: 'v1'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '积分'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '50'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '1'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '1'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '1'},
        {element: 'p', type: 'text', class: 'col-lg-1 h-40 fz120', text: '1'} 
      ]
    }
  },
  components: {
    'manageTopP': dynamicP
  }
}
</script>

<style scoped>
div {
  height: 60px;
  background-color: #bac2c6;
  padding: 10px 0;
  line-height: 40px;
}
</style>
