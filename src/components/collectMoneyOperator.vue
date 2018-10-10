/*
* @Author: zuofu
* @Date:   2018-09-17 12:39:29
* @Last Modified by:   zuofu
* @Last Modified time: 2018-09-17 12:39:29
* :function(functionName,k.operator)
*/
<template>
  <div>
    <p v-for="k in operator" :key="k.id" v-show="k.show" class="col-xs-5 h-40">
      <button :disabled="disableStatus(k)"
        @click="handleFs(k.order)"
        @mouseover="cutClass('mouseIn')"
        @mouseout="cutClass('mouseIn')"
      >
        {{k.text}}
      </button>
    </p>
  </div>
</template>

<script>
import store from '../store/store'
import commonality from '../assets/commonalityFn.js'

export default {
  name: 'moneyOperator',
  data () {
    return {
      operator: {
        of1: {id: 'addorder', show: true, text: '增', order: 'ADD', disable: false, mouseIn: false},
        of2: {id: 'alterorder', show: true, text: '改', order: 'ALT', disable: false, mouseIn: false},
        of3: {id: 'deleteorder', show: true, text: '删', order: 'DEL', disable: false, mouseIn: false},
        of4: {id: 'clearorder', show: true, text: '清空', order: 'CLR', disable: false, mouseIn: false},
        of5: {id: 'rollbackorder', show: true, text: '回退', order: 'RBK', disable: false, mouseIn: false},
        of6: {id: 'findorder', show: true, text: '查找', order: 'QUERY', disable: false, mouseIn: false}
      }
    }
  },
  store,
  props: ['functionName'],
  computed: {
    disable: function () {
      return this.$store.state.user.pck ? false : true;
    },
    rbState: function () {
      return this.$store.state.collectMoneyData.rbState;
    },
  },
  methods: {
    cutClass: function (class1, class2) {
      class2 ? commonality.cutClass(event, class1, class2) : commonality.cutClass(event, class1);
    },
    disableStatus: function (elmt) {
      this.operator.of2.disable = this.rbState === 'reception' ? false : true;
      return this.disable ? this.disable : elmt.disable;
    },
    handleFs: function (elmt) {
      switch (elmt) {
        case 'ADD':
          this.$store.commit('changePopShow', 'addDataShow');
          this.$store.commit('changeAddDataAffiliation', 'ADD');
          setTimeout("document.getElementsByName('addData')[0].focus()", 50);
          break;
        case 'ALT':

          break;
        case 'DEL':
          this.$store.commit('deletCurrentOrder', this.rbState);
          break;
        case 'CLR':
          var table = null;
          var datas = this.$store.state.collectMoneyData;
          table = datas.tableComponent === 'subjectTable' ? document.getElementsByName('tableList') : document.getElementsByName('backstageTable');
          //执行全选
          for (var i = 0; i < table.length; i++) {
            console.log(table[i].checked);
            table[i].checked === false ? table[i].click() : null;
            console.log(table[i]);
            console.log(table[i].checked);
          }
          //弹出警告框
          //执行删除
          this.$store.commit('deletCurrentOrder', this.rbState);
          console.log(this.$store.state.operateCache.orderHandling);
          break;
        case 'RBK':
          //服务器端数据状态{数据现在状态，缓存上一次，上上一次，上上上一次的更新状态}
          //服务器端数据回退到上次状态，然后返回现有状态
          break;
        case 'QUERY':
          this.$store.commit('changePopShow', 'addDataShow');
          this.$store.commit('changeAddDataAffiliation', 'QUERY');
          setTimeout("document.getElementsByName('addData')[0].focus()", 50);
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.h-40 {
  height: 40px;
  color: red;
}
p {
  margin: 0 5px 10px 5px;
  padding: 0;
  border: 2px solid #D25565;
  border-radius: 3px;
  font-size: 120%;
}
button {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50%;
  border: none;
  outline:none;
  color: #D25565;
  background-color: rgba(0,0,0,0);
}
div {
  box-sizing:border-box;
  height: 240px;
  margin: 10px;
  border-bottom: 2px solid #D25565;
}
button:disabled {
  color: #6E6E6E;
}
</style>
