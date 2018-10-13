<template>
  <div id="tablewrap">
    <table class="col-lg-12 table table-hover">
      <thead>
        <tr>
          <th class="w-30">*</th>
          <th class="w-50">序号</th>
          <th class="w-100">条码</th>
          <th class="w-100">商品名称</th>
          <th class="w-100">商品代码</th>
          <th class="w-50">类别</th>
          <th class="w-100">生产日期</th>
          <th class="w-200">过期日期</th>
          <th class="w-200">描述</th>
          <th class="w-200">备注</th>
          <th class="w-100">原价</th>
          <th class="w-100">结算单价</th>
          <th class="w-50">数量</th>
          <th class="w-50">单位</th>
          <th class="w-100">总价</th>
        </tr>
      </thead>
      <tbody class="table-striped">
        <tr v-for="k in trList" :key="k.commodityNumber" @click.stop="checkedthis(k)">
          <td>
            <input type="checkbox" style="display: none" class="magic-checkbox" :name="tableList">
            <label for="tableList"></label>
          </td>
          <td>{{computeIndex(k)+1}}</td>
          <td>{{k.barCode}}</td>
          <td>{{k.commodityName}}</td>
          <td>{{k.commodityNumber}}</td>
          <td>{{k.category}}</td>
          <td>{{k.dateProduced}}</td>
          <td>{{k.dateOverdue}}</td>
          <td>{{k.describe}}</td>
          <td>{{k.remark}}</td>
          <td>{{k.originalP}}</td>
          <td>{{k.settlementP}}</td>
          <td>{{k.weight}}</td>
          <td>{{k.unit}}</td>
          <td>{{k.settlementP*k.weight}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store/store'

export default {
  name: 'subjectTable',
  data () {
    return {
      text: 'is a table',
      tableList: 'tableList'
    }
  },
  store,
  computed: {
    trList () {
      return this.$store.state.currentOrder.datas;
    },
    orderNumber () {
      return this.$store.state.currentOrder.orderNumber;
    },
    clientId () {
      return this.$store.state.currentOrder.clientId;
    }
  },
  methods: {
    computeIndex: function (event) {
      //计算传入对象项在当前数组的位置，findIndex（ES6）
      var list = this.$store.state.currentOrder.datas;
      var n = list.findIndex(function(value, index, arr){
        return value === event;
      });
      return n;
    },
    checkedthis: function (objz) {
      //点击选中或取消该行选择
      //获取table中的input选项对象数组
      var f = document.getElementsByName(this.tableList);
      //计算选中项在当前数组的位置
      var n = this.computeIndex(objz);
      console.log(objz);
      //判断是否为单项选择限制，若为单选则先清除table中的所有选中项
      if (this.$store.state.collectMoneyData.selectState === true) {
        for (var i = 0; i < f.length; i++) {
          f[i].checked = false;
        }
        var list = this.$store.state.operateCache.subjectTable;
        for (var j = 0; j < list.length; j++) {
          this.$store.commit('changeOperateCache', list[j]);
        }
      };
      f[n].checked = f[n].checked===true||f[n].checked===null ? false : true;
      this.$store.commit('changeOperateCache', objz.barCode);
    }
  }
}
</script>

<style scoped>
td {
  text-overflow:ellipsis;
}
#tablewrap {
  height: 700px;
  overflow: auto;
  text-align: left;
}
</style>