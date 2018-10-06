/*
* @Author: zuofu
* @Date:   2018-09-15 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-15 12:39:29
*/
<template>
  <div class="col-lg-12">
    <template v-for="k in childrenList">
      <manage-top-p v-if="element === 'p'"
        :class="pclass"
        :type="type"
        :data="k"
      ></manage-top-p>
    </template>
  </div>
</template>

<script>
import store from '../store/store'
import dynamicP from '@/components/dynamicP'

export default {
  name: 'manageTop',
  data () {
    return {
      element: 'p',
      type: 'text',
      pclass: 'col-lg-1 h-40 fz120',
    }
  },
  store,
  computed: {
    childrenList: function () {
      var data = [];
      if (this.$store.state.collectMoneyData.rbState === 'reception') {
        data = ['订单编号', null, '客户ID', null, '客户类型', null, '级别', null, '积分', null, 'time', null];
        data[1] = this.$store.state.currentOrder.orderNumber;
        data[3] = this.$store.state.currentOrder.clientId;
        data[5] = this.$store.state.currentOrder.clientId !== 10000000?'会员': '临时客户';
        data[7] = this.$store.state.currentClientDatas.grade;
        data[9] = this.$store.state.currentClientDatas.credits;
        data[11] = this.$store.state.currentOrder.foundTime;
      }
      return data;
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
