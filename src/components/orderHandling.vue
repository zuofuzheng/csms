<template>
  <div id="oderHandling">
    <table class="col-lg-12 table table-hover">
      <thead>
        <tr>
          <th class="w-30">*</th>
          <th class="w-50">序号</th>
          <th class="w-200">订单编号</th>
          <th class="w-100">生成时间</th>
          <th class="w-100">客户编号</th>
          <th class="w-100">数量</th>
          <th class="w-100">金额</th>
          <th class="w-100">挂起时间</th>
          <th class="w-200">状态</th>
          <th class="w-200">备注</th>
          <th class="w-200">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="k in trList" :key='k.orderNumber' @click="checkedthis(k)">
          <td>
            <input type="checkbox" style="display: none" class="magic-checkbox" :name="tableName">
            <label for="backstageTable"></label>
          </td>
          <td>{{computeIndex(k)+1}}</td>
          <td>{{k.orderNumber}}</td>
          <td>{{k.foundTime}}</td>
          <td>{{k.clientId}}</td>
          <td>{{k.number}}</td>
          <td>{{k.money}}</td>
          <td>{{k.hangupTime}}</td>
          <td>{{k.state}}</td>
          <td>{{k.remark}}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'orderHandling',
  data () {
    return {
      tableName: 'backstageTable'
    }
  },
  store,
  computed: {
    trList () {
      return this.$store.state.orderList;
    }
  },
  methods: {
    computeIndex: function (event) {
      //计算传入对象项在当前数组的位置，findIndex（ES6）
      var list = this.$store.state.orderList;
      var n = list.findIndex(function(value, index, arr){
        return value === event;
      });
      return n;
    },
    checkedthis: function (objz) {
      //点击选中或取消该行选择
      //获取table中的input选项对象数组
      var f = document.getElementsByName(this.tableName);
      //计算选中项在当前数组的位置
      var n = this.computeIndex(objz);
      //console.log(objz);
      //判断是否为单项选择限制，若为单选则先清除table中的所有选中项
      if (this.$store.state.collectMoneyData.selectState === true) {
        for (var i = 0; i < f.length; i++) {
          f[i].checked = false;
        }
        var list = this.$store.state.operateCache.orderHandling;
        for (var j = 0; j < list.length; j++) {
          this.$store.commit('changeOperateCache', list[j]);
        }
      }
      f[n].checked = f[n].checked === true ? false : true;
      this.$store.commit('changeOperateCache', objz.orderNumber);
    }
  }
}
</script>

<style>
#oderHandling {
  height: 800px;
  text-align: left;
}
</style>